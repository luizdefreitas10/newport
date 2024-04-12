'use client'

import AboutMe from '../components/AboutMe/AboutMe'
import ClassPerson from '../components/ClassPerson/ClassPerson'
import Header from '../components/Header/Header'
import HelloComponent from '../components/HelloComponent/HelloComponent'
import ParallaxBox from '../components/ParallaxBox/ParallaxBox'
import Projects from '../components/Projects/Projects'

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
      </div>
    </main>
  )
}
