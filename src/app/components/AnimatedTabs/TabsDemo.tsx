"use client";

import Image from "next/image";
import { Tabs } from "./AnimatedTabs";
import { experiencesMock } from "@/app/utils/experiences";

export function TabsDemo() {
  const tabs = experiencesMock.map((exp) => {
    return {
      title: exp.company,
      value: exp.company,
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-8 text-xl text-black bg-[#fff] shadow-lg">
          <div className="flex justify-between w-full">
            <h1 className="text-[18px]">{exp.role}</h1>
            <h1 className="text-[16px]">{exp.workingDate}</h1>
          </div>
          <h1 className="text-[18px] flex justify-start w-full mt-8">
            {exp.company}
          </h1>
          <br />
          <h1 className="text-[16px] sm:text-[18px]">{exp.description}</h1>
          <br />
          <div className="flex">
            {exp.icons.map((src) => (
              <Image
                key={exp.id}
                src={src}
                alt={src}
                width={30}
                height={30}
                quality={100}
                priority
              />
            ))}
          </div>
        </div>
      ),
    };
  });

  return (
    <div
      className="h-[51rem] md:h-[45rem] xl:h-[35rem] [perspective:1000px] relative flex flex-col mx-auto w-[80%] items-center
     justify-start mb-40 mt-10"
    >
      <h1 className="flex mx-auto z-40 relative text-[31px] text-[#6c82f2] font-bold text-center mb-8">
        Experiência
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

//   const tabs = [
//     {
//       title: "Grupo Sina",
//       value: "Grupo Sina",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <div className="flex justify-between w-full">
//             <h1>Desenvolvedor Full Stack</h1>
//             <h1>Setembro de 2023 - Até o momento</h1>
//           </div>
//           <h1 className="flex justify-start w-full mt-8">Grupo Sina</h1>
//           <h1 className="text-[22px]">
//             Empresas do mesmo grupo. Responsabilidades como criação de dashboard
//             para controle de usuários e fluxos, sites jogos online como cassino,
//             poker, crash, plataformas de apostas esportivas e e-commerce.
//             Experiência com desenvolvimento full stack, frontend e backend,
//             utilizando stacks como JavaScript, TypeScript, React, NextJs,
//             NodeJs, Styled Components, Python, Django Rest Framework, e
//             desenvolvimento de APIs RESTFull.
//           </h1>
//         </div>
//       ),
//     },
//     {
//       title: "Services",
//       value: "services",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Services tab</p>
//         </div>
//       ),
//     },
//     {
//       title: "Playground",
//       value: "playground",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Playground tab</p>
//         </div>
//       ),
//     },
//     {
//       title: "Content",
//       value: "content",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Content tab</p>
//         </div>
//       ),
//     },
//     {
//       title: "Random",
//       value: "random",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Random tab</p>
//         </div>
//       ),
//     },
//   ];
