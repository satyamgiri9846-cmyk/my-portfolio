import "./MountainBackground.css";

function MountainBackground() {
  const snowflakes = Array.from({ length: 40 });

  return (
    <div className="mountain-bg">
      <div className="sky"></div>

      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>

      <svg
        className="mountains-back"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,400 0,250 200,180 400,260 600,150 800,240 1000,170 1200,250 1440,190 1440,400"
          fill="var(--mountain-back)"
        />
      </svg>

      <svg
        className="mountains-front"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,400 0,300 150,220 300,290 500,120 620,200 720,60 820,200 950,280 1150,210 1300,290 1440,240 1440,400"
          fill="var(--mountain-front)"
        />
        {/* Snow caps */}
        <polygon points="680,80 720,60 760,80 740,100 700,100" fill="#ffffff" opacity="0.9" />
        <polygon points="460,150 500,120 540,150 520,170 480,170" fill="#ffffff" opacity="0.85" />
      </svg>

      <div className="snow-layer">
        {snowflakes.map((_, i) => (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              opacity: 0.4 + Math.random() * 0.5,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default MountainBackground;