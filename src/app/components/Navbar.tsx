import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center uppercase border-b-2 border-b-red-500 h-16 text-red-500 p-4">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          {" "}
          <span className="font-semibold md:font-bold text-xl">
            MakShop
          </span>{" "}
        </Link>
      </div>
      {/* Mobile menu */}
      <div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default Navbar;
