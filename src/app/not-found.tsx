"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Meme {
  author: string;
  nsfw: boolean;
  postLink: string;
  title: string;
  url: string;
}

export default function NotFound() {
  const [meme, setMeme] = useState<Meme | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (meme) {
      setIsLoading(false);
    }
  }, [meme]);

  return (
    <div className="m-auto w-1/2">
      {isLoading && <h2 className="grid justify-center">...Loading</h2>}
      {meme && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid justify-center"
        >
          <h1>{meme.title}</h1>
          <Image src={meme.url} alt="meme" width={500} height={500} />
          <Link href={"/"}>Return Home</Link>
        </motion.div>
      )}
    </div>
  );
}
