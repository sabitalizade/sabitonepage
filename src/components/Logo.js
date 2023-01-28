import React from "react";
import { Link } from "react-router-dom";
import { useIsDarkMode } from "../contexts/darkMode";

const Logo = () => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <Link
      to="/"
      className={
        "h-[8vh] lg:h-[20vh] lg:shrink-0 logo-w flex justify-center items-center p-3"
      }
    >
      <img
        src={
          isDarkMode
            ? "/logo/default-monochrome-white.svg"
            : "/logo/default-monochrome-black.svg"
        }
        className="logo-w lg:w-full"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
