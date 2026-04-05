"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import openai from "openai";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center">
      <Image src="/palm.jpg" alt="Palm Tree" width={windowWidth} height={windowWidth * .25} className="bg-black/10"/>
      <div className="absolute top-50 z-20 flex flex-col items-center mt-10">
        <h1 className="text-8xl">Port Lovell</h1>
        <p className="">Carribean style : American Made</p>
      </div>
    </div>
  );
}
