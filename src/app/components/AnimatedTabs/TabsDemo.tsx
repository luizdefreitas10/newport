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
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-8 text-xl text-black dark:text-[#f8f8f8] bg-[#fff] dark:bg-[#222223] shadow-lg">
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
      className="h-[59rem] sm:h-[51rem] md:h-[45rem] xl:h-[35rem] [perspective:1000px] relative flex flex-col mx-auto w-[80%] items-center
     justify-start mb-40 mt-10"
    >
      <h1 className="flex mx-auto z-40 relative text-[31px] text-[#6c82f2] dark:text-[#f8f8f8] font-bold text-center mb-8">
        Experiência
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
