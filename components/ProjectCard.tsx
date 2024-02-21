'use client'

import Tag from "./Tag"

interface Project {
    id: number,
    name: string,
    description: string,
    techs: string[],
    img: string,
    link: string,
}

interface Props {
    project: Project
}

const ProjectCard: React.FC<Props> = ({project}): JSX.Element => {
    return (
        <a href={project.link} target="_blank">
            <div className="h-96 relative card-zoom overflow-hidden rounded-xl">
                <div className="h-96 z-10 absolute transition-all duration-300 top-0 left-0 bottom-0 w-full opacity-0 bg-gradient-to-t from-neutral-700 to-gray-0 rounded-xl flex flex-col justify-end p-12 pb-10 card-zoom-text">
                    <h1 className="text-color-light font-francois-one text-3xl">{project.name}</h1>
                    <p className="text-color-light font-fira-code text-lg">{project.description}</p>
                    <div className="flex pt-4 text-color-dark font-fira-code text-base">
                    {project.techs.map((tech, index) => (
                        <Tag key={index} tech={tech} />
                    ))}
                    </div>
                </div>
                <div className='absolute w-full h-full bg-center bg-cover bg-no-repeat rounded-xl transition duration-500 card-zoom-image' style={{backgroundImage: `url(${project.img})`}}>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard