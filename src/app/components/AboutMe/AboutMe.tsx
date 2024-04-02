import Image from "next/image"

export default function AboutMe() {
  return (
    <div className="bg-grey-200 w-full h-full">
      <h1>Sobre</h1>
      <div>
        {/* <Image src={} alt="" /> */}
        <p>
          Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from
          India, currently working at Razorpay as a FrontEnd engineer. I've been
          building stuff on the web since when I was in 6th standard, I've made
          countless side projects and I also posses magical powers of using
          react to build delightful user interfaces. I also love doing open
          source development, I actively maintain various notable open source
          projects with over, 30k+ stars on GitHub and 50m+ hits. It gives me a
          wonderful feeling of achievement and joy which I cannot explain in
          words.
        </p>
      </div>
    </div>
  );
}
