"use client";

import Image from "next/image";
import Link from "next/link";
interface Meme {
  author: string;
  nsfw: boolean;
  postLink: string;
  title: string;
  url: string;
}

import { useEffect, useState } from "react";
export default function NotFound() {
  const [meme, setMeme] = useState<Meme|null>(null);
 
  async function getData() {
    const res = await fetch("https://meme-api.com/gimme");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    setMeme(await res.json());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-auto  w-1/2">
      
     {meme && <div className="grid justify-center">
        <h1>{meme.title}</h1>
        <Image src={meme.url} alt="meme" width={500} height={500} />
        <Link href={"/"}>Return Home</Link>
      </div>}
    </div>
  );
}
