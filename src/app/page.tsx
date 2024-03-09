"use client";
import { useEffect, useState } from "react";
import Square from "@/components/Square";
import shadesOfGray from "@/libs/colors";

type ShadeKey = keyof typeof shadesOfGray;

export default function Home() {
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Move calculations and arrays outside the render function
  const rows = Math.floor(viewportSize.height / 18);
  const cols = Math.floor(viewportSize.width / 18);

  const rowArray = Array.from({ length: rows });
  const colArray = Array.from({ length: cols });

  return (
    <div className="flex justify-center items-center h-[100vh] flex-col ">
      {rowArray.map((_, row) => (
        <div className="flex" key={row}>
          {colArray.map((_, col) => (
            <Square
              key={col}
              bgColor={(Math.floor(Math.random() * 100) + 1) as ShadeKey}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
