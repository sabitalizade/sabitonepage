import React from "react";
// import '../css/Menu.css';
import { NavLink } from "react-router-dom";
const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Cv",
    link: "/cv",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Menu = () => {
  return (
    <div className="w-full bg-primarydark h-[6vh] lg:h-[20vh] shrink-0">
      <ul className="text-white flex gap-3 justify-center items-center h-full">
        {menu.map((item) => (
          <li className="hover:text-gray-300" key={item.link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-white"
              }
              to={item.link}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
