'use client'

import AboutMe from '../components/AboutMe/AboutMe'
import ClassPerson from '../components/ClassPerson/ClassPerson'
import Experiences from '../components/Experiences/Experiences'
import Header from '../components/Header/Header'
import HelloComponent from '../components/HelloComponent/HelloComponent'
import ParallaxBox from '../components/ParallaxBox/ParallaxBox'
import Projects from '../components/Projects/Projects'
import { SparklesCore } from '../components/SparklesComponent/test'

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <div className="flex flex-col overflow-hidden">
        <div
          className="flex flex-col lg:flex-row min-h-screen items-center justify-evenly lg:justify-around w-screen"
          // style={{
          //   height: `calc(-100px + 100vh)`,
          // }}
        >
          <HelloComponent />
          <ClassPerson />
        </div>
        <div className="w-full bg-[#f8f8f8]">
          <AboutMe />
        </div>
        <ParallaxBox />
        <Projects />
        {/* <Experiences /> */}
        {/* <div className="h-screen w-screen relative">
          <SparklesCore />
          <div className="text-center">
            <h1 className="absolute z-[9999] text-black text-[50px] inset-0">Hello, World!</h1>
          </div>
        </div> */}
        <div className="mt-28 h-auto relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="#f8f8f8"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#6b81f1"
            />
          </div>
          {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Build great products
          </h1> */}
          <Experiences />
        </div>
      </div>
    </main>
  )
}
