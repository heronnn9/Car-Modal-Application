"use client";
import React from "react";
import { useState } from "react";
import { SearchBrand } from "./";
const SearchBar = () => {
  const [brand, setBrand] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBrand brand={brand} setBrand={setBrand} />
      </div>
    </form>
  );
};

export default SearchBar;
