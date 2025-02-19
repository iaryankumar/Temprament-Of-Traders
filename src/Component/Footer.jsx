import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
          <footer className="bg-white dark:bg-gray-900">
              <div className="container px-6 py-12 mx-auto">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                      <div className="sm:col-span-2">
                          <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>
                          <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                              <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                  Subscribe
                              </button>
                          </div>
                      </div>
                      <div>
                          <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
                          <div className="flex flex-col items-start mt-5 space-y-2">
                              <Link to={'/'} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</Link>
                              <Link to={'/*'} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Us</Link>
                              <Link to={'/mentorship'} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Mentorship</Link>
                          </div>
                      </div>
                      <div>
                          <p className="font-semibold text-gray-800 dark:text-white">Individuals</p>
                          <div className="flex flex-col items-start mt-5 space-y-2">
                              <Link to={""} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Er. Vivek Kushwaha</Link>
                              
                          </div>
                      </div>
                  </div>
                  
              </div>
          </footer>

   </>
  )
}

export default Footer
