import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaInfo } from "react-icons/fa";

export default function AsideBar() {
  const [currentPathname, setCurrentPathname] = useState("");
  const [navigationList] = useState([
    {
      icon: <FaHome />,
      name: "Home",
      path: "/",
    },
    {
      icon: <FaInfo />,
      name: "About",
      path: "/about",
    },
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPathname(location.pathname);
  }, []);

  return (
    <div
      className={`fixed h-full left-0 w-1/3 bg-gradient-to-r 
      from-zinc-300 to-slate-300`}
    >
      {/* SafeArea */}
      <div className="mt-12">
        {/* Wrapper icon */}
        {/* <div>
          <div className="font-bold text-3xl">Atlas launcher</div>
        </div> */}

        {/* List */}
        <div className="flex flex-col gap-1 ">
          {navigationList.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={`p-3 cursor-pointer flex 
                  flex-row align-middle items-center text-lg 
                  ease-in-out duration-400 text-gray-700 hover:text-gray-900 transition-colors ${
                    currentPathname == item.path
                      ? "bg-slate-600 text-white"
                      : ""
                  }`}
                  onClick={() => {
                    navigate(`/${item.path}`);
                  }}
                >
                  <span className="mx-4">{item.icon && item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
