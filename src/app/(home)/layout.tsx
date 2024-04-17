import Image from "next/image";
// import AnimatedHelloBg from "../components/AnimatedHelloBg/AnimatedHelloBg";
import "../globals.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-[#f8f8f8] w-screen min-h-screen">
      {children}
      {/* <AnimatedHelloBg /> */}
      <Image
        src={"/polygonbg.svg"}
        alt=""
        fill
        priority
        className="object-center object-cover pointer-events-none"
      />
    </div>
  );
}
