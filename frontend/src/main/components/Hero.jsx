import React from 'react'
import { SiYoutubegaming } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className='min-h-[calc(100vh-78px)] w-full bg-primary2 text-primary flex md:flex-row flex-col items-center justify-center'>
                <div className='md:min-h-[calc(100vh-78px)] min-h-max lg:pt-0 pt-34 md:w-[60%] w-full flex flex-col items-center justify-center font-secondary p-5 relative z-5'>
                    <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-6xl font-bold heading'>
                        Your Potentials
                    </h1>
                    <h1 className='xl:text-7xl lg:text-6xl md:text-5xl text-6xl mt-2.5 font-bold heading'>
                        Our Mentorship
                    </h1>
                    <p className='md:w-[80%] sm:w-[70%] w-full mt-6 text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eveniet ex voluptates odit aut non mollitia repellendus vitae obcaecati quasi ipsum veniam.
                    </p>
                    <a href='https://www.youtube.com/@TemperamentOfTraders' target='_blank' className='mt-12 bg-blue-600 hover:bg-blue-500 font-nav sm:h-[45px] h-[55px] sm:w-[300px] w-full rounded flex items-center justify-center gap-2 cursor-pointer'>
                         <span><SiYoutubegaming className='text-xl' /></span>
                        <span>My Playlists</span>
                    </a>
                </div>
                <div className='md:min-h-[calc(100vh-78px)] min-h-max md:w-[40%] w-full flex items-center justify-center relative'>
                    <img src="../man.png" className='object-cover w-[370px]' />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary2 to-transparent"></div>
                </div>
                <div className='absolute bottom-0 h-full w-full bg-[url(../hh.png)] bg-cover bg-center md:opacity-5 opacity-4 md:rotate-0 rotate-180'></div>
            </section>
        </>
    )
}

export default Hero
