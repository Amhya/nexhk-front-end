import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex flex-col w-full max-w-5xl items-center justify-center  ">
        <h1 className="text-3xl font-semibold text-white">NEXHK</h1>
        <p className="text-white text-lg">Tech</p>
      </div>

      <div className="flex w-full max-w-5xl items-center justify-center  ">
        <h1 className="text-7xl font-extrabold text-white">COMING SOON</h1>
      </div>

      <div className="flex w-full max-w-5xl items-center justify-center ">
        <h1 className="text-white">@2024 NEXTECH</h1>
      </div>
    </main>
  );
}
