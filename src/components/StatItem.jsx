import { useState, useEffect, useRef } from "react";
function StatItem({ number, suffix, text }) {
  const [count, setCount] = useState(0);
  const statRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Count up when the stat becomes visible

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = number / steps;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment >= number) {
          clearInterval(interval);
          return number;
        }
        return prevCount + increment;
      });
    }, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, [number, isVisible]);

  // Detect when the stat enters the viewport

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(statRef.current);
      }
    });
    observer.observe(statRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="stat-item" ref={statRef}>
      <h2 className="mb-0">
        {Math.round(count)}
        {suffix}
      </h2>
      <p className="mb-0 px-2">{text}</p>
    </div>
  );
}

export default StatItem;
