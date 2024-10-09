import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./navbar";

const Header = () => {
  return (
    <header className="bg-white bg-cover bg-center">
      <div className="py-3">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src="/logo.png" alt="SEPL Logo" width={100} height={100} />
            <Image
              src="/icons/menu.png"
              width={30}
              height={30}
              className="md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 font-bold items-center">
              <NavBar />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
