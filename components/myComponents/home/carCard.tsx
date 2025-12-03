import Image from "next/image";
import React from "react";
import { IresponseData } from "@/api/carListType";

// images
import imageShadowCar from "@/public/Img (23).svg";
import imageGearShift from "@/public/gear-shift(1) 1.svg";
import imageOil from "@/public/g17.svg";

import {
  CarFront,
  Gauge,
  LineSquiggle,
  ThermometerSnowflake,
} from "lucide-react";

import Link from "next/link";
import { useGetCarAtributQuery } from "@/api/carAtribiut";

const CarCard = ({ car }) => {
  const { data: carAtrData } = useGetCarAtributQuery();

  const attributeIcons = {
    "Вид топливо": <Image src={imageOil} alt="fuel" />,
    "Коробка передач": <Image src={imageGearShift} alt="gearbox" />,
    Кузов: <CarFront />,
  };

  return (
    <>
      <Link
        href={`/infoCar/${car.id}`}
        className="xl:w-[400px] p-[20px] flex flex-col gap-[20px] bg-[#FAFAFA] py-[30px] rounded-[20px]"
      >
        {car?.images.map((imageCar, i) => {
          return (
            <div key={i}>
              <Image
                width={500}
                height={100}
                src={`http://localhost:5257/uploads/cars/${imageCar}`}
                alt=""
                className="rounded-[10px]"
              />
            </div>
          );
        })}
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-[23px]">{car.title}</h2>
              <p className="text-[#5937E0] font-bold text-[20px]">
                {car.pricePerHour}$
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2>{car.color}</h2>
              <p className="text-[#00000099]">per day</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-[20px] justify-between">
            {car.carAttributes?.map((atr) => {
              return (
                <div key={atr.id} className="flex gap-[10px]">
                  {attributeIcons[atr.attributeName] ?? null}

                  <h2 className="text-[#00000099]">{atr.valueName}</h2>
                </div>
              );
            })}
            {/* <div className="flex gap-[5px]">
              <Image src={imageOil} alt="" />
              <h2 className="text-[#00000099]">PB 95</h2>
            </div> */}
            <div className="flex gap-[10px]">
              <ThermometerSnowflake />
              <h2 className="text-[#00000099]">Air Conditioner</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CarCard;
