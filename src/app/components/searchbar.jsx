"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function SearchBar({ light }) {
  const [query, setQuery] = useState("");

  const variant = light ? "secondary" : "outline";

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Searching for:", query);
  };

  return (
    <Button variant={variant} onClick={handleSearch}>
      <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
      Search
    </Button>
  );
}
