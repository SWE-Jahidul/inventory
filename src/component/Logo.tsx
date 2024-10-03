import { IoMenu } from "react-icons/io5";

export default function Logo({ open, setOpen }:any) {
  return (
    <div className={`lg:w-1/6 md:w-3/12 py-1 px-1`}>
      <div className="flex p-2 items-center">
        <IoMenu
          className={`text-4xl cursor-pointer duration-300 text-black ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <span className="font-bold text-2xl   text-black ml-2">Inventory</span>
      </div>
    </div>
  );
}
