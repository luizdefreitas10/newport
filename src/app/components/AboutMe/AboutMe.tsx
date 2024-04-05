import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="bg-grey-200 w-full h-full p-8">
      <h1 className="text-[31px] text-[#6c82f2] font-bold text-center my-12">
        Sobre
      </h1>
      <div className="absolute left-0 w-full bg-gradient-to-br from-blue-500 to-blue-700 transform -skew-y-3 z-[10] pointer-events-none p-12 flex items-center justify-evenly">
        <div className="w-auto h-auto flex justify-center border-[#f8f8f8] border-4 rounded-full transform skew-y-3 overflow-hidden items-center">
          <Image
            src={'/nobgprofile.webp'}
            alt="profile pic"
            width={204}
            height={280}
          />
        </div>
        <div className="w-[60%]">
          <p className="text-[#f8f8f8] transform skew-y-3">
            Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer
            from India, currently working at Razorpay as a FrontEnd engineer.
            I've been building stuff on the web since when I was in 6th
            standard, I've made countless side projects and I also posses
            magical powers of using react to build delightful user interfaces.
          </p>
          <br />
          <p className="text-[#f8f8f8] transform skew-y-3">
            I also love doing open source development, I actively maintain
            various notable open source projects with over, 30k+ stars on GitHub
            and 50m+ hits. It gives me a wonderful feeling of achievement and
            joy which I cannot explain in words.
          </p>
        </div>
      </div>
    </div>
  )
}
