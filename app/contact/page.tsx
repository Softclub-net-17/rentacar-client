import Image from "next/image";
import React from "react";

// images
import imageBlur from "@/public/Img (24).svg";
import imageBlurCard from "@/public/Img (25).svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputData from "@/components/myComponents/inputData";
import FooterCard from "@/components/myComponents/footer/footerCard";
import imageCardLocation from "@/public/Icon+bg (2).svg";
import ContactCard from "@/components/myComponents/contact/contactCard";


const Contact = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center py-[50px] gap-[10px]">
          <h1 className="xl:text-[50px] font-black text-[40px]">Contact Us</h1>
          <p className="text-gray-400">
            Home/ <span className="text-black">Contact Us</span>
          </p>
        </div>
      </section>

      <section className="flex w-[100%] xl:flex-row-reverse xl:px-0 px-[20px] items-center flex-col">
        <aside className=" xl:w-[2500px]">
          <Image className="w-[100%]" alt="" src={imageBlur} />
        </aside>
        <aside className=" text-white xl:py-0 py-[20px] w-[100%]">
          <div className="bg-[#5937E0] w-[100%]  xl:w-[400px] h-full p-[20px] py-[53px] rounded-[20px]">
            <div className="flex justify-center py-[20px]">
              <h1 className="text-[25px] text-white font-bold text-black">
                Book your car
              </h1>
            </div>
            <div className="flex  flex-col gap-[20px] items-center">
              {/* car type */}
              <Select>
                <SelectTrigger className="w-full text-white shadow border-none bg-[#694BE3] [&>span]:text-white">
                  <SelectValue placeholder="Car type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full border-none shadow bg-[#694BE3] text-white [&>span]:text-white">
                  <SelectValue placeholder="Car type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              {/* place of renter  */}
              <Select>
                <SelectTrigger className="w-[100%] border-none shadow bg-[#694BE3] [&>span]:text-white">
                  <SelectValue placeholder="Place of rental" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              {/* place of renter  */}
              <div className="flex items-center border-none bg-[#694BE3]  rounded-[10px] shadow w-full pr-[10px]">
                <InputData name="data1" />
              </div>

              {/* place of renter  */}
              <div className="flex items-center border border-none bg-[#694BE3] rounded-[10px] shadow w-full pr-[10px]">
                <InputData name="data2" />
              </div>
              <button className="w-[100%] p-[10px] bg-[#FF9E0C] rounded-[10px]">
                Book now
              </button>
            </div>
          </div>
        </aside>
      </section>

      <section className="pt-[140px]">
        <div className="flex  xl:flex-row flex-col items-center gap-[20px] justify-between">
          <FooterCard
            img={imageCardLocation}
            text={"Address"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
          <FooterCard
            img={imageCardLocation}
            text={"Address"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
          <FooterCard
            img={imageCardLocation}
            text={"Address"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
          <FooterCard
            img={imageCardLocation}
            text={"Address"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
        </div>
      </section>

      <section className="py-[50px]">
        <div className="flex flex-col items-center py-[40px]">
          <h1 className="text-[40px] text-center font-bold xl:text-[50px]">Latest blog posts & news</h1>
        </div>
        <div className="flex xl:flex-row xl:px-0 px-[20px] gap-[20px] flex-col items-center justify-between">
          <ContactCard img={imageBlurCard} text={"How to choose the right car"} date={"News / 12April 2024"} />
          <ContactCard img={imageBlurCard} text={"How to choose the right car"} date={"News / 12April 2024"} />
          <ContactCard img={imageBlurCard} text={"How to choose the right car"} date={"News / 12April 2024"} />
        </div>
      </section>
    </>
  );
};

export default Contact;
