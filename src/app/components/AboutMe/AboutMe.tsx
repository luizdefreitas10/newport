/* eslint-disable react/no-unescaped-entities */

import { quoteCards } from '@/app/utils/quote-cards'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="bg-grey-200 w-full h-full mb-8">
      <h1 className="text-[31px] text-[#6c82f2] font-bold text-center my-12">
        Sobre
      </h1>
      <div className="w-full h-auto bg-gradient-to-br from-blue-500 to-blue-700 transform -skew-y-3 z-[10] p-12 flex items-center justify-evenly">
        <div className="mb-32 w-auto h-auto flex justify-center border-[#f8f8f8] border-4 rounded-full transform skew-y-3 overflow-hidden items-center">
          <Image
            src={'/nobgprofile.webp'}
            alt="profile pic"
            width={204}
            height={204}
            // className='flex-shrink'
          />
        </div>
        <div className="w-[60%] p-8 lg:p-0 h-auto">
          <p className="text-[#f8f8f8] transform skew-y-3">
            Hello! I'm Luiz de Freitas, an enthusiastic full stack web developer
            committed to creating innovative and efficient solutions. I am
            currently honing my skills at Trybe (www.betrybe.com), where I am
            specializing in technologies such as TypeScript, React, Next.js,
            Express, Sequelize, Python and Django, as well as mastering tools
            such as Redux, React-toastify, React Hook Forms, Yup, Joi, CORS and
            Styled-components.
          </p>
          <br />
          <p className="text-[#f8f8f8] transform skew-y-3">
            I am passionate about facing challenges and I believe that
            technology is a powerful tool to improve people's lives. I am
            constantly looking for opportunities to apply and expand my
            knowledge on meaningful projects and collaborations. If you are
            interested in discussing opportunities, collaborations or just want
            to chat about technology and current web development trends, feel
            free to contact me! I am always willing to learn, share and grow
            together with the community.
          </p>
        </div>
      </div>
      <div className="gap-4 lg:gap-0 mt-[-20px] lg:mt-[-80px] flex flex-col lg:flex-row w-[80%] mx-auto relative z-40 justify-around">
        {quoteCards.map((card) => (
          <div
            key={card.id}
            className="h-auto rounded-[10px] bg-white w-full lg:w-[30%] p-4 space-y-2 shadow-gray-400 shadow-md"
          >
            <p className="text-[16px] text-[#6c82f2]">"{card.quote}"</p>

            <p className="text-[12px] text-[#6c82f2] text-right">
              -{card.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* eslint-disable react/no-unescaped-entities */
