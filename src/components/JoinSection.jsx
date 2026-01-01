import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const perks = [
  { text: "Hands-on Workshops", icon: "🛠️" },
  { text: "Competitive Hackathons", icon: "⚔️" },
  { text: "Guided Mentorship", icon: "📘" },
  { text: "Real-world Projects", icon: "🧱" },
  { text: "Creative Tech Community", icon: "💎" },
];

/* Pixel Icons */
const InstagramPixel = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="1" width="14" height="14" />
    <rect x="4" y="4" width="8" height="8" fill="black" />
    <rect x="6" y="6" width="4" height="4" />
  </svg>
);

const LinkedInPixel = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="1" width="3" height="14" />
    <rect x="6" y="6" width="3" height="9" />
    <rect x="10" y="6" width="5" height="3" />
    <rect x="10" y="10" width="5" height="5" />
  </svg>
);

/* 🔶 Pixel Confetti */
const PixelConfetti = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-yellow-400"
        style={{
          left: "50%",
          top: "50%",
        }}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0, 1, 0],
          x: Math.random() * 120 - 60,
          y: Math.random() * -120,
        }}
        transition={{ duration: 0.6 }}
      />
    ))}
  </div>
);

/* 🌟 Floating Particles Background */
const FloatingParticles = () => {
  const particles = [];
  for (let i = 0; i < 30; i++) {
    const size = Math.random() * 6 + 3;
    const colors = ['#22c55e', '#3b82f6', '#facc15', '#a855f7', '#ef4444', '#14b8a6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    particles.push(
      <motion.div
        key={i}
        className="absolute rounded-sm"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: randomColor,
          boxShadow: `0 0 ${size * 3}px ${randomColor}`,
          left: `${startX}%`,
          top: `${startY}%`,
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, Math.random() * 40 - 20, 0],
          opacity: [0.3, 0.9, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
};

export default function JoinSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const [confetti, setConfetti] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start"
    >

      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110 z-0"
        style={{
          backgroundImage: "url(./bg5.png)",
          imageRendering: "pixelated",
          y: bgY,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.9) 10%,
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0.4) 60%,
        rgba(0, 0, 0, 0) 70%
      )
    `,
        }}
      />

      {/* BOTTOM → PURE BLACK FADE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
      linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.9) 15%,
        rgba(0, 0, 0, 0.7) 35%,
        rgba(0, 0, 0, 0.4) 55%,
        rgba(0, 0, 0, 0) 75%
      )
    `,
        }}
      />
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        <FloatingParticles />
      </div>

      {/* TITLE + TORCH FLICKER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-20 mt-20 text-center px-6"
        style={{ fontFamily: "MinecraftRegular, monospace" }}
      >
        {/* 🔥 Torch Glow */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -top-10 w-24 h-24 rounded-full"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background:
              "radial-gradient(circle, rgba(250,204,21,0.9), transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <h1
          className="text-yellow-400 text-5xl md:text-6xl mb-6"
          style={{
            fontFamily: "MinecraftRegular, monospace",
            letterSpacing: "0.25em",
            fontWeight: "900",
            textShadow: `
              4px 4px 0 #000,
              6px 6px 0 #000,
              8px 8px 0 #000,
              10px 10px 0 #000,
              0 0 40px rgba(250,204,21,1),
              0 0 60px rgba(250,204,21,0.8),
              0 0 80px rgba(250,204,21,0.6)
            `,
          }}
        >
          JOIN OUR COMMUNITY
        </h1>

        <p className="text-neutral-300 text-[16px] leading-[2.2] max-w-2xl mx-auto font-semibold" style={{ fontFamily: "MinecraftRegular, monospace" }}>
          Build. Learn. Compete. <br />
          Become part of the ACM Student Chapter at IIT Mandi.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-20 mb-24 flex flex-col lg:flex-row items-center gap-16">
        {/* PEOPLE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
          whileHover={{ scale: 1.02, rotate: 1 }}
        >
          <div className="absolute inset-0 blur-3xl bg-emerald-400/25 rounded-full" />
          <motion.img
            src="/people4.png"
            alt="Community"
            className="relative w-[420px] lg:w-[520px]"
            style={{ imageRendering: "pixelated" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-xl w-full px-10 py-12 bg-black/40 border-4 border-black"
          style={{
            backdropFilter: "blur(6px)",
            boxShadow:
              "inset -4px -4px 0 rgba(0,0,0,0.7), inset 4px 4px 0 rgba(255,255,255,0.05)",
            fontFamily: "MinecraftRegular, monospace",
          }}
        >
          {/* PERKS */}
          <div className="flex flex-col gap-6 mb-12">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.text}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIcon(i)}
                onMouseLeave={() => setHoveredIcon(null)}
                whileHover={{
                  scale: 1.12,
                  boxShadow: "0 0 35px rgba(52,211,153,1), 0 0 50px rgba(52,211,153,0.7), 0 0 70px rgba(52,211,153,0.4)",
                }}
                whileTap={{ scale: 1.08 }}
                className="flex items-center gap-6 bg-[#101010] border-4 border-neutral-700 px-6 py-5 cursor-pointer"
              >
                <motion.span
                  className="text-2xl"
                  animate={hoveredIcon === i ? {
                    scale: [1, 1.3, 1.2, 1.3, 1],
                    rotate: [0, -15, 15, -10, 0],
                    y: [0, -8, -5, -8, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {perk.icon}
                </motion.span>
                <span className="text-[16px] tracking-widest text-neutral-200" style={{ fontFamily: "MinecraftRegular, monospace" }}>
                  {perk.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative">
            <motion.a
              href="https://www.instagram.com/acm_iitmandi/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setConfetti("ig")}
              onMouseLeave={() => setConfetti(null)}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 8px 0 #000, 0 0 30px rgba(250,204,21,0.8)"
              }}
              whileTap={{
                scale: 0.98,
                y: 4,
                boxShadow: "0 2px 0 #000"
              }}
              transition={{ duration: 0.1 }}
              className="relative flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 border-4 border-yellow-700"
              style={{
                boxShadow: "0 6px 0 #000"
              }}
            >
              {confetti === "ig" && <PixelConfetti />}
              <InstagramPixel />
              <span className="text-[12px]" style={{ fontFamily: "MinecraftRegular, monospace" }}>INSTAGRAM</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/acm-iit-mandi/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setConfetti("li")}
              onMouseLeave={() => setConfetti(null)}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 8px 0 #000, 0 0 30px rgba(59,130,246,0.8)"
              }}
              whileTap={{
                scale: 0.98,
                y: 4,
                boxShadow: "0 2px 0 #000"
              }}
              transition={{ duration: 0.1 }}
              className="relative flex items-center gap-3 bg-blue-500 text-black px-8 py-4 border-4 border-blue-800"
              style={{
                boxShadow: "0 6px 0 #000"
              }}
            >
              {confetti === "li" && <PixelConfetti />}
              <LinkedInPixel />
              <span className="text-[12px]" style={{ fontFamily: "MinecraftRegular, monospace" }}>LINKEDIN</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}