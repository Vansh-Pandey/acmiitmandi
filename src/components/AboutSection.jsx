import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      title: "INNOVATE",
      desc: "Push boundaries with cutting-edge projects",
      bg: "/redstone_bg.png",
      img: "/redstone.png",
    },
    {
      title: "COLLABORATE",
      desc: "Build together, learn together, grow together",
      bg: "/farm.png",
      img: "/emerald.png",
    },
    {
      title: "COMPETE",
      desc: "Hackathons, coding contests & tech challenges",
      bg: "/village.png",
      img: "/pillager.png",
    },
  ];



  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center py-20"
    >
      {/* Background - Same as Hero but with minecraft_bg2.png */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center scale-105 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          backgroundImage: 'url(/minecraft_bg2.png)',
          filter: 'blur(0px)',
          imageRendering: 'pixelated',
        }}
      />
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
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
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
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

   

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Video */}
          <div
            className={`relative transition-all duration-1000 ease-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }mt-24 md:mt-36`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative aspect-square overflow-hidden">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full animate-pulse"
                  style={{
                    filter: "blur(60px)",
                  }}
                />
              </div>

              <video
                src="/blaze.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain pointer-events-none"
                style={{
                  imageRendering: "pixelated",
                }}
              />
            </div>
          </div>

          {/* Right Side - About Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Section Title */}
            <div className="space-y-4">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{
                  fontFamily: "'Minecraft', monospace",
                  textShadow: "4px 4px 0 #000000",
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                }}
              >
                ABOUT US
              </h2>
              <div
                className="h-1 w-32 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)",
                }}
              />
            </div>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              style={{
                fontFamily: "'Minecraft', monospace",
                textShadow: "2px 2px 0 #000000",
              }}
            >
              We are the <span className="text-emerald-400">ACM Student Chapter</span> at IIT Mandi — a community of passionate coders, builders, and innovators exploring the frontiers of computing.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4 pt-4">
            {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-300 hover:scale-[1.05]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Clipped card part */}
              <div
                className="group relative overflow-hidden rounded-lg p-4"
                style={{
                  background: "rgba(0, 0, 0, 0.65)",
                  border: "2px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {/* bg hover */}
                <div
                  className="absolute inset-0 opacity-0 scale-110 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    imageRendering: "pixelated",
                  }}
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* text */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </div>
              </div>

              {/* pop out image (escapes panel) */}
              <img
                src={item.img}
                alt=""
                className="
                  pointer-events-none
                  absolute -right-16 -bottom-16
                  w-44
                  opacity-0 translate-y-8 scale-90
                  transition-all duration-300 ease-out
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:scale-110
                "
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;