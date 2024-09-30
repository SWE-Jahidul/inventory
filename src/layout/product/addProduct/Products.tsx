import { useEffect, useState } from "react";
import Modal from "react-modal";
import AddProduct from "./AddProduct";
import { IoIosAdd } from "react-icons/io";
import {MdCheckBoxOutlineBlank  } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Swal from "sweetalert2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProductPreview from "./PreviewProduct";
import OrderDetails from "./OrderDetails";

interface Product {
  _id: string;
  name: string;
  price: number;
  dosageForm: string;
  manufacturer: string;
  quantity: number;
}

export default function Products() {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 

  useEffect(() => {
    const productData: Product[] = [
      {
        _id: "66f07fd1009cac5a44299206",
        name: "check25",
        price: 100,
        dosageForm: "check",
        manufacturer: "check",
        quantity: 12,
      },
      {
        _id: "66f07fd2009cac5a44299208",
        name: "check26",
        price: 100,
        dosageForm: "check",
        manufacturer: "check",
        quantity: 12,
      },
      {
        _id: "66f07fd6009cac5a4429920c",
        name: "check28",
        price: 100,
        dosageForm: "check",
        manufacturer: "check",
        quantity: 12,
      },
    ];
    setProducts(productData);
  }, []);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProducts = products.filter(
          (product) => product._id !== id
        );
        setProducts(updatedProducts);
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePreview = (product: Product) => {
    setSelectedProduct(product);
    setPreviewVisible(true);
  };

  return (
    <div className="bg-[#e2e0e03a]">
      <div className="flex justify-between py-3 px-3">
        <div className="flex">
          <h1 className="text-3xl text-black font-semibold">Products</h1>
          <div className="flex ml-10 items-center rounded-md border w-96 bg-white px-3 cursor-pointer">
            <IoIosSearch className="text-2xl text-black mr-2" />
            <input
              className="bg-white w-11/12 font-raleway text-black outline-none"
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name..."
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            width: "50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
          },
        }}
      >
        <AddProduct setVisible={setVisible} />
      </Modal>

      <div
        className="overflow-y-auto scrollbar-hide mx-3"
        style={{ height: "calc(100vh - 125px)" }}
      >
        <table className="text-center table-auto table rounded-none bg-white font-raleway w-full">
          <thead>
            <tr>
              <th><MdCheckBoxOutlineBlank className="text-xl mx-auto"></MdCheckBoxOutlineBlank> </th>
              <th>Name</th>
              <th>Price</th>
              <th>Dosage Form</th>
              <th>Manufacturer</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr className="font-semibold text-p-purple" key={product._id}>
                <th onClick={() => handlePreview(product)} className="border-y cursor-pointer"> <span className="bg-slate-200 px-3 py-1 rounded hover:bg-slate-300">{index + 1}</span></th>
                <td className="border-y">{product.name}</td>
                <td className="border-y">{product.price}</td>
                <td className="border-y">{product.dosageForm}</td>
                <td className="border-y">{product.manufacturer}</td>
                <td className="border-y">{product.quantity}</td>
                <td className="border-y text-center">
                  <span className="flex items-center space-x-1 justify-center">
                    <p className="bg- rounded bg-red-500 text-white py-1 px-2">Delete</p>
                    <p className="bg- rounded bg-blue-400 text-white py-1 px-2">Edit</p>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={previewVisible}
        onRequestClose={() => setPreviewVisible(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.26)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            width: "50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
          },
        }}
      >
        {selectedProduct && (
          <ProductPreview
            open={previewVisible}
            onClose={() => setPreviewVisible(false)}
            productData={selectedProduct}
          />
        )}
      </Modal>
      <OrderDetails></OrderDetails>
    </div>
  );
}
