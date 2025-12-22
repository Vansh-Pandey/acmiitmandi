import React, { useState } from "react";
import { motion } from "framer-motion";



const VoxelMiniNew = ({
  shirt = "#10B981",
  hair = "#3C2F23",
  accent = "#FACC15",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-32 h-48 select-none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -3, 0] }}
      transition={{
        opacity: { duration: 0.6 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ 
        transform: 'perspective(800px) rotateX(5deg)',
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
      }}
    >
      {hovered && (
        <motion.div
          className="absolute -top-16 left-1/2 -translate-x-1/2 z-20"
          initial={{ scale: 0, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div 
            className="relative bg-gradient-to-br from-white to-gray-100 text-black text-xs px-4 py-2 border-4 border-neutral-800 shadow-xl"
            style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
          >
            Join ACM!
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-4 border-r-4 border-neutral-800 rotate-45" />
          </div>
        </motion.div>
      )}

      {/* Head with 3D effect */}
      <motion.div
        className="relative w-12 h-12 mx-auto"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 border-2"
          style={{ 
            backgroundColor: '#FFD7B5',
            borderColor: '#D4A574',
            boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.3)'
          }}
        >
          {/* Hair */}
          <div
            className="absolute -top-1 left-0 w-full h-4 border-b-2"
            style={{ 
              backgroundColor: hair,
              borderColor: 'rgba(0,0,0,0.3)',
              boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.3)'
            }}
          />
          {/* Eyes with shine */}
          <div className="absolute top-5 left-2.5 w-2 h-2 bg-black rounded-sm">
            <div className="absolute top-0 right-0 w-1 h-1 bg-white/40" />
          </div>
          <div className="absolute top-5 right-2.5 w-2 h-2 bg-black rounded-sm">
            <div className="absolute top-0 right-0 w-1 h-1 bg-white/40" />
          </div>
          {/* Nose */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4A574]" 
               style={{ boxShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} />
          {/* Mouth */}
          <div className="absolute top-9 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D4A574]/60 rounded-full" />
        </div>
        
        {/* Side shadow for depth */}
        <div className="absolute -right-1 top-0 w-1 h-12 bg-black/20" 
             style={{ transform: 'skewY(-5deg)' }} />
        <div className="absolute left-0 -bottom-1 w-12 h-1 bg-black/20" 
             style={{ transform: 'skewX(-5deg)' }} />
      </motion.div>

      {/* Body with 3D shading */}
      <div
        className="relative w-14 h-14 mx-auto mt-1 border-2 flex items-center justify-center"
        style={{ 
          backgroundColor: shirt, 
          borderColor: "#065F46",
          boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.3)'
        }}
      >
        {/* Logo with glow */}
        <motion.div
          className="w-4 h-4 border-2 rounded-sm"
          style={{ 
            borderColor: accent,
            boxShadow: `0 0 8px ${accent}60`
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Side panels for 3D effect */}
        <div className="absolute -right-1 top-0 w-1 h-14 bg-black/30" 
             style={{ transform: 'skewY(-8deg)' }} />
        <div className="absolute left-0 -bottom-1 w-14 h-1 bg-black/30" 
             style={{ transform: 'skewX(-8deg)' }} />
      </div>

      {/* Arms with 3D effect */}
      <motion.div
        className="absolute top-[60px] left-[4px] w-4 h-12 border"
        style={{
          backgroundColor: shirt,
          borderColor: "#065F46",
          transformOrigin: "top center",
          boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)'
        }}
        animate={{ rotate: [0, 6, -6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[60px] right-[4px] w-4 h-12 border"
        style={{
          backgroundColor: shirt,
          borderColor: "#065F46",
          transformOrigin: "top center",
          boxShadow: 'inset 2px -2px 4px rgba(0,0,0,0.3), -2px 2px 4px rgba(0,0,0,0.2)'
        }}
        animate={{ rotate: [0, -6, 6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Legs with 3D effect */}
      <div className="flex justify-center gap-1 mt-1">
        <div className="w-5 h-8 bg-[#1F2937] border-2 border-[#111827]" 
             style={{ boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.3)' }} />
        <div className="w-5 h-8 bg-[#1F2937] border-2 border-[#111827]" 
             style={{ boxShadow: 'inset 2px -2px 4px rgba(0,0,0,0.4), -2px 2px 4px rgba(0,0,0,0.3)' }} />
      </div>

      {/* Enhanced shadow */}
      <motion.div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
          filter: 'blur(4px)'
        }}
        animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};



const PixelIcon = ({ pattern }) => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    {pattern.map((p, i) =>
      p ? (
        <rect
          key={i}
          x={(i % 4) * 4}
          y={Math.floor(i / 4) * 4}
          width="4"
          height="4"
          fill="currentColor"
        />
      ) : null
    )}
  </svg>
);

const pixelIcons = [
  [0,1,1,0, 1,1,1,1, 0,1,1,0, 0,1,1,0],
  [1,0,1,0, 0,1,0,1, 1,0,1,0, 0,1,0,1],
  [0,1,1,0, 1,0,0,1, 1,0,0,1, 0,1,1,0],
  [1,1,1,1, 1,0,0,1, 1,0,0,1, 1,1,1,1],
  [0,1,0,0, 1,1,1,0, 0,1,1,1, 0,0,1,0],
  [0,1,0,0, 1,1,1,0, 1,1,1,0, 0,1,0,0],
];

/* ===============================
   Join Page
   =============================== */

const cardStyles = [
  { bg: "#1f2937", border: "#10B981" },
  { bg: "#1e293b", border: "#3B82F6" },
  { bg: "#2e1065", border: "#8B5CF6" },
  { bg: "#3a2e0f", border: "#F59E0B" },
  { bg: "#3a1020", border: "#EC4899" },
  { bg: "#042f2e", border: "#14B8A6" },
];
const LinkedInPixelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="1" width="3" height="3" />
    <rect x="1" y="5" width="3" height="10" />
    <rect x="6" y="6" width="3" height="9" />
    <rect x="10" y="6" width="5" height="3" />
    <rect x="10" y="10" width="5" height="5" />
  </svg>
);


const Join = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
   
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    
    if (document.fonts) {
      document.fonts.load('10px "Press Start 2P"').then(() => {
        setFontLoaded(true);
      }).catch(() => {
        
        setFontLoaded(true);
      });
    } else {
      
      setTimeout(() => setFontLoaded(true), 1000);
    }

    return () => {
   
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  const benefits = [
    "Hands-on Workshops",
    "Competitive Hackathons",
    "Guided Mentorship",
    "Cool Projects",
    "Creative Tech Guild",
  ];

  const pixelFont = '"Press Start 2P", "Courier New", monospace';

  return (
    <>
      {!fontLoaded && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="text-white text-sm">Loading pixel font...</div>
        </div>
      )}
      <div
        className="min-h-screen text-white bg-[#0f0f0f]
        bg-[radial-gradient(circle_at_20%_30%,#2a2a2a_2px,transparent_2px)]
        bg-[length:36px_36px]"
        style={{ fontFamily: pixelFont }}
      >
      <header className="py-12 px-6 text-center">
        <div className="flex justify-center gap-10 mb-4">
          <VoxelMiniNew />
          <VoxelMiniNew shirt="#3B82F6" hair="#111827" accent="#22D3EE" />
          <VoxelMiniNew shirt="#8B5CF6" hair="#4B5563" accent="#F472B6" />
        </div>

        <h1 
          className="text-2xl md:text-3xl text-yellow-400 mb-6"
          style={{ 
            fontFamily: pixelFont,
            letterSpacing: '0.1em',
            lineHeight: '1.6'
          }}
        >
          Join Our Community
        </h1>

        <p 
          className="max-w-2xl mx-auto text-neutral-300"
          style={{ 
            fontFamily: pixelFont,
            fontSize: '10px',
            lineHeight: '1.8'
          }}
        >
          Learn, build, and grow with a collaborative student-driven
          technical community at IIT Mandi.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6">
        <h2 
          className="text-center mb-8 text-emerald-400 uppercase"
          style={{ 
            fontFamily: pixelFont,
            fontSize: '20px',
            letterSpacing: '0.15em'
          }}
        >
          What Members Get?
        </h2>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-16">
          {benefits.map((item, idx) => {
            const style = cardStyles[idx];
            const isActive = activeCard === idx;

            return (
              <motion.div
                key={item}
                onClick={() => setActiveCard(isActive ? null : idx)}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 18px ${style.border}`,
                }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-4 border-4 cursor-pointer transition-all"
                style={{
                  backgroundColor: style.bg,
                  borderColor: style.border,
                }}
              >
                <div className="flex items-center gap-4">
                  <PixelIcon pattern={pixelIcons[idx]} />
                  <span style={{ 
                    fontFamily: pixelFont,
                    fontSize: '12px',
                    letterSpacing: '0.05em',
                  }}>{item}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p 
            className="mb-5 text-neutral-300"
            style={{ 
              fontFamily: pixelFont,
              fontSize: '14px',
              lineHeight: '1.8'
            }}
          >
            Ready to be part of the community?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/acm_iitmandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold
                px-7 py-3 border-4 border-yellow-700
                hover:shadow-[0_0_20px_rgba(248,184,0,0.6)]
                transition-shadow"
              style={{ 
                fontFamily: pixelFont,
                fontSize: '10px',
                letterSpacing: '0.05em'
              }}
            >
              <PixelIcon pattern={pixelIcons[1]} />
              Instagram
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/acm-iit-mandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-500 text-black font-bold
                px-7 py-3 border-4 border-blue-800
                hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                transition-shadow"
              style={{ 
                fontFamily: pixelFont,
                fontSize: '10px',
                letterSpacing: '0.05em'
              }}
            >
              <LinkedInPixelIcon />
              LinkedIn
            </a>
          </div>

        </div>
      </main>
    </div>
    </>
  );
};

export default Join;