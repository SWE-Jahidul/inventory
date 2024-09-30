import { MdSpaceDashboard } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ open }: any) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const Menus = [
    { title: "Products", link: "/", icon: FaCartShopping },
    // {
    //   title: "",
    //   icon: FaCartShopping,
    //   submenu: true,
    //   subMenuItem: [
    //     { title: "Products", link: "/products" },
    //     { title: "Products", link: "/products" },
    //     { title: "Products", link: "/products" }
    //   ]
    // },
    // {
    //   title: "Products", link: "/products", icon: FaUsers,
    //   submenu: true,
    //   subMenuItem: [
    //     { title: "Products", link: "/products" },
    //   ]
    // }
  ];

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };

  const handleMenuClick = (menu: any) => {
    if (menu.submenu) {
      setOpenSubMenu(openSubMenu === menu.title ? null : menu.title);
    }
  };

  return (
    <div
      className={`bg-p-purple  ${
        open ? "p-4" : "p-2"
      } duration-300 flex flex-col justify-between ${
        open ? "lg:w-[200px] md:w-3/12" : "w-[50px]"
      }`}
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="flex-1">
        <ul>
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <Link to={menu.link || "/"}>
                <li
                  className={`text-gray-300 text-xl flex  relative items-center group mb-5 ${
                    open && "px-3"
                  } gap-x-2 cursor-pointer py-2 rounded-md ${
                    open && "hover:bg-[#fffff70e]"
                  }`}
                >
                  <span className={`text-xl block float-left ${!open && 'ml-1'}`}>
                    {React.createElement(menu.icon)}
                  </span>
                  <span
                    style={{ transitionDelay: `${index + 9}0ms` }}
                    className={`flex-1 whitespace-pre font-medium text-[18px] ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  <span
                    className={`absolute left-40 bg-[#081A517D] text-white rounded-md drop-shadow-lg font-medium whitespace-pre w-0 overflow-hidden py-0 px-0 group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit ${
                      open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
