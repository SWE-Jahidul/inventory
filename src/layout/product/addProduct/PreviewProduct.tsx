import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";


export default function ProductPreview({
  open,
  onClose,
}: any) {
  // Sample demo data for the table
  const demoData = [
    { id: 1, name: "Product A", price: "$10.00", quantity: 2, total: "$20.00" },
    { id: 2, name: "Product B", price: "$15.00", quantity: 1, total: "$15.00" },
    { id: 3, name: "Product C", price: "$20.00", quantity: 3, total: "$60.00" },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        role="presentation"
        sx={{
          width: "75vw",
          p: 2,
          "@media (max-width: 800px)": {
            width: "90vw",
          },
          "@media (max-width: 600px)": {
            width: "100vw",
          },
        }}
      >
        <section className="px-6 text-gray-600  body-font">
          <div className="mb-4 text-black">
            <button className="font-bold" onClick={onClose}>
              <ArrowBackIcon className="pb-1" /> Go Back
            </button>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="lg:w-12/12 md:w-full">
              <div className="text-lg font-semibold">Product Details</div>
              <div className="mt-2">
                {/* Displaying Demo Data in a Table */}
                <table className="min-w-full table-auto text-center">
                  <thead className="">
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border borderpx-4 py-2">Price</th>
                      <th className="border px-4 py-2">Quantity</th>
                      <th className="border px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoData.map((item) => (
                      <tr key={item.id}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.price}</td>
                        <td className="border px-4 py-2">{item.quantity}</td>
                        <td className="border px-4 py-2">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </Drawer>
  );
}
