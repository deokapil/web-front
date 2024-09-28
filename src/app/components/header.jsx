import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white backdrop-blur-sm">
    <div className="py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image src="/logo2.png" alt="SEPL Logo" width={120} height={40} />
          <Image src="/icons/menu.png" width={30} height={30} className="md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#customer">Customers</a>
            <a href="#contact">Conact</a>
            <a href="#features">Fatures</a>
          </nav>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;
