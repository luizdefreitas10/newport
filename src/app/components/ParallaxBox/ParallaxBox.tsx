import React, { useEffect, useRef } from "react";
import { Karla } from "next/font/google";
import Image from "next/image";
import { tecnologyData } from "../../utils/tecnologies";
import { Link } from "@nextui-org/react";

const karla = Karla({ subsets: ["latin"] });

const ParallaxBox = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="m-8 relative h-full"
      style={{
        // height: `calc(-350px + 100vh)`,
      }}
    >
      <h1 className="hidden lg:flex justify-center z-40 relative text-[31px] text-[#6c82f2] dark:text-[#f8f8f8] font-bold text-center my-12">
        Tecnologias
      </h1>
      <div className="h-[81rem] tinyMobile:h-[50rem] absolute inset-0 z-10 flex flex-col items-center justify-around">
        <h1 className="text-[31px] text-[#6c82f2] dark:text-[#f8f8f8] font-bold text-center my-12 lg:hidden">
          Tecnologias
        </h1>
        <div className="bg-[#f8f8f8] dark:bg-[#191818] w-[65%] mt-0 sm:mb-24 flex gap-10 flex-wrap items-center justify-center">
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
      <div
        ref={parallaxRef}
        className="hidden 2xl:flex 2xl:absolute inset-0 bg-cover bg-center bg-fixed h-full"
        style={{
          transform: "translateY(0)",
          // height: `calc(-100px + 100vh)`,
        }}
      >
        <div
          className={`${karla.className} mt-[-400px] w-full h-full text-center text-black relative z-0`}
        >
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-[56px] left-[126px] text-3xl mt-8">
            Typescript
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[290px] right-[200px] text-xl mt-8">
            Javascript
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[150px] right-[600px] text-lg mt-8">
            React
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-[220px] right-[800px] text-lg mt-8">
            Vercel
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-[70px] right-[400px] text-lg mt-8">
            Domain Driven Development
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-[130px] left-[600px] text-lg mt-8">
            mongoDB
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[260px] right-1/2 text-lg mt-8">
            Nextjs
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-[180px] right-[150px] text-xl mt-8">
            Nestjs
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[50px] left-1/4 text-2xl mt-8">
            Docker
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-[160px] right-1/4 text-lg mt-8">
            Clean Architecture
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[300px] left-[20px] text-2xl mt-8">
            nodeJs
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute top-1/4 left-1/4 text-xl mt-8">
            nextUi
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[200px] left-[300px] text-3xl mt-8">
            TailwindCss
          </p>
          <p className="text-[#c6d1fe] dark:text-[#313031] absolute bottom-[50px] right-[300px] text-3xl mt-8">
            PostgreeSQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBox;
