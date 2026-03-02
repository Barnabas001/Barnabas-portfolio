import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        } else {
          //Deleting
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);

          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);
  return displayed;
}
