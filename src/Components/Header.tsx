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
    <header className='w-full bg-white shadow-lg m-auto p-2' >
      <button type='button' className='text-white-700 bg-slate-500 rounded p-1 ' onClick={handleToggleTheme}>Toggle Theme</button>
      <p className='text-gray-700'>Using - {theme === 'light' ? 'Light Theme' : 'Dark Theme'}</p>
    </header>
  );
};

export default Header;