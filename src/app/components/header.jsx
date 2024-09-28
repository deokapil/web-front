import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@assets/menu-60.svg";

const Header = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image src="/logo2.png" alt="SEPL Logo" width={120} height={40} />
          <MenuIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
