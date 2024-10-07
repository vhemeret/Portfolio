"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Props {
    title: string;
    description: string;
    mainImage: StaticImageData;
}

export function ThreeDCardDemo({title, description, mainImage}: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gradient-to-t from-black-200  border-black/[0.3] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={mainImage}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Voir le projet sur GitHub →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl  bg-white text-black  text-xs font-bold"
          >
            En savoir plus
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}