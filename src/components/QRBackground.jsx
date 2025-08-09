import React, { useMemo } from 'react';

const QRBackground = () => {
  // Memoize dots so they're not recalculated on each render
  const dots = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
      key: i,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-[#e0eaff] via-[#fdfdfd] to-[#e3faff]">
      {/* Glow */}
      <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-200 via-white to-cyan-200 opacity-40 blur-[100px]" />

      {/* Floating Dots */}
      <div className="absolute w-full h-full pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.key}
            className="absolute rounded-full animate-floatDot bg-black/30"  // increased opacity from 20% to 30%
            style={{
              left: dot.left,
              top: dot.top,
              width: '4px',   // bigger than before (was 1px)
              height: '4px',
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000c_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
    </div>
  );
};

export default QRBackground;
