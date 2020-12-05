import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export interface SampleProps {
  message: string;
}

export const Sample = ({ message }: SampleProps) => {
  const divRef = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    tl.to(divRef.current, { rotation: 27, x: 100, duration: 1 });
    tl.to(divRef.current, { y: 50, duration: 1 });
    tl.to(divRef.current, { opacity: 0, duration: 1 });
  }, []);
  return (
    <div style={{ display: 'inline-block' }} ref={divRef}>
      {message}
    </div>
  );
};
