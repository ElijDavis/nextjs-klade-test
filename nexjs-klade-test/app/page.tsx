import Image from "next/image"

export default function Home() {
  const windowWidth = window.screenX;

  return (
    <div className="flex flex-col flex-1 items-center">
      <Image src="/palm.jpg" alt="Palm Tree" width={windowWidth} height={400}/>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-8xl">Port Lovell</h1>
        <p className="">Carribean style : American Made</p>
      </div>
    </div>
  );
}
