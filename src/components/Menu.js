import React from "react";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useIsDarkMode } from "../contexts/darkMode";
import useDarkMode from "../hooks/useDarkMode";

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
  const [colorTheme, setTheme] = useDarkMode();
  const { isDarkMode, setDarkMode } = useIsDarkMode();
  console.log(isDarkMode);
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    // console.log(checked)
    setDarkMode(checked);
  };
  return (
    <div className="w-full bg-primarylight dark:bg-primarydark h-[6vh] lg:h-[20vh] shrink-0">
      <ul className="text-black dark:text-white flex gap-3 justify-center items-center h-full">
        {menu.map((item) => (
          <li
            className="hover:text-gray-800 dark:hover:text-gray-300"
            key={item.link}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-black dark:text-white"
              }
              to={item.link}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="absolute top-2 right-2">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}
        />
      </div>
    </div>
  );
};

export default Menu;
