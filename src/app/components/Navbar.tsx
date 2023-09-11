import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex font-semibold justify-between items-center uppercase border-b-2 border-b-red-500 h-16 text-red-500 p-4 lg:px-16 md:px-10 ">
      {/* Left links */}
      <div className="hidden md:flex gap-4 justify-start flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className="flex-1 md:text-center">
        <Link href={"/"}>
          {" "}
          <span className="font-semibold md:font-bold text-xl ">
            MakShop
          </span>{" "}
        </Link>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu></Menu>
      </div>
      {/* Right links */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <div className="flex gap-1 bg-orange-300 rounded-md cursor-pointer px-2 items-center lg:static md:absolute top-2 right-2">
          <Image width={20} height={20} src="/phone.png" alt="" />
          <span>3922</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Navbar;
