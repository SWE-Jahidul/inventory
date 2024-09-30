export default function OrderDetails() {
  return (
    <div className="w-3/5">
      <div className="flex sm:flex-col md:flex-row justify-between">
        <div>
          <h3 className="">Order No:</h3>
          <h1 className="text-2xl">10 Abdul</h1>
        </div>
        <div>
          <h3 className="">Total Quantity</h3>
          <h1 className="text-2xl">1</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between">
        <div>
          <h3 className="">Origin Facilty</h3>
          <h1 className="text-2xl">Calgory</h1>
        </div>
        <div>
          <h3 className="">Destination facility</h3>
          <h1 className="text-2xl">Calgory</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between">
        <div>
          <h3 className="">Coustomer Name</h3>
          <h1 className="text-2xl">Abdul</h1>
        </div>
        <div>
          <h3 className="">Customer Address</h3>
          <h1 className="text-2xl">1 Bangladesh</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between">
        <div>
          <h3 className="">Customer Alternate Address</h3>
          <h1 className="text-2xl">2 Bangladesh</h1>
        </div>
        <div>
          <h3 className="">Customer City</h3>
          <h1 className="text-2xl">Bangladesh</h1>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between">
        <div>
          <h3 className="">Customer Postal Code:</h3>
          <h1 className="text-2xl">THB26E</h1>
        </div>
        <div>
          <h3 className="">Customer Province</h3>
          <h1 className="text-2xl">NU</h1>
        </div>
      </div>
    </div>
  );
}
