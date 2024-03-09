import shadesOfGray from "@/libs/colors";
import { cn } from "@/libs/utils";
import React from "react";

type ShadeKey = keyof typeof shadesOfGray;
interface SquareProps {
  bgColor: ShadeKey;
}

const Square = ({ bgColor }: SquareProps) => {
  console.log("bg-" + bgColor);
  return (
    <div
      className={"bg-" + shadesOfGray[bgColor] +" min-w-4 min-h-4 w-4 h-4 flex justify-center items-center rounded-sm shadow-sm shadow-gray m-[1px] hover:opacity-50 hover:cursor-pointer  transition duration-2000 ease-in-out"}
    >
      <div className=" min-w-1 min-h-1 w-1 h-1 bg-white blur-sm ">
      </div>
    </div>
  );
};

export default Square;
