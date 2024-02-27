'use client'

import ProjectCard from "@/components/ProjectCard"
import { Props } from "@/utils/exports"

const tempProjects = [
    {
        id: 0,
        name: 'Test Project 1',
        description: 'Test Project 1 Description',
        techs: ['React', 'Styled Components'],
        img: 'https://assets.bonappetit.com/photos/63409999c6b2a3464a5c9bf3/4:3/w_3040,h_2280,c_limit/1007-pb-taste-test-lede.jpg',
        link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Fstory%2Fpeanut-butter-taste-test&psig=AOvVaw2qSWMXjKneDqMAb5q__Lpc&ust=1708355168722000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKixuYmVtYQDFQAAAAAdAAAAABAE'
    },
    {
        id: 1,
        name: 'Test Project 2',
        description: 'Test Project 2 Description',
        techs: ['React', 'Styled Components'],
        img: 'https://assets.bonappetit.com/photos/63409999c6b2a3464a5c9bf3/4:3/w_3040,h_2280,c_limit/1007-pb-taste-test-lede.jpg',
        link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Fstory%2Fpeanut-butter-taste-test&psig=AOvVaw2qSWMXjKneDqMAb5q__Lpc&ust=1708355168722000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKixuYmVtYQDFQAAAAAdAAAAABAE'
    },
    {
        id: 2,
        name: 'Test Project 3',
        description: 'Test Project 3 Description',
        techs: ['React', 'Styled Components'],
        img: 'https://assets.bonappetit.com/photos/63409999c6b2a3464a5c9bf3/4:3/w_3040,h_2280,c_limit/1007-pb-taste-test-lede.jpg',
        link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Fstory%2Fpeanut-butter-taste-test&psig=AOvVaw2qSWMXjKneDqMAb5q__Lpc&ust=1708355168722000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKixuYmVtYQDFQAAAAAdAAAAABAE'
    }
]

const Project: React.FC<Props> = (): JSX.Element => {
    return (
        <section className="w-full my-14">
            <h1 className="text-color-dark dark:text-color-light font-francois-one text-7xl">Projects</h1>
            <div className="grid grid-cols-2 gap-6 mt-14">
                {tempProjects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </section>
    )
}

export default Project