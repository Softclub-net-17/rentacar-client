"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components

// images
import imageLogo from "@/public/Logo (9).svg";
import imageCallCenter from "@/public/Icon+bg.svg";

// components imports
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CircleUserRound, LogOut, Menu, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }

  const router  = useRouter()
  const [isLogged, setIsLogged] = useState(false);

  const [JwtToken,setJwtToken] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("accsess_token");
    if(token)
    {
      setJwtToken(true)
    }
  }, []);

  return (
    <>
      <nav className="flex  justify-between  items-center pt-[15px] py-[10px]">
        <Image src={imageLogo} alt="" />

        {!JwtToken && (
          <div className="flex gap-[10px]">
            <Link
              href={"/register"}
              className="p-[10px]  hover:border-[#5937e0] hover:text-[#5937e0] border-2 transition-all duration-300 hover:border-2 border-[#5937e0] hover:bg-white hover:border-2 rounded-[10px] px-[20px] text-white bg-[#5937e0]"
            >
              Зарегистрироваться
            </Link>
            <Link
              href={"/login"}
              className="p-[10px] border-[#5937e0] hover:bg-[#806fc7b3] border-2 transition-all duration-300 hover:text-white px-[20px] rounded-[10px]"
            >
              Войти
            </Link>
          </div>
        )}

        {JwtToken && (
          <Popover>
            <PopoverTrigger>
              <div className="flex gap-[10px] text-white rounded-[10px] bg-[#5937e0] transition-all duration-300 p-[15px] hover:bg-[#7c65da] items-center">
                <CircleUserRound />
                <h1>Yahyo78@gmail.com</h1>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[215px] flex flex-col gap-[10px]">
              <button className="flex gap-[10px] text-[#7618f8] hover:bg-[#9c5ff0] font-bold w-[100%] p-[10px] transition-all duration-300  hover:text-white rounded-[10px]">
                <CircleUserRound /> Мой профиль
              </button>
              <button
                onClick={() => {localStorage.removeItem("accsess_token");setJwtToken(false)}}
                className="flex gap-[10px] text-red-500 hover:bg-red-500 w-[100%] p-[10px] transition-all duration-300  hover:text-white rounded-[10px]"
              >
                <LogOut /> Выйти
              </button>
            </PopoverContent>
          </Popover>
        )}

        <div className="xl:hidden block">
          <Drawer direction="right">
            <DrawerTrigger>
              <Menu size={30} />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <div className="flex justify-between">
                    <Image src={imageLogo} alt="" />
                    <DrawerClose>
                      <X />
                    </DrawerClose>
                  </div>
                </DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <div>
                <ul className="flex flex-col gap-[30px] px-[20px]">
                  <li>
                    <Link
                      className={pathname == "/" ? "font-bold" : ""}
                      href={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={pathname == "/Vehicles" ? "font-bold" : ""}
                      href={"Vehicles"}
                    >
                      Vehicles
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={pathname == "/Details" ? "font-bold" : ""}
                      href={"Vehicles"}
                    >
                      Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={pathname == "/about" ? "font-bold" : ""}
                      href={"about"}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={pathname == "/contact" ? "font-bold" : ""}
                      href={"/contact"}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <DrawerFooter>
                <div className="flex gap-[10px] items-center">
                  <Image src={imageCallCenter} alt="" />
                  <div>
                    <p>Need help?</p>
                    <p className="font-black">+996 247-1680</p>
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
