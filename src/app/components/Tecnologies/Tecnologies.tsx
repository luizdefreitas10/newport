import { tecnologyData } from "@/app/utils/tecnologies";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function Tecnologies() {
  return (
    <div className="bg-green-400 h-full flex flex-col items-center justify-center">
      <h1 className="hidden lg:flex justify-center z-40 relative text-[31px] text-[#6c82f2] dark:text-[#f8f8f8] font-bold text-center my-12">
        Tecnologias
      </h1>
      <div className="flex flex-col items-center justify-center bg-red-400">
        <h1 className="text-[31px] text-[#6c82f2] dark:text-[#f8f8f8] font-bold text-center my-12 lg:hidden">
          Tecnologias
        </h1>
        <div className="bg-[#f8f8f8] w-[65%] flex gap-10 flex-wrap items-center justify-center">
          {tecnologyData.map((tecnology) => (
            <Link key={tecnology.id} href={tecnology.href} isExternal>
              <Image
                src={tecnology.src}
                alt={tecnology.alt}
                width={100}
                height={100}
                quality={100}
                priority
                className="static z-20"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
