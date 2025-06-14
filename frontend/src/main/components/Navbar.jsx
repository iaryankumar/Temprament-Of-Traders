import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ hero, about, playlist, reviews, page }) => {
  const navigate = useNavigate()
  // console.log(val)
  const [menuOpen, setMenuOpen] = useState(false)
  const [clName, setClName] = useState('')
  const handleSwipes = () => {
    if (!menuOpen) {
      setClName('slide-in-left');
      setMenuOpen(true);
    } else {
      setClName('slide-out-left');
      setTimeout(() => setMenuOpen(false), 400)
    }
  }
  return (
    <>
      <nav className='h-[78px] w-full bg-primary2 text-primary flex items-center justify-between md:px-12 px-8 sticky top-0 z-50'>
        <div>
          <span className='text-3xl font-bold tracking-wide'>Tech</span>
          <span className='text-3xl font-bold text-blue-600 '>Co</span>
        </div>
        {page==="home" && <div className='h-full flex items-center'>
          <ul className='md:flex hidden gap-3 h-full items-center font-rubik text-[14px]'>
            <li className='cursor-pointer hover:text-blue-600 hover:underline'><a onClick={hero}>Home</a></li>
            {/* <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><a>Medicines</a></li> */}
            <li className='cursor-pointer hover:text-blue-600 hover:underline'><a onClick={about}>About</a></li>
            <li className='cursor-pointer hover:text-blue-600 hover:underline'><a onClick={playlist} >Playlists</a></li>
            <li className='cursor-pointer hover:text-blue-600 hover:underline'><a onClick={reviews}>Testomonials</a></li>
            <li className='cursor-pointer hover:text-blue-600 hover:underline'><button onClick={()=>navigate('/mentorship')} className='bg-blue-700 px-3 py-2 text-white rounded text-[14px] ml-5 outline-none hover:bg-blue-600 cursor-pointer transition-all ease-initial '>Get Mentorship</button></li>
          </ul>
          <div className='md:hidden block text-3xl'>
            <HiMenuAlt3 onClick={handleSwipes} />
          </div>
        </div>}
      </nav>

      {menuOpen && <div className={`fixed ${clName} inset-0 p-2 flex flex-wrap justify-center items-center  h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.99)] overflow-auto`}>
        <div className="p-3 px-4 rounded-md relative">

          <div className=' w-[200px] p-2'>
            <ul className='text-white flex flex-col gap-3.5  font-rubik text-[14px] font-light'>
              <li className='w-full'><button onClick={() => { hero(); setMenuOpen(false) }} className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Home</button></li>
              {/* <li className='w-full'><button className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Medicines</button></li> */}
              <li className='w-full'><button onClick={() => { about(); setMenuOpen(false) }} className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>About</button></li>
              <li className='w-full'><button onClick={() => { playlist(); setMenuOpen(false) }} className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Playlist</button></li>
              <li className='w-full'><button onClick={() => { reviews(); setMenuOpen(false) }} className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Testomonials</button></li>
              <li className='cursor-pointer hover:text-blue-600 hover:underline'><button onClick={() => { navigate('/mentorship'); setMenuOpen(false) }} className='bg-blue-700 px-3 py-2 text-white rounded text-[14px] ml-5 outline-none hover:bg-blue-600 cursor-pointer transition-all ease-initial '>Get Mentorship</button></li>
              <li onClick={handleSwipes} className='w-full flex items-center justify-center font-light underline font-mont cursor-pointer'>close</li>
            </ul>
          </div>

        </div>
      </div>}
    </>
  )
}

export default Navbar
