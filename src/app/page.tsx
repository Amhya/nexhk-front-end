import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className="z-10 flex flex-col w-full max-w-5xl items-center justify-center  ">
        <img className="w-[5%] aspect-square" src="/image/nextlogo.png"/>
        <h1 className="text-3xl font-semibold text-[#2b32b2]">NEXHK</h1>
      </div>
      <div className="flex w-full max-w-5xl items-center justify-center  ">
        <h1 className="text-7xl font-extrabold text-[#2b32b2]">COMING SOON</h1>
      </div>
      <div className="flex flex-col w-full max-w-5xl items-center justify-center ">
        <h1 className="text-[#2b32b2]">To Pioneer the Next Way</h1>
        <h1 className="text-[#2b32b2]">@2024 Project NEX</h1>
      </div>
    </main>
  );
}
