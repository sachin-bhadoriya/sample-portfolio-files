import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaBackgroundTwo = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let script;

    const loadVanta = async () => {
      if (!window.VANTA) {
        script = document.createElement("script");
        script.src = "/vanta.net.min.js";
        script.async = true;
        script.onload = () => {
          if (window.VANTA && !vantaEffect) {
            const effect = window.VANTA.NET({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0xb63f5d,
              backgroundColor: 0x072b46,
              points: 18.0,
            });

            setVantaEffect(effect);
          }
        };
        document.body.appendChild(script);
      } else if (!vantaEffect) {
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xb63f5d,
          backgroundColor: 0x072b46,
          points: 18.0,
        });

        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      if (script) document.body.removeChild(script);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackgroundTwo;
