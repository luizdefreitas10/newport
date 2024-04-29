import Image from "next/image";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-[#f8f8f8] w-screen min-h-screen">
      {children}
      <Image
        src={"/animatedshapes.svg"}
        alt=""
        priority
        fill
        className="hidden sm:flex sm:absolute sm:inset-0"
      />
      <Image
        src={"/animatedshapesmobile.svg"}
        alt=""
        priority
        fill
        className="absolute inset-0 sm:hidden"
      />
    </div>
  );
}
