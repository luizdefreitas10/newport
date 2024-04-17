'use client'

import { Image, Link } from '@nextui-org/react'
import { projectsMock } from '../../utils/projects'
import { useEffect, useState } from 'react'

interface Project {
  id: number
  name: string
  src: string
  resume: string
  stacks: string[]
  vercel: string
}

export default function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className="lg:mt-[-60px] flex flex-col w-full h-auto items-center">
      <h1 className="flex justify-center z-40 relative text-[31px] text-[#6c82f2] font-bold text-center my-12">
        Projetos
      </h1>
      <div className="flex w-[80%] justify-evenly gap-16 bg-[#f9f9f8] h-auto flex-wrap">
        {projectsMock.map((project: Project) => (
          <div
            key={project.id}
            className="flex justify-between bg-[#f9f9f8] rounded-xl flex-col h-auto w-[300px] flex-wrap shadow-lg"
          >
            <Link href={project.vercel} isExternal>
              <Image
                src={project.src}
                alt={project.name}
                isZoomed
                width={300}
                height={300}
                isLoading={loading}
                className="min-w-[300px] min-h-[300px]"
              />
            </Link>
            <div className="flex justify-between items-center py-8 px-4">
              <h1 className="text-[#565756] text-[18px]">{project.name}</h1>
              <div className="flex gap-2">
                {/* <Image
                  src="/githubicon.svg"
                  alt="github"
                  width={30}
                  height={30}
                  className="hover:scale-125"
                /> */}
                <Link href={project.vercel} isExternal>
                  <Image
                    src="/browsericon.svg"
                    alt="browser"
                    width={30}
                    height={30}
                    className="hover:scale-125 min-h-[30px] min-w-[30px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// bg-[#f9f9f8]
