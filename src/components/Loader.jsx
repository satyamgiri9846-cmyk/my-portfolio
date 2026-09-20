import { useState, useEffect } from "react";
import "./Loader.css";

function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1000);
    const removeTimer = setTimeout(() => setVisible(false), 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader ${fadeOut ? "loader-fade" : ""}`}>
      <div className="loader-content">
        <h1>Satyam Giri</h1>
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;