import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { TextGenerateEffect } from '../TextGenerateEffect/TextGenerateEffect'

export default function HelloComponent() {
  return (
    <div className="bg-transparent w-auto h-auto z-10">
      {/* <TextGenerateEffect words='Olá, eu sou' className="text-[#383838] text-[16px]"/> */}
      <p className="text-[#383838] text-[16px] mb-[-15px]">Olá, eu sou</p>
      {/* <h1 className="text-[#383838] text-[46px] font-black">LUIZ DE FREITAS</h1> */}
      <TextGenerateEffect
        words="LUIZ DE FREITAS"
        className="text-[#383838] text-[46px] font-black"
      />
      <h1 className="text-[#383838] text-[20px]">FULLSTACK WEB DEVELOPER</h1>
      <Button className="my-8 text-[12px] py-3 px-12 text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
        Currículo
      </Button>
      <div className="flex space-x-8">
        <Image
          src={'/githubicon.svg'}
          alt="github icon"
          width={28}
          height={28}
          quality={100}
          priority
        />
        <Image
          src={'/linkedinicon.svg'}
          alt="linkedin icon"
          width={28}
          height={28}
          quality={100}
          priority
        />
        <Image
          src={'/portfolioicon.svg'}
          alt="portfolio icon"
          width={28}
          height={28}
          quality={100}
          priority
        />
      </div>
    </div>
  )
}
