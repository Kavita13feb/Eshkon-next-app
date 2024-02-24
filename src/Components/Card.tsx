"use client"

import Image from "next/image";
import type { RootState } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../Redux/slice'
import React from 'react'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

interface CardProps {
  heading: string
  description: string
  thumbnail: string
  link: string
}
export default function Card() {
  const theme = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()
    return (
      <div className="p-6 flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg m-auto">
         <Image
        src="https://2.bp.blogspot.com/-_xt1l3SQjf4/ViDuvIfFU2I/AAAAAAAA5Xc/S1yMyotgar4/s1600/beautiful-twilight-wallpaper-free-download-1024x640.jpg"
        width={300}
        height={640}
        alt="A beautiful twilight scenery"
        className="rounded-lg"
      />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{"A beautiful twilight scenery"}</h5>
          <p className="text-gray-700 text-base mt-4 mb-4">{"As the sun sets, the sky transforms into a canvas of pink, orange, and purple hues, casting a tranquil glow over the landscape, punctuated by the emergence of twinkling stars."}</p>
          <Link className="text-gray-900 text-xl font-medium mb-2" href={"singleCard"}>
            
              Read more
          </Link>
        </div>
      </div>
    )
}
