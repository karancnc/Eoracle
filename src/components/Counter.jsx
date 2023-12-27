import { useEffect, useState } from "react";

const Counter = ({ value, duration, delay }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
  
        if (progress > delay && progress < delay + duration) {
          const increment = ((value / duration) * (progress - delay));
          setCount(increment);
          requestAnimationFrame(step);
        } else if (progress >= delay + duration) {
          setCount(value);
        } else {
          requestAnimationFrame(step);
        }
      };
  
      requestAnimationFrame(step);
  
      return () => setCount(0);
    }, [value, duration, delay]);
  
    const formattedCount = new Intl.NumberFormat().format(Math.floor(count));
  
    return <div className="counter">{formattedCount}</div>;
  };

  export default Counter