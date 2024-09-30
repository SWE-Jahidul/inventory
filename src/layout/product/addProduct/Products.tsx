import { useEffect, useState } from "react";
import Modal from "react-modal";
import AddProduct from "./AddProduct";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Swal from "sweetalert2";
import ProductPreview from "./PreviewProduct";
import Checkbox from "@mui/material/Checkbox";

interface Product {
  _id: string;
  order_num: string;
  total_qty: number;
  status: string;
  customer_name: string;
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
        _id: "66f07fd6009cac5a4429920c",
        order_num: "10Abdul",
        total_qty: 100,
        status: "check",
        customer_name: "Abdul",
      },
      {
        _id: "66f07fd6009cac5a4429920c",
        order_num: "10Abdul",
        total_qty: 100,
        status: "check",
        customer_name: "Abdul",
      },
      {
        _id: "66f07fd6009cac5a4429920c",
        order_num: "10Abdul",
        total_qty: 100,
        status: "check",
        customer_name: "Abdul",
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
    product.order_num.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePreview = (product: Product) => {
    setSelectedProduct(product);
    setPreviewVisible(true);
  };

  return (
    <div className="bg-[#e2e0e03a]">
      <div className="flex justify-between py-3 px-3">
        <div className="flex">
          <h1 className="text-3xl text-black font-semibold">Orders</h1>
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
            <tr className="text-black">
              <th>
                <MdCheckBoxOutlineBlank className="text-xl mx-auto"></MdCheckBoxOutlineBlank>{" "}
              </th>
              <th>Order No</th>
              <th>Total Quantity</th>
              <th>Status</th>
              <th>Customer Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr className="font-semibold text-p-purple" key={product._id}>
                <th className="border-y cursor-pointer">
                  <Checkbox />
                </th>
                <td
                  className="border-y cursor-pointer "
                  onClick={() => handlePreview(product)}
                >
                  <span className="bg-[#D3E0F0] px-3 py-1">
                    {" "}
                    {product.order_num}
                  </span>
                </td>
                <td className="border-y">{product.total_qty}</td>
                <td className="border-y">{product.status}</td>
                <td className="border-y">{product.customer_name}</td>
                <td className="border-y text-center">
                  <span className="flex items-center space-x-1 justify-center">
                    <p
                      className="cursor-pointer rounded bg-red-500 text-white py-1 px-2"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </p>
                    <p className="cursor-pointer rounded bg-blue-400 text-white py-1 px-2">
                      Edit
                    </p>
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
    </div>
  );
}
