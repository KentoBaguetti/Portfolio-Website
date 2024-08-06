import React, { useRef, useEffect, useState } from "react";

const FadeSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  const observerRef = useRef(null);

  useEffect(() => {
    let debounceTimer;

    const handleIntersection = (entries) => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      debounceTimer = setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      }, 100);
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    observerRef.current.observe(domRef.current);

    return () => {
      if (observerRef.current && domRef.current) {
        observerRef.current.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeSection;
