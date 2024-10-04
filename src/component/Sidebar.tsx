import { FaCartShopping } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ open }: any) {
  const Menus = [{ title: "Orders", link: "/", icon: FaCartShopping }];


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
                  <span
                    className={`text-xl block float-left ${!open && "ml-1"}`}
                  >
                    {React.createElement(menu.icon)}
                  </span>
                  <span
                    style={{ transitionDelay: `${index + 9}0ms` }}
                    className={`flex-1 whitespace-pre font-medium text-[18px] font-Poppins ${
                      !open && "hidden"
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
