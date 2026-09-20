import { useEffect, useRef, useState } from "react";
import "./Stats.css";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function Stats({ stats }) {
  return (
    <section className="stats">
      {stats.map((stat, i) => (
        <div className="stat-item" key={i}>
          <h3>
            <Counter end={stat.value} suffix={stat.suffix || ""} />
          </h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;