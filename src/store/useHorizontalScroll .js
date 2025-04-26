
import React, { useEffect, useRef, useState } from 'react'

function useHorizontalScroll (scrollAmount = 1000) {

    const scrollRef = useRef(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current || {};
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
      };
    
      const scrollLeftFunc = () => {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      };
    
      const scrollRightFunc = () => {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      };
    
      useEffect(() => {
        if (scrollRef.current) {
          handleScroll();
        }
      },[]);
  return (
    {
        isAtStart,
        isAtEnd,
        scrollRef,
        handleScroll,
        scrollLeftFunc,
        scrollRightFunc
    }
  )
}

export default useHorizontalScroll 