/* eslint-disable react/no-unescaped-entities */

import { quoteCards } from "@/app/utils/quote-cards";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="bg-grey-200 w-full h-full mb-8">
      <h1 className="text-[31px] text-[#6c82f2] dark:text-[#f9f8f9] font-bold text-center my-12">
        Sobre
      </h1>
      <div
        className={`w-full h-auto ${theme === "light" && "bg-gradient-to-br from-blue-500 to-blue-700"} bg-[#222223] transform -skew-y-3 z-[10] p-12 flex flex-col md:flex-row items-center justify-evenly`}
      >
        <div className="mb-8 md:mb-32 w-auto h-auto flex justify-center border-[#f8f8f8] border-4 rounded-full transform skew-y-3 overflow-hidden items-center">
          <Image
            src={"/nobgprofile.png"}
            alt="profile pic"
            width={204}
            height={204}
          />
        </div>
        <div className="w-full md:w-[60%] p-8 lg:p-0 h-auto">
          <p className="text-[#f8f8f8] transform skew-y-3">
            Olá! Sou Luiz de Freitas, um desenvolvedor full stack entusiasta e
            comprometido em criar soluções inovadoras e eficientes,
            especializado em tecnologias como TypeScript, React, Next.js,
            NestJs, Prisma, Python e Django, além de dominar ferramentas como
            Redux, React Hook Forms, Yup, Joi, CORS e TailwindCss.{" "}
          </p>
          <br />
          <p className="text-[#f8f8f8] transform skew-y-3">
            Minha experiência profissional me proporcionou uma base sólida em
            desenvolvimento web, resolução de problemas e trabalho em equipe,
            permitindo-me enfrentar desafios complexos com confiança.
          </p>
          <br />
          <p className="text-[#f8f8f8] transform skew-y-3">
            Sou apaixonado por enfrentar desafios e acredito que a tecnologia é
            uma ferramenta poderosa para melhorar a vida das pessoas.
          </p>
          <br />
          <p className="text-[#f8f8f8] transform skew-y-3">
            Estou sempre disposto a aprender, compartilhar e crescer junto com a
            comunidade.
          </p>
        </div>
      </div>
      <div className="gap-4 lg:gap-0 mt-[-20px] lg:mt-[-80px] flex flex-col lg:flex-row w-[80%] mx-auto relative z-40 justify-around">
        {quoteCards.map((card) => (
          <div
            key={card.id}
            className="h-auto rounded-[10px] bg-white dark:bg-[#313031] dark:shadow-black dark:shadow-sm w-full lg:w-[30%] p-4 space-y-2 shadow-gray-400 shadow-md"
          >
            <p className="text-[16px] text-[#6c82f2] dark:text-[#f9f8f9]">
              "{card.quote}"
            </p>

            <p className="text-[12px] text-[#6c82f2] dark:text-[#f9f8f9] text-right">
              -{card.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
