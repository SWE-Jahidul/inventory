import { Outlet } from "react-router-dom";
import Logo from "../../component/Logo";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import { useState } from "react";

export default function Root() {
  const [open, setOpen] = useState(true);
  
  return (
    <div>
      <div>
        <div className="flex bg-white items-center">
          <Logo open={open} setOpen={setOpen}></Logo>
          <Navbar></Navbar> 
        </div>
        <div className="flex bg-[#f9f8fc]">
          <Sidebar open={open} setOpen={setOpen}></Sidebar>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
