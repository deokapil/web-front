import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Image src="/logo2.png" alt="SEPL Logo" width={150} height={50} />
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#work">Area of Work</Link>
            </li>
            <li>
              <Link href="#expertise">Expertise</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
