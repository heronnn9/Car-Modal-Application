"use client";
import { useState } from "react";
import Images from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content-title">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-strart text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px]">/day</span>
      </p>
      <div className=" relative w-full h-40 my-3 object-contain">
        <Images
          src={generateCarImageUrl(car)}
          fill
          alt="car model"
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className=" flex flex-col justify-center items-center gap-2">
            <Images
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className=" text-[14px]">
              {transmission == "a" ? "Automatic" : `Manuel`}
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Images src="/tire.svg" width={20} height={20} alt="tire" />
            <p className=" text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Images
              src="/gas.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className=" text-[14px]">{city_mpg} Mpg</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] bg-primary-blue rounded-full"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
