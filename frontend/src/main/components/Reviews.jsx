import React from 'react'

const Reviews = () => {
    return (
        <>
            <div className='h-max w-full bg-white flex items-center justify-center'>
                <div className="p-7 sm:mt-16 mt-5 mb-3 font-[sans-serif]">
                    <div className="max-w-[1200px] max-md:max-w-xl mx-auto">
                        <div className="grid md:grid-cols-2 items-center lg:gap-24 md:gap-16 gap-8">
                            <div className="space-y-6 bg-gray-100 rounded-lg p-6">
                                <div className="flex sm:items-center max-sm:flex-col-reverse">
                                    <div className="mr-3">
                                        <h6 className="text-gray-800 text-sm font-bold">John Doe</h6>
                                        <p className="text-sm text-gray-800 mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
                                    </div>
                                    <img src="https://readymadeui.com/team-2.webp" className="w-16 h-16 rounded-full max-sm:mb-2" />
                                </div>
                                <div className="flex sm:items-center max-sm:flex-col-reverse p-6 relative md:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-lg">
                                    <div className="mr-3">
                                        <h6 className="text-gray-800 text-sm font-bold">Mark Adair</h6>
                                        <p className="text-sm text-gray-800 mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
                                    </div>
                                    <img src="https://readymadeui.com/team-3.webp" className="w-16 h-16 rounded-full max-sm:mb-2" />
                                </div>
                                <div className="flex sm:items-center max-sm:flex-col-reverse">
                                    <div className="mr-3">
                                        <h6 className="text-gray-800 text-sm font-bold">Simon Konecki</h6>
                                        <p className="text-sm text-gray-800 mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
                                    </div>
                                    <img src="https://readymadeui.com/team-4.webp" className="w-16 h-16 rounded-full max-sm:mb-2" />
                                </div>
                            </div>
                            <div className="max-md:-order-1">
                                <h6 className="text-xl font-bold text-gray-300">Testimonials</h6>
                                <h2 className="text-gray-800 text-4xl font-bold mt-4">We are loyal with our customer</h2>
                                <p className="text-sm text-gray-600 mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews
