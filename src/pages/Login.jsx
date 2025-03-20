import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { gsap } from 'gsap';

const SignIn = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    if (gradientRef.current) {
      gsap.set(gradientRef.current, { y: '-100%' });
      gsap.to(gradientRef.current, {
        y: '100%',
        ease: 'linear',
        duration: 6,
        repeat: -1,
      });
    }
  }, []);

  const spans = Array.from({ length: 200 }).map((_, i) => (
    <span
      key={i}
      className="relative block transition-colors duration-[0.1s] hover:bg-cyan-400 hover:duration-6 transit bg-[#181818] z-2 w-[calc(20vw-2px)] md:w-[calc(10vw-2px)] lg:w-[calc(6.25vw-2px)] h-[calc(20vw-2px)] md:h-[calc(10vw-2px)] lg:h-[calc(6.25vw-2px)]"/>
  ));

  return (
    <section className="select-none relative w-screen h-screen flex justify-center items-center gap-[2px] flex-wrap overflow-hidden bg-black">
      <div
        ref={gradientRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(#000, #00ffff, #000)' }}
      ></div>

      {spans}

      <div className="absolute w-[400px] backdrop-blur-sm bg-[#222]/70 z-50 flex justify-center items-center p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="text-2xl uppercase text-cyan-400 font-quicksand">Sign In</h2>
          <form className="w-full flex flex-col gap-6">
            <div className="relative w-full">
              <input
              id='Username'
                type="text" required
                className="peer w-full bg-[#333]/50 border-none outline-none px-3 pt-5 pb-2 rounded text-white font-medium text-base"/>
              
              <span className="absolute left-0 px-2 py-3 text-gray-400 transition-all duration-100 peer-focus:-translate-y-2 peer-valid:-translate-y-2 peer-focus:text-xs peer-valid:text-xs peer-focus:text-white peer-valid:text-white">
              <label htmlFor="Username">Username</label>
              </span>

            </div>

            <div className="relative w-full">
              <input id='password'
                type="password" required
                className="peer w-full bg-[#333]/50 border-none outline-none px-3 pt-5 pb-2 rounded text-white font-medium text-base"
              />
              <span className="absolute left-0 px-2 py-3 text-gray-400 transition-all duration-100 peer-focus:-translate-y-2 peer-valid:-translate-y-2 peer-focus:text-xs peer-valid:text-xs peer-focus:text-white peer-valid:text-white">
                <label htmlFor="password">Password</label>
              </span>
            </div>

            <div className="flex justify-between">
              <a href="#" className="text-white">
                Forgot Password
              </a>
              <a href="#" className="text-cyan-400 font-semibold hover:text-[#2f38]">
                Signup
              </a>
            </div>

            <button className="relative w-full">
              <input
                type="submit"
                value="Login"
                className="w-full p-3 bg-cyan-400 text-black font-semibold text-xl tracking-wider cursor-pointer active:opacity-60 rounded"
              />
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-gray-400/30"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-[1px] bg-gray-400/30"></div>
            </div>

            <button
              type="button"
              onClick={() => {/* Add your Google sign-in logic here */}}
              className="flex items-center justify-center gap-2 w-full p-3 bg-[#333]/50 text-white font-semibold rounded hover:bg-[#444]/50 transition-colors"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;