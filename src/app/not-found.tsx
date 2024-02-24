"use client"

import Image from 'next/image';
import Link from 'next/link'
interface Meme {
  author: string;
  nsfw: boolean;
  postLink: string;
  title:string,
  url:string
}


import { useEffect, useState } from 'react';
export default function NotFound() {


  const [meme, setMeme] = useState<Meme>({});

  useEffect(() => {
    async function getData() {
        const res = await fetch('https://meme-api.com/gimme')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
       
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
       setMeme(await res.json())
        // return res.json()
      }
       
      getData()
    // setMemeUrl(randomMemeUrl);
  }, []);
  return (
    <div className='m-auto  w-1/2'>
      <div className='grid justify-center'>
        <h1>{meme.title}</h1>
        <Image src={meme.url} alt="meme" width={500} height={500}/>
      <Link href={"/"}>Return Home</Link>

      </div>
    </div>
  );
};


  