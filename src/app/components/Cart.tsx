import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div>
      <Link href="/cart">
        <div className="flex items-center gap-2 justify-center">
          <Image width={20} height={20} src="/cart.png" alt=""></Image>
          <span>Cart (2)</span>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
