import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { TextGenerateEffect } from "../TextGenerateEffect/TextGenerateEffect";

export default function HelloComponent() {
  return (
    <div className="bg-transparent w-auto h-auto z-10">
      <p className="text-[#383838] text-[16px] mb-[-15px] text-center lg:text-left">
        Olá, eu sou
      </p>
      <TextGenerateEffect
        words="LUIZ DE FREITAS"
        className="text-[#383838] text-[32px] tinyMobile:text-[38px] sm:text-[46px] font-black text-center lg:text-left"
      />
      <h1 className="text-[#383838] text-[18px] sm:text-[20px] text-center lg:text-left">
        FULLSTACK WEB DEVELOPER
      </h1>
      <Button
        as={Link}
        href="/curriculo-dev.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="my-8 w-full lg:w-auto text-[12px] py-3 px-12 text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"
      >
        Currículo
      </Button>
      <div className="flex space-x-8 justify-center lg:justify-start">
        <Link
          href={"https://github.com/luizdefreitas10"}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/githubicon.svg"}
            alt="github icon"
            width={28}
            height={28}
            quality={100}
            priority
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/luiz-de-freitas-lima-neto/"}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/linkedinicon.svg"}
            alt="linkedin icon"
            width={28}
            height={28}
            quality={100}
            priority
          />
        </Link>
        <Link
          href={"https://github.com/luizdefreitas10"}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/portfolioicon.svg"}
            alt="portfolio icon"
            width={28}
            height={28}
            quality={100}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
