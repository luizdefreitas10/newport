import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import { experiencesMock } from "@/app/utils/experiences";
import Image from "next/image";

export default function Experiences() {
  return (
    <div className="flex w-full flex-col z-20 pb-16 pt-6">
      <h1 className="flex justify-center z-40 relative text-[31px] text-[#6c82f2] font-bold text-center mb-8">
        Experiência
      </h1>
      <Tabs
        aria-label="Options"
        className="flex flex-col w-[80%] mx-auto"
        size="lg"

        // variant="underlined"
      >
        {experiencesMock.map((experience) => (
          <Tab
            key={experience.id}
            title={experience.company}
            className="w-[80%] mx-auto"
          >
            <Card className="mt-3 p-8" isFooterBlurred>
              <CardHeader className="flex flex-col w-full">
                <div className="flex justify-between w-full">
                  <h1>{experience.role}</h1>
                  <h1>{experience.workingDate}</h1>
                </div>
                <h1 className="flex justify-start w-full mt-8">
                  {experience.company}
                </h1>
              </CardHeader>
              <CardBody className="text-justify">
                {experience.description}
              </CardBody>
              <CardFooter className="">
                {experience.icons.map((src, index) => (
                  <Image
                    src={src}
                    alt={src}
                    key={index}
                    width={30}
                    height={30}
                    quality={100}
                    priority
                  />
                ))}
              </CardFooter>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
