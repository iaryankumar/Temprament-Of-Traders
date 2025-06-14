import React, { useState } from 'react'
import { PiWarningCircle } from 'react-icons/pi'

const Details = () => {
    const [details, setDeatils] = useState({
        name: '',
        aadhar: '',
        email: '',
        phone: '',
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }
  return (
    <>
        <div className='h-[70px] w-full bg-red-700 text-gray-100 flex items-center px-6'>

                <div className='flex items-center justify-center gap-2 cursor-pointer font-primary tracking-wide font-light text-[25px]'>
                    <PiWarningCircle />
                    <h1 className='text-[13px] mt-1'>Please Read All Terms and Condition</h1>
                </div>

            </div>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit} className='h-max w-[90%]  border border-gray-300 rounded shadow-xl mt-4 mb-4 px-6 py-3 pb-12'>
                    {/* this is the personal section */}
                    <div className='h-[50px] w-full border-b border-gray-300 flex items-center text-[18px] font-bold'>
                        <h1>Personal Details</h1>
                    </div>
                    <div className='flex flex-col gap-5 font-primary mt-6 pe-12'>
                        {/* This is the input  */}
                        <div className='flex items-center gap-3'>
                            <label htmlFor="name" className='font-semibold text-midFont text-[14px] w-[120px]'> Candidate Name :</label>
                            <input name='name' onChange={(e) => setDeatils({ ...details, [e.target.name]: e.target.value })} type="text" id="name" className='border border-gray-300 shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
                        </div>
                        <div className='flex items-center gap-'>
                            <label htmlFor="aadhar" className='font-semibold text-midFont text-[14px] w-[130px] text-center'> Aadhar :</label>
                            <input name='aadhar' onChange={(e) => setDeatils({ ...details, [e.target.name]: e.target.value })} id='aadhar' type="number" className='border flex-1 border-gray-300 shadow rounded py-2.5 px-2 pe-6 outline-none text-[14px] font-normal' required />
                        </div>
                        <div className='flex items-center gap-3'>
                            <label htmlFor="email" className='font-semibold text-midFont text-[14px] w-[120px]'> Candidate Email :</label>
                            <input name='email' onChange={(e) => setDeatils({ ...details, [e.target.name]: e.target.value })} type="email" id="email" className='border border-gray-300 shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
                        </div>
                        <div className='flex items-center gap-'>
                            <label htmlFor="phone" className='font-semibold text-midFont text-[14px] w-[130px]'> Candidate Phone :</label>
                            <input name='phone' onChange={(e) => setDeatils({ ...details, [e.target.name]: e.target.value })} id='phone' type="number" className='border flex-1 border-gray-300 shadow rounded py-2.5 px-2 pe-6 outline-none text-[14px] font-normal' required />
                        </div>
                        {/* This is the input  */}

                    </div>
                    {/* this is the personal section */}

                    <div className='h-[50px] w-full border-b border-gray-300 flex items-center text-[18px] font-bold mt-6'>
                        <h1>Terms&Condition</h1>
                    </div>
                    <div className='flex justify-between p-3 gap-5'>
                        <input type="checkbox" id='t&c' />
                        <label htmlFor="t&c">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa incidunt obcaecati itaque voluptatem beatae aperiam iure nemo laboriosam. Voluptatibus culpa vitae odio alias voluptatem obcaecati aspernatur in quam deserunt? Molestias voluptas iste corporis nisi impedit quis aliquid odit neque repellat. Saepe ratione ducimus exercitationem voluptatum ad, aut facilis deleniti obcaecati.
                        </label>
                    </div>
                    <button className='h-[50px] w-full bg-black mt-7 rounded text-white cursor-pointer'>
                            Submit
                    </button>
                </form>
            </div>
    </>
  )
}

export default Details
