
import { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Tech enthusiast', 'IT student'];
  const period = 2000;
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting) {
      setDelta(100); // Faster erasing speed
      if (updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
      }
    }
  };

  return <span className="text-3xl text-lightBlue">{text}</span>;
};

export default TypingAnimation;
