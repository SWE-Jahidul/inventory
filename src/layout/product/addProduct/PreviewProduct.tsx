import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import OrderDetails from "./OrderDetails";

const demoData = [
  {
    sku: 1,
    service_type: "Product A",
    description: "Standard",
    parcel_type: 2,
    quantity: 1,
    Weight: 1.1,
    carton_id: "Not Provided",
    total_carton: 1,
    serial_number: "f6142",
  },
  {
    sku: 2,
    service_type: "Product A",
    description: "Standard",
    parcel_type: 2,
    quantity: 1,
    Weight: 1.1,
    carton_id: "Not Provided",
    total_carton: 1,
    serial_number: "f6142",
  },
  {
    sku: 3,
    service_type: "Product B",
    description: "Standard",
    parcel_type: 2,
    quantity: 1,
    Weight: 1.1,
    carton_id: "Not Provided",
    total_carton: 1,
    serial_number: "f6142",
  },
];

const OrderDetailsTable = () => {
  return (
    <div>
      <table className="min-w-full table-auto text-center">
        <thead>
          <tr>
            <th className="border px-4 py-2">SKU</th>
            <th className="border px-4 py-2">Service Type</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Parcel Type</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Weight</th>
            <th className="border px-4 py-2">Carton ID</th>
            <th className="border px-4 py-2">Total Carton</th>
            <th className="border px-4 py-2">Serial Number</th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((item) => (
            <tr>
              <td className="border px-4 py-2">{item.sku}</td>
              <td className="border px-4 py-2">{item.service_type}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.parcel_type}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.Weight}</td>
              <td className="border px-4 py-2">{item.carton_id}</td>
              <td className="border px-4 py-2">{item.total_carton}</td>
              <td className="border px-4 py-2">{item.serial_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function ProductPreview({ open, onClose }: any) {
  const [tabIndex, setTabIndex] = useState(0); // State to track the current tab

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

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
        <section className="px-6 text-gray-600 body-font">
          <div className="mb-4 text-black">
            <button className="font-bold" onClick={onClose}>
              <ArrowBackIcon className="pb-1" /> Go Back
            </button>
          </div>

          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="Order Details" /> <Tab label="Shipment" />
          </Tabs>

          {tabIndex === 0 && (
            <div>
              <OrderDetails />
            </div>
          )}
          {tabIndex === 1 && (
            <div>
              <OrderDetailsTable />
            </div>
          )}
        </section>
      </Box>
    </Drawer>
  );
}
