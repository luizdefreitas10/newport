"use client";

import { useTheme } from "next-themes";
import AboutMe from "../components/AboutMe/AboutMe";
import { TabsDemo } from "../components/AnimatedTabs/TabsDemo";
import ClassPerson from "../components/ClassPerson/ClassPerson";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HelloComponent from "../components/HelloComponent/HelloComponent";
import ParallaxBox from "../components/ParallaxBox/ParallaxBox";
import Projects from "../components/Projects/Projects";
import { SparklesCore } from "../components/SparklesComponent/test";
import Tecnologies from "../components/Tecnologies/Tecnologies";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main id="início" className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-screen items-center justify-evenly lg:justify-around w-screen">
          <HelloComponent />
          <ClassPerson />
        </div>
        <div id="sobre" className="w-full bg-[#f8f8f8] dark:bg-[#181819]">
          <AboutMe />
        </div>
        <div
          id="tecnologias"
          className="sm:mb-4 sm:overflow-y-hidden w-full h-[750px]"
        >
          <ParallaxBox />
        </div>
        <div id="projetos">
          <Projects />
        </div>
        <div
          id="experiência"
          className="mt-28 h-auto relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md"
        >
          <div className="flex w-full pb-40 tinyMobile:mb-0 absolute inset-0 overflow-x-hidden">
            <SparklesCore
              id="tsparticlesfullpage"
              background={theme === "light" ? "#f8f8f8" : "#181819"}
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#6b81f1"
            />
          </div>
          <TabsDemo />
        </div>
      </div>
      <div id="contato" className="w-screen flex justify-center items-center">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
