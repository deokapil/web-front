import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./navbar";
import SearchBar from "./searchbar";
import Logo from "./logo";

const Header = ({ light }) => {
  const txtColor = light ? "text-white" : "text-black/70";
  return (
    <header>
      <div className="py-3">
        <div className="container">
          <div className="flex justify-between items-center">
            <Logo light={light} />
            <Image
              src="/icons/menu.png"
              width={30}
              height={30}
              className="md:hidden"
            />
            <nav
              className={`hidden md:flex gap-3 ${txtColor} font-bold items-center`}
            >
              <NavBar />
            </nav>
            <SearchBar light />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
