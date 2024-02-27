"use client"

import Image from "next/image";
import type { RootState } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../Redux/slice'
import React from 'react'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import Card from "@/Components/Card";
import Header from "@/Components/Header";
import { motion } from "framer-motion"
interface CardProps {
  heading: string
  description: string
  thumbnail: string
  link: string
}
export default function Home() {
  const theme = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()
   console.log(theme)
    return (
      <div className="mt-5">
        <Card/>
      </div>
    )
}
