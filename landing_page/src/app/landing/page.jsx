
import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[1000px] h-[600px] bg-[#f5f8fc] shadow-lg rounded-2xl flex overflow-hidden">
        {/* Left: Login Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[360px] bg-white flex flex-col p-8 rounded-2xl  shadow-none">
            {/* Logo */}
            <div className="flex justify-start mb-4 gap-2 text-lg font-[100]">
             <h1>Dawnbreak AI</h1>
            <Image
                src="/globe.png"
                alt="Dawnbreak AI Logo"
                width={29}
                height={10}
                objectFit="cover"
            />
            </div>
            {/* Title & Subtitle */}
            <div className="mb-4 text-start max-w-[250px]">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Get started</h2>
              <p className="text-gray-400 text-xs">Please input your login credentials or create a new account</p>
            </div>
            {/* Login Form */}
            <form className="flex flex-col gap-4">
              {/* Email */}
              <div>
              <label className="block text-gray-800 font-semibold mb-1 text-xs">Email</label>
              <div className=" border border-gray-300 rounded-xl px-3 py-2 flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 text-sm"
                  style={{ height: "26px" }}
                />
              </div>
              </div>
              {/* Password */}
              <div>
              <label className="block text-gray-800 font-semibold mb-1 text-xs">Password</label>
              <div className=" border border-gray-300 rounded-xl px-3 py-2 flex items-center">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 text-sm"
                  style={{ height: "26px" }}
                />
              </div>
              </div>
              {/* Forgot Password */}
              <div className="text-right text-[#08457E] text-xs font-medium cursor-pointer hover:underline">Forgot Password?</div>
              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-2 rounded-xl font-medium text-white text-base bg-gradient-to-r from-[#052A4D] to-[#08457E] hover:from-blue-800 hover:to-blue-400 transition-colors shadow"
              >
                Sign In
              </button>
            </form>
            {/* Terms & Privacy */}
            <div className="mt-4 text-center text-[10px] text-gray-500">
              By signing up, you agree to our <span className="underline cursor-pointer">Terms and Conditions</span> and <span className="underline cursor-pointer">Privacy Policy</span>
            </div>
            {/* Create Account Link */}
            <div className="mt-2 text-center text-xs text-gray-700">
              Don’t have an account? <span className="text-blue-700 font-medium cursor-pointer hover:underline">Create a new account</span>
            </div>
          </div>
        </div>
        {/* Right: Design Section */}
        <div className="flex-1 bg-gradient-to-br rounded-4xl from-[#052A4D] to-[#08457E] flex items-center justify-center">
            <div className="w-full max-w-[400px] h-full flex-col items-center justify-center mt-36">

          {/* Placeholder for design/artwork */}
          <Image
            src="/design.png"
            alt="Design Placeholder"
            width={400}
            height={400}
            objectFit="cover"
            />
            <p className="text-white text-xs mt-4 text-center">
                I can now upload prescriptions during breaks or even on the move. Thanks to the app's amazingly efficient automation I'm saving 2hrs a day
            </p>
            <p className="text-white text-xs mt-4 text-center italic">- Dr. Riya Kumar, MBBS, MS (OBG)</p>
            </div>
        </div>
      </div>
    </div>
  );
}
