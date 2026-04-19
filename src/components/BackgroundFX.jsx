import { useEffect, useState } from "react";
import "./BackgroundFX.css";

export default function BackgroundFX() {
  const [mouse, setMouse] = useState({ x: 300, y: 300 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="bgScene">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="gridLayer"></div>

      <div
        className="cursorGlow"
        style={{
          transform: `translate(${mouse.x - 120}px, ${mouse.y - 120}px)`
        }}
      ></div>

      <div className="particles">
  {Array.from({ length: 40 }).map((_, i) => (
    <span key={i}></span>
  ))}
</div>
    </div>
  );
}