'use client'
import Image from 'next/image'
import drawing from '../public/drawing.svg'

const About: React.FC = (): JSX.Element => {
    return (
        <section className="w-full grid grid-cols-2 my-7 h-screen">
            <div className="flex flex-col text-justify m-auto">
                <h1 className="text-color-dark dark:text-color-light uppercase font-francois-one text-7xl">Luis Leandro</h1>
                <h2 className="text-color-dark dark:text-color-light font-fira-code text-4xl">Frontend Engineer</h2>
            </div>
            <div className='relative m-auto'>
                <Image priority src={drawing} alt='Geometric drawing' />
            </div>
        </section>
    )
}

export default About