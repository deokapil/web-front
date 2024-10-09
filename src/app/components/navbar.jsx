"use client";
import React from "react";
import { menuItems } from "@/data/features";

import TopNavDropDown from "./top-nav-dropdown";

const NavBar = () => {
  return (
    <>
      {menuItems.map((item, i) => (
        <TopNavDropDown key={i} item={item} />
      ))}
    </>
  );
};

export default NavBar;
