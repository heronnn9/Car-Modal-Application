"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
const CustomFilter = ({ options, title }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-bilter__btn">
            <span className="block truncate">
              {selected.value}
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                alt="chevron up down"
                className="ml-4 object-contain"
              />
            </span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
