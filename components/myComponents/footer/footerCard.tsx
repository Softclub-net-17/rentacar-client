import Image, { StaticImageData } from "next/image";
import React from "react";

interface FooterCardProps {
  img: string | StaticImageData;
  text: string;
  description: string;
}

const FooterCard = (props: FooterCardProps) => {
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <Image alt="" src={props.img} />
        <div>
          <p>{props.text}</p>
          <h1 className="font-bold">{props.description}</h1>
        </div>
      </div>
    </>
  );
};

export default FooterCard;
