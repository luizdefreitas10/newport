import AboutMe from "../components/AboutMe/AboutMe";
import ClassPerson from "../components/ClassPerson/ClassPerson";
import Header from "../components/Header/Header";
import HelloComponent from "../components/HelloComponent/HelloComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-evenly w-screen overflow-hidden" style={{
        margin: "0 auto",
        height: `calc(-100px + 90vh)`
      }}>
        <HelloComponent />
        <ClassPerson />
        {/* <AboutMe /> */}
      </div>
    </main>
  );
}
