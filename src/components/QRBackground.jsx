import React, { useEffect, useRef } from 'react';

const QRBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const dots = 30;
    for (let i = 0; i < dots; i++) {
      const dot = document.createElement('div');
      dot.className = 'absolute w-1 h-1 bg-black/20 rounded-full animate-floatDot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 5}s`;
      dot.style.animationDuration = `${6 + Math.random() * 4}s`;
      container.appendChild(dot);
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-[#e0eaff] via-[#fdfdfd] to-[#e3faff]">
      {/* Subtle glow */}
      <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-200 via-white to-cyan-200 opacity-40 blur-[100px]" />

      {/* Floating dots container */}
      <div ref={containerRef} className="absolute w-full h-full pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000c_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
    </div>
  );
};

export default QRBackground;
