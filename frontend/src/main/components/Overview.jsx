import React from 'react'
import { PiTreeViewLight } from 'react-icons/pi'

const Overview = () => {
    return (
        <>
            <section className='lg:h-[500px] h-max w-full bg-hero flex lg:flex-row flex-col-reverse md:pt-0 pt-5 md:pb-0 pb-4'>
                <div className='h-full lg:w-[45%] w-full flex items-center justify-center md:p-9 p-4'>

                    <iframe className='md:h-[315px] h-[280px] w-full rounded-2xl' src="https://www.youtube.com/embed/eR8Ya8-T5bc?si=lDUjXJQDWWG_MKob" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" ></iframe>

                </div>

                <div className='h-full lg:w-[55%] w-full flex flex-col gap-5 md:p-6 p-5 justify-center'>
                    <div className='h-[38px] w-max px-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 gap-2 bo'>
                        <PiTreeViewLight className='text-xl'/>
                        <h1>Overview</h1>
                    </div>
                    <h1 className='sm:text-5xl text-4xl font-secondary font-bold tracking-wide text-gray-800 md:leading-13 leading-9'>
                        This is only a mentorship program
                    </h1>
                    <p>
                        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum, unde eaque quidem facere consequatur beatae suscipit tempora praesentium similique! Dicta doloremque atque vero fuga soluta nihil itaque quibusdam ad obcaecati at? Nisi est dolore eius harum! Pariatur </span>
                        <span className='text-red-500'>
                            Please note that we are not registered with SEBI. If you are considering investing in financial, derivatives, index, or advisory products, we strongly recommend that you consult your financial advisor before making any investment decisions.
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Overview
