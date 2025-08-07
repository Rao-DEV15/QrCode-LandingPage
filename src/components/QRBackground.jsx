import React from 'react'
import { motion } from 'framer-motion'

const dots = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 6 + Math.random() * 4,
}))

const QRBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-[#e0eaff] via-[#fdfdfd] to-[#e3faff]">
      {/* Glow */}
      <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-200 via-white to-cyan-200 opacity-60 blur-[120px]" />

      {/* Floating dots */}
      <svg className="absolute w-full h-full">
        {dots.map((dot) => (
          <motion.circle
            key={dot.id}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r="4"
            fill="#00000030"
            animate={{ cy: [`${dot.y}%`, `${dot.y - 8}%`, `${dot.y}%`] }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000c_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
    </div>
  )
}

export default QRBackground
