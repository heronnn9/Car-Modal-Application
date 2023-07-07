"use client";
import React from "react";
import { useState } from "react";
import { SearchBrand } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (brand === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), brand.toLowerCase());
  };

  const updateSearchParams = (model: string, brand: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (brand) {
      searchParams.set("brand", brand);
    } else {
      searchParams.delete("brand");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBrand brand={brand} setBrand={setBrand} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item ml-4">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
