import AboutMe from '../components/AboutMe/AboutMe'
import ClassPerson from '../components/ClassPerson/ClassPerson'
import Header from '../components/Header/Header'
import HelloComponent from '../components/HelloComponent/HelloComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Header />
      <div className="flex flex-col ">
        <div
          className="flex h-full items-center justify-around w-screen"
          style={{
            height: `calc(-100px + 100vh)`,
          }}
        >
          <HelloComponent />
          <ClassPerson />
        </div>
        <div className="w-full h-auto bg-[#f8f8f8]">
          <AboutMe />
        </div>
      </div>
    </main>
  )
}
