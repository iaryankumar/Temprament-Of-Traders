import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Mentorship = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}


      <div className='h-max w-full sm:mt-2 pt-9 grid lg:grid-cols-3 md:grid-cols-2 lg:px-17 lg:gap-10 gap-7 p-5'>
        {/* card  */}
        {Array(3).fill(0).map((ele, i) => {
          return <div key={i} className='h-[max] w-full border border-gray-200 rounded flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-all ease-initial pb-6'>
            <div className='h-max w-full flex items-center gap-4 rounded p-0.5'>
              <img src="https://i.ytimg.com/vi/YgT_0Yy9tQU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCMU9SC_OH12EMSM6NG9j7H1-AOOg" className='w-full rounded-t' />
            </div>
            <div className='flex-1 w-full px-3'>
              <h1 className='text-[19px] font-semibold text-gray-700'>Batch {i + 1}</h1>
              <p className='text-[15.5px] font-primary text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum officia velit tenetur hic unde quidem?</p>
              <div className='flex items-center mt-3 gap-2'>
                <h1 className='font-rt text-xl'>₹ 1454</h1>
                <p className='text-[14px] font-primary text-gray-600 line-through'>₹3000</p>
              </div>
              <button onClick={()=>navigate('/mentorship/hjhj')} className='bg-blue-600 mt-3 px-3 py-2.5 rounded-full text-[14px] font-semibold hover:bg-blue-600 hover:text-white w-full cursor-pointer'>Buy Subscription</button>
            </div>
          </div>
        })
        }
        {/* card  */}
      </div>

<div className='h-max w-full lg:px-17 p-5 pb-9 mt-7'>
        <h1 className='text-[17px] font-semibold'>Overview</h1>
        <hr className='mt-3 text-gray-300 mb-5' />
        <p className='text-[17px] text-gray-700' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ab ad architecto temporibus, enim accusamus qui atque. Nobis fugit doloremque, nostrum minus ipsum dolores atque rerum dolore! Enim, alias dicta? Consequatur voluptatibus corporis voluptates minus dolore ipsam sed excepturi adipisci cumque, sint suscipit, cupiditate molestias officia quasi tempora rerum velit temporibus. Voluptatibus porro consectetur vero reiciendis quidem aperiam eum sint beatae. Assumenda, molestiae autem? Velit sed earum a adipisci suscipit neque ad! Expedita, excepturi provident. Dicta totam quam dolore doloribus eum inventore facere doloremque nisi rem recusandae magnam quisquam fugit itaque excepturi cum dolores error sit minus exercitationem quia asperiores repudiandae laborum, reiciendis necessitatibus! Possimus perspiciatis tempora facilis provident recusandae? Dolor, minus placeat rerum eligendi nemo, repellendus sed a dolore, illo libero aliquid. Iure libero voluptatem atque aspernatur itaque amet dolores. Autem dicta nemo explicabo dolor, aspernatur, libero nisi asperiores odio commodi, fugiat sit reiciendis optio numquam blanditiis dolorum eligendi.</p>
      </div>

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  )
}

export default Mentorship
