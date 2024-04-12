'use client'

import { Image } from '@nextui-org/react'
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
    <div className="mt-[-80px] flex flex-col w-full h-auto items-center">
      <h1 className="hidden lg:flex justify-center z-40 relative text-[31px] text-[#6c82f2] font-bold text-center my-12">
        Projetos
      </h1>
      <div className="flex w-[80%] justify-between bg-[#f9f9f8] h-auto flex-wrap">
        {projectsMock.map((project: Project) => (
          <div
            key={project.id}
            className="flex justify-between bg-[#f9f9f8] rounded-xl flex-col h-auto w-[305px] flex-wrap shadow-lg"
          >
            <Image
              src={project.src}
              alt={project.name}
              isZoomed
              width={305}
              height={305}
              isLoading={loading}
              className="min-w-[305px] min-h-[305px]"
            />
            <h1 className="text-[#565756] text-[18px] py-8 px-4">
              {project.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

// bg-[#f9f9f8]
