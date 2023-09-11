"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Homepage", path: "/" },
  { id: 2, title: "Menu", path: "/menu" },
  { id: 3, title: "Working Hours", path: "/" },
  { id: 4, title: "Contact", path: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        ></Image>
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute left-0 right-0 top-[112px] h-[calc(100vh-112px)] flex flex-col items-center gap-8 justify-center z-10">
        {links.map((link) => (
          <Link href={link.path} key={link.id}>
            {link.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
