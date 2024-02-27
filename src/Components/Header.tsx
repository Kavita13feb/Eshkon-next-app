"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Redux/slice';
import type { RootState } from '../Redux/store'
import Link from 'next/link';

const Header = () => {
    const theme = useSelector((state: RootState) => state.theme)

  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className='header' >
      <div>
      <button type='submit' className='toggle-btn' onClick={handleToggleTheme}>Toggle Theme</button>
      <p className='text-gray-700'>Using - {theme === 'light' ? 'Light Theme' : 'Dark Theme'}</p>
      </div>
     
    <Link className='text-gray-700'href={"/"}>Card</Link>
    <Link className='text-gray-700'href={"/singleCard"}>SingleCard</Link>
    <Link className='text-gray-700'href={"/chart"}>Chart</Link>

    </header>
  );
};

export default Header;