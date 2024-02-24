import { useEffect, useState } from 'react';

export const NotFound = () => {
  const [memeUrl, setMemeUrl] = useState<string>('');

  useEffect(() => {
    // Fetch random meme URL
    // setMemeUrl(randomMemeUrl);
  }, []);

  return (
    <div>
      <div>
        <img src={memeUrl} alt="Meme" />
      </div>
    </div>
  );
};

