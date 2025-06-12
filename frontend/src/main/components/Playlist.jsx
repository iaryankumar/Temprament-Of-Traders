import React from 'react'

const Playlist = () => {
    return (
        <>
            <div className='min-h-[95vh] max-h-max w-[99.5%] m-auto rounded mt-5 flex flex-col items-center lg:pt-20 md:pt-12 pt-5 pb-16 px-3 bg-gray-50'>
                <h1 className='lg:text-7xl md:text-4xl text-4xl font-rt text-gray-700 mt-4'>Top <span className='text-blue-600'>Videos</span></h1>

                <div className='h-max w-full sm:mt-8 pt-9 grid lg:grid-cols-3 md:grid-cols-2 lg:px-17 lg:gap-10 gap-7'>
                    {/* card  */}
                    {Array(9).fill(0).map((ele, i) => {
                        return <div key={i} className='h-[max] w-full border border-gray-200 rounded flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-all ease-initial pb-6'>
                            <div className='h-max w-full flex items-center gap-4 rounded p-0.5'>
                               <img src="https://i.ytimg.com/vi/YgT_0Yy9tQU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCMU9SC_OH12EMSM6NG9j7H1-AOOg" className='w-full rounded-t' />
                            </div>
                            <div className='flex-1 w-full px-3'>
                                <h1 className='text-[19px] font-semibold'>Momentum Trading</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,</p>
                                <button className='bg-blue-200 mt-3 px-3 py-1.5 rounded-full text-[13px] font-semibold hover:bg-blue-600 hover:text-white'>Watch Now</button>
                            </div>
                        </div>
                    })
                    }
                    {/* card  */}
                </div>
            </div>
        </>
    )
}

export default Playlist
