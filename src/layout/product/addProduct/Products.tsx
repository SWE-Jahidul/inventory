import { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
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

  const filteredProducts = products.filter((product) =>
    product.order_num.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePreview = (product: Product) => {
    setSelectedProduct(product);
    setPreviewVisible(true);
  };

  return (
    <div className="bg-[#e2e0e03a]">
      <div className="flex justify-between items-center py-3 px-12 bg-white mx-12 my-4">
        <h1 className="text-2xl font-semibold text-black font-Poppins">
          Orders
        </h1>
        <div className="flex ml-10 items-center justify-end rounded-md border md:w-96 sm:w-44 bg-white px-3 cursor-pointer">
          <IoIosSearch className="text-2xl text-black mr-2" />
          <input
            className="bg-white w-11/12 py-2 font-Poppins text-black outline-none"
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
          />
        </div>
      </div>
      <div
        className="overflow-y-auto scrollbar-hide mx-12"
        style={{ height: "calc(100vh - 125px)" }}
      >
        <table className="table-auto table rounded-none bg-white font-Poppins sm:w-3/12 md:w-full">
          <thead>
            <tr className="text-white bg-[#1f2947] text-[16px]">
              <th className="w-16">
                <MdCheckBoxOutlineBlank className="text-xl mx-auto"></MdCheckBoxOutlineBlank>{" "}
              </th>
              <th>Order No</th>
              <th>Total Quantity</th>
              <th>Status</th>
              <th>Customer Name</th>
              <th className="w-40 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                className="font-semibold text-p-purple even:bg-gray-200"
                key={product._id}
              >
                <th className="border-y cursor-pointer py-1 w-16 font-normal">
                  <Checkbox />
                </th>
                <td className="border-y py-1 font-normal uppercase" style={{fontWeight:500}}>
                  <span
                    className="bg-[#c6d4fd59] px-3 py-1 rounded cursor-pointer text-[#4a77ff]"
                    onClick={() => handlePreview(product)}
                  >
                    {product.order_num}
                  </span>
                </td>
                <td className="border-y py-1 font-normal">
                  {product.total_qty}
                </td>
                <td className="border-y py-1 font-normal">{product.status}</td>
                <td className="border-y py-1 font-normal">
                  {product.customer_name}
                </td>
                <td className="border-y text-right py-1 w-40 font-normal">
                  <span className="flex items-center space-x-1 justify-center">
                    <p className="cursor-pointer rounded bg-red-500 text-white py-1 px-2">
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
      <ProductPreview
        open={previewVisible}
        onClose={() => setPreviewVisible(false)}
        productData={selectedProduct}
      />
    </div>
  );
}
