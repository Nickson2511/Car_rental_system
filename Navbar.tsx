import React from "react";
import CustomButton from "./CustomButton"; // Update the path accordingly
import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <ul className='flex space-x-4 ml-auto'> {/* Use ml-auto class here */}
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/vehicles'>Vehicles</Link>
        </li>
        <li>
          <Link href='/book'>Booking</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <CustomButton
            title='Sign in'
            btn-Type='button'
            containerStyles='text-white rounded-full bg-primary-blue min-w-[130px]'
          />
        </li>
        <li>
          <CustomButton
            title='Sign up'
            btn-Type='button'
            containerStyles='text-white rounded-full bg-primary-blue min-w-[130px]'
          />
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
