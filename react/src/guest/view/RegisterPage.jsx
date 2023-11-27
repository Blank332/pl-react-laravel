import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import pattern from '../../assets/pattern.jpg';

function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    
  return (
    <div className="w-full flex flex-wrap">
    <div className="w-full md:w-3/5 flex flex-col">
      <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray shadow-2xl rounded-md p-8 max-w-lg w-full h-fit pt-20">
          <p className="text-center text-3xl mb-12">Pembangunan Library</p>
          <form className="space-y-6" action="#" method="POST">
            {/* ID Pegawai */}
            <div className="mb-4">
              <label htmlFor="ID Pegawai" className="block text-sm font-medium leading-6 text-gray-900">
                ID Pegawai
              </label>
              <div className="mt-2">
                <input
                  id="ID Pegawai"
                  name="ID Pegawai"
                  type="text"
                  pattern="\d*"
                  autoComplete="ID Pegawai"
                  placeholder="1234*"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* Password visibility toggle */}
                <div onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  {showPassword ? (
                    /* Show password icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {/* ... (your icon paths) */}
                    </svg>
                  ) : (
                    /* Hide password icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {/* ... (your icon paths) */}
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center pt-2 pb-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 px-3 py-2.5 mt-2 text-sm font-semibold text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Copyright */}
          <div className="text-center mt-20 font-semibold text-indigo-600 hover:text-indigo-500">
            <p>© 2023 Software Engineering</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-2/5 shadow-2xl">
      <img className="object-cover w-full h-screen hidden md:block" src={pattern} alt="Pattern" />
    </div>
  </div>
  )
}

export default RegisterPage;