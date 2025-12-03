import { useGetCarsQuery } from "@/api/carApi";
import { IresponseData } from "@/api/carListType";
import React from "react";
import CarCard from "./carCard";

const HomeListCard = () => {
  const { data } = useGetCarsQuery(null);

  return (
    <div className="flex xl:flex-row flex-col flex-wrap justify-between gap-[20px]">
      {data?.slice(0,6).map((car: IresponseData) => {
        return (
          <>
            <CarCard car={car} />
          </>
        );
      })}
    </div>
  );
};

export default HomeListCard;
