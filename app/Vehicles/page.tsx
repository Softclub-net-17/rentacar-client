"use client";
import { useGetCarsQuery } from "@/api/carApi";
import { useGetByFiltersMutation } from "@/api/filterApi";
import { useEffect, useState } from "react";
import CarCard from "@/components/myComponents/home/carCard";
import { useGetMakesQuery } from "@/api/makeApi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useGetModelsQuery } from "@/api/modelApi";
import { useGetCarAtributQuery } from "@/api/carAtribiut";

const Vehicles = () => {
  const [makeId, setMakeId] = useState();
  const [attrValueIds, setAttrValueIds] = useState<number[]>([]);

  const { data: makeData } = useGetMakesQuery();
  const { data: modelData } = useGetModelsQuery();
  const { data: carAtribiutWithVluesData } = useGetCarAtributQuery();
  const [getByFilter, { data: filterData }] = useGetByFiltersMutation();

  async function subMitFilterUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    attrValueIds.forEach((value, index) =>
      formData.append(`AttributeValueIds[${index}]`, value)
    );

    await getByFilter(formData);
  }

  function pushAtributValueArray(valueId: number) {
    setAttrValueIds((prev) => {
      if (prev.includes(valueId)) return prev;

      const allValues = carAtribiutWithVluesData?.flatMap((a) => a.values);
      const newValueObj = allValues?.find((v) => v.id === valueId);
      if (!newValueObj) return prev;

      const filtered = prev.filter((id) => {
        const found = allValues?.find((v) => v.id === id);
        return found?.carAttributeId !== newValueObj.carAttributeId;
      });

      return [...filtered, valueId];
    });
  }

  useEffect(() => {
    getByFilter("");
  }, []);

  const selectStyle =
    "w-full rounded-[14px] p-[25px] bg-gray-50 border border-gray-200 text-[16px] h-[56px]";

  const inputStyle =
    "w-full border border-gray-200 p-[15px] rounded-[14px] bg-gray-50 text-[16px] h-[56px]";

  return (
    <section className="py-[30px] flex flex-col gap-[40px]">
      {/* TOP FILTER BAR */}
      <form
        onSubmit={subMitFilterUser}
        className="
          w-full bg-white rounded-[22px] shadow-lg p-[20px]
          border border-gray-100 sticky top-[0] z-30
          flex flex-wrap gap-[20px]
        "
      >
        {/* Make */}
        <div className="w-full sm:w-[220px]">
          <p className="font-semibold mb-[6px] text-gray-700">Make</p>
          <Select onValueChange={(e) => setMakeId(e)} name="makeId">
            <SelectTrigger className={selectStyle}>
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              {makeData?.map((make) => {
                if (make.isActive == true) {
                  return (
                    <SelectItem
                      className="p-[13px]"
                      key={make.id}
                      value={String(make.id)}
                    >
                      {make.name}
                    </SelectItem>
                  );
                }
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Model */}
        <div className="w-full sm:w-[220px]">
          <p className="font-semibold mb-[6px] text-gray-700">Model</p>
          <Select name="ModelId">
            <SelectTrigger
              className={`${selectStyle} ${
                !makeId ? "opacity-50 pointer-events-none" : ""
              }`}
              disabled={!makeId}
            >
              <SelectValue placeholder="Select model" />
            </SelectTrigger>

            <SelectContent>
              {modelData
                ?.filter((m) => m.makeId == makeId)
                ?.map((model) => (
                  <SelectItem key={model.id} value={String(model.id)}>
                    {model.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dynamic attributes */}
        {carAtribiutWithVluesData?.map((attr) => (
          <div className="w-full sm:w-[200px]" key={attr.id}>
            <p className="font-semibold mb-[6px] text-gray-700">{attr.name}</p>
            <Select
              onValueChange={(value) => pushAtributValueArray(Number(value))}
            >
              <SelectTrigger className={selectStyle}>
                <SelectValue placeholder={attr.name} />
              </SelectTrigger>
              <SelectContent>
                {attr.values.map((v) => (
                  <SelectItem key={v.id} value={String(v.id)}>
                    {v.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        {/* Year */}
        <div className="flex gap-[10px] w-full sm:w-[260px]">
          <input
            name="yearFrom"
            type="number"
            placeholder="Year from"
            className={inputStyle}
            onWheel={(e) => e.target.blur()}
          />
          <input
            name="yearTo"
            type="number"
            placeholder="To"
            className={inputStyle}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Price */}
        <div className="flex gap-[10px] w-full sm:w-[260px]">
          <input
            name="priceFrom"
            type="number"
            placeholder="$ From"
            className={inputStyle}
            onWheel={(e) => e.target.blur()}
          />
          <input
            name="priceTo"
            type="number"
            placeholder="$ To"
            className={inputStyle}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full sm:w-[160px] bg-[#5937e0] text-white py-[15px] rounded-[14px]
            font-semibold tracking-wide hover:bg-gray-800 transition
          "
        >
          Filter
        </button>
      </form>

      {/* CAR LIST */}
      <div className="flex-1">
        <h1 className="xl:text-[50px] text-[40px] font-bold text-center text-gray-900">
          Vehicles
        </h1>

        <div className="flex flex-wrap py-[40px] justify-between gap-[40px]">
          {filterData?.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
