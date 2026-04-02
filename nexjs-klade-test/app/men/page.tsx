import Image from "next/image";
import { useEffect, useState } from "react";

const MensPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center">
      <Image src="/palm.jpg" alt="Palm Tree" width={windowWidth} height={400}/>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-8xl">Men</h1>
        <p className="">Carribean style : American Made</p>
      </div>
    </div>
  )
}

export default MensPage;