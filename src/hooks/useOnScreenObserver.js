import { useEffect, useState } from 'react';

export default function useOnScreenObserver(ref, rootMargin = '0px') {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin,
    });
    observer.observe(ref.current);

    return () => {
      if (ref.current === null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
}

// ! usage:
// import { useRef } from 'react';
// import useOneScreenObserver from 'path';
// const elementRef = useRef();
// const visible = useOnScreen(elementRef, '100px');

// {visible && <h1 ref={elementRef} style={{backgroundColor: visible ? 'white' : 'black'}}>Shit</h1>;}
