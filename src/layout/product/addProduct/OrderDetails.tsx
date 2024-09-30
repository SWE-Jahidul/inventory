export default function OrderDetails() {
  return (
    <div className="text-black mt-7">
      <div className="flex sm:flex-col md:flex-row mb-7 ">
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">Order No:</h3>
          <h1 className="text-2xl text-gray-800 ">10 Abdul</h1>
        </div>
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold  uppercase tracking-wider mb-1">Total Quantity:</h3>
          <h1 className="text-2xl text-gray-800">1</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row  mb-7">
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold  uppercase tracking-wider mb-1">Origin Facilty:</h3>
          <h1 className="text-2xl text-gray-800">Calgory</h1>
        </div>
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold  uppercase tracking-wider mb-1">Destination facility:</h3>
          <h1 className="text-2xl text-gray-800">Calgory</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row  mb-7  ">
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold  uppercase tracking-wider mb-1">Coustomer Name:</h3>
          <h1 className="text-2xl text-gray-800">Abdul</h1>
        </div>
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold  uppercase tracking-wider mb-1">Customer Address:</h3>
          <h1 className="text-2xl text-gray-800">1 Bangladesh</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row mb-7">
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold  uppercase tracking-wider mb-1">Customer Alternate Address:</h3>
          <h1  className="text-2xl text-gray-800">2 Bangladesh</h1>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">
            City:
          </h3>
          <h1 className="text-2xl text-gray-800">Bangladesh</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row  mb-7">
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">Customer Postal Code:</h3>
          <h1 className="text-2xl text-gray-800">THB26E</h1>
        </div>
        <div className="text-left w-1/2">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">Customer Province:</h3>
          <h1 className="text-2xl text-gray-800">NU</h1>
        </div>
      </div>
    </div>
  );
}