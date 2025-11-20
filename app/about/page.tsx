"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../globals.css";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import imageBlur from "@/public/Img (20).svg";
import imageTrue from "@/public/Icon+ bg.svg";
import imagePhone from "@/public/Img (21).svg";
import imageAppStore from "@/public/App Store (1).svg";
import AboutCard from "@/components/myComponents/about/aboutCard";
import imageUser from "@/public/Img (22).svg";
import MyAccordion from "@/components/myComponents/about/myAccordion";
import imageCarShadowBlur from "@/public/Frame 130.svg";

const About = () => {
  return (
    <>
      <section className="xl:px-0 px-[20px]">
        <div className="flex flex-col items-center py-[50px] gap-[10px]">
          <h1 className="xl:text-[50px] font-black text-[40px]">About Us</h1>
          <p className="text-gray-400">
            Home/ <span className="text-black">About Us</span>
          </p>
        </div>

        <div className="flex xl:flex-row  flex-col justify-between gap-[30px]">
          <div className="xl:w-[30%]">
            <h1 className="xl:text-[50px] font-bold text-[40px]">
              Where every drive feels extraordinary
            </h1>
          </div>
          <div className="xl:w-[30%] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Variety Brands
              </h1>
              <p>
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                sit quam natoque ornare cursus viverra odio
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Maximum Freedom
              </h1>
              <p>
                Diam quam gravida ultricies velit duis consequat integer. Est
                aliquam posuere vel rhoncus massa volutpat in
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Awesome Suport
              </h1>
              <p>
                Eget adipiscing augue sit quam natoque ornare cursus viverra
                odio. Diam quam gravida ultricies velit
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                flexibility on the go
              </h1>
              <p>
                Vitae pretium nulla sed quam id nisl semper. Vel non in proin
                egestas dis.faucibus rhoncus. Iaculis dignissim aenean
                pellentesque nisl
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px] xl:px-0 px-[20px]">
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          navigation={true} 
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <iframe
              src="https://www.youtube.com/embed/K9W0MtwrK98?si=NiDqKc0KN4Xdm3fV"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </SwiperSlide>

          <SwiperSlide>
            <iframe
              src="https://www.youtube.com/embed/K9W0MtwrK98?si=NiDqKc0KN4Xdm3fV"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        </Swiper>

        <div className="flex xl:flex-row flex-col py-[30px] justify-between gap-[50px] items-center">
          <div className="text-center">
            <h1 className="text-[#5937E0] xl:text-[70px] font-bold text-[55px]">
              20k+
            </h1>
            <p className="font-bold xl:text-[25px]">Happy customers</p>
          </div>
          <div className="text-center">
            <h1 className="text-[#5937E0] xl:text-[70px] font-bold text-[55px]">
              540+
            </h1>
            <p className="font-bold xl:text-[25px]">Count of cars</p>
          </div>
          <div className="text-center">
            <h1 className="text-[#5937E0] xl:text-[70px] font-bold text-[55px]">
              25+
            </h1>
            <p className="font-bold xl:text-[25px]">Years of experince</p>
          </div>
        </div>
      </section>

      <section className="flex xl:flex-row flex-col items-center gap-[50px] xl:px-0 px-[5%] py-[30px] justify-between">
        <aside className="xl:w-[50%] flex-col flex gap-[30px]">
          <h1 className="text-[40px] xl:text-[50px] font-bold">
            Unlock unforgettable memories on the road
          </h1>
          <p>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <div className="flex xl:flex-row flex-col items-center gap-[40px] justify-between">
            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>
                Velit semper morbi. Purus non eu cursus porttitor tristique et
                gravida
              </p>
            </div>

            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>
                Purus non eu cursus porttitor tristique et gravida. Quis nunc
                interdum{" "}
              </p>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col items-center gap-[40px] justify-between">
            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor{" "}
              </p>
            </div>

            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>Quis nunc interdum gravida ullamcorper</p>
            </div>
          </div>
        </aside>
        <aside>
          <Image src={imageBlur} alt="" />
        </aside>
      </section>

      <section className="relative h-[150vh] xl:h-[85vh] flex items-end xl:px-0 px-[20px]">
        <div className="bg-[#5937E0] xl:px-0 px-[20px] bgImageDrift flex  rounded-[30px] xl:h-[60vh] h-[110vh] items-center xl:flex-row flex-col-reverse">
          <aside className="xl:w-[47%] flex justify-center">
            <Image
              className="absolute xl:top-[0px] top-1"
              src={imagePhone}
              alt=""
            />
          </aside>

          <aside className="xl:w-[47%] py-[20px]  flex flex-col gap-[20px] text-white">
            <p>Download our app</p>
            <h1 className="text-[40px] font-bold xl:text-[50px]">
              Download our app
            </h1>
            <p>
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
              semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
              vulputate. Nulla nam eget urna fusce vulputate at risus
            </p>
            <div className="flex xl:flex-row gap-[20px] flex-col items-center xl:gap-[40px]">
              <Image
                className="w-[80%] xl:w-[30%]"
                src={imageAppStore}
                alt=""
              />
              <Image
                className="w-[80%] xl:w-[30%]"
                src={imageAppStore}
                alt=""
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="py-[50px] xl:px-0 px-[20px]">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[50px] text-[40px] text-center font-bold">
            Reviews from our customers
          </h1>
        </div>
        <div className="flex xl:flex-row flex-col gap-[50px] items-center py-[40px] justify-between">
          <AboutCard
            text={
              " Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque "
            }
            ImageUser={imageUser}
            job={"Kuphal LLC"}
            name={"Emanuel Boyle"}
          />
          <AboutCard
            text={
              " Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque "
            }
            ImageUser={imageUser}
            job={"Kuphal LLC"}
            name={"Emanuel Boyle"}
          />
          <AboutCard
            text={
              " Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque "
            }
            ImageUser={imageUser}
            job={"Kuphal LLC"}
            name={"Emanuel Boyle"}
          />
        </div>
      </section>

      <section className="flex flex-col xl:px-0 px-[20px] gap-[20px]">
        <MyAccordion
          Content={
            "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
          }
          trigger={"How does it works?"}
        />
        <MyAccordion
          Content={
            "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
          }
          trigger={"Can I rent a car without a credit card?"}
        />
        <MyAccordion
          Content={
            "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
          }
          trigger={"What are the requirements for renting a car?"}
        />
        <MyAccordion
          Content={
            "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
          }
          trigger={
            "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?"
          }
        />
        <MyAccordion
          Content={
            "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
          }
          trigger={
            "Does Car Rental offer coverage products for purchase with my rental?"
          }
        />
      </section>

      <section className="xl:px-0 px-[10px] py-[60px]">
        <div className="bg-[#5937E0] rounded-[30px] xl:gap-[40px] px-[30px] flex xl:flex-row flex-col justify-between items-center xl:px-[5%] py-[30px]">
          <aside className="bgImageDrift xl:w-[55%]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="xl:text-[50px] font-bold text-white text-[40px]">
                Looking for a car?
              </h1>
              <h1 className="xl:text-[40px] font-bold text-white text-[40px]">
                +537 547-6401
              </h1>
              <p className="text-white">
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
                bibendum ullamcorper in. Diam tincidunt tincidunt erat
              </p>

              <button className="p-[10px] w-[150px] px-[16px] rounded-[10px] bg-[#FF9E0C] text-white">
                Buy Now
              </button> 
            </div>
          </aside>

          <aside>
            <Image src={imageCarShadowBlur} alt="" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;
