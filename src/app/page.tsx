import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className="z-10 flex flex-col w-full max-w-5xl items-center justify-center  ">
        <img className="w-[15%] aspect-square md:w-[10%] lg:w-[5%]" src="/image/nextlogo.png"/>
        <h1 className="text-xl md:text-3xl font-semibold text-[#2b32b2]">NEXHK</h1>
      </div>
      <div className="flex w-full max-w-5xl items-center justify-center  ">
        <h1 className=" font-extrabold text-center text-[#2b32b2] text-4xl md:text-6xl lg:text-7xl">COMING SOON</h1>
      </div>
      <div className="flex flex-col w-full max-w-5xl items-center justify-center ">
        <h1 className="text-[#2b32b2] text-xs md:text-base">To Pioneer the Next Way</h1>
        <h1 className="text-[#2b32b2] text-xs md:text-base">@2024 Project NEX</h1>
      </div>
    </main>
  );
}
