import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className={
        "h-[8vh] lg:h-[20vh] lg:shrink-0 logo-w flex justify-center items-center p-3"
      }
    >
      <img
        src="/logo/default-monochrome-white.svg"
        className="logo-w lg:w-full"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
