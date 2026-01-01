import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MinecraftHotbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: "Home", icon: "/bed.svg", path: "/" },
    { name: "Team", icon: "/axe.svg", path: "/team" },
    { name: "Events", icon: "/diamond-helmet.svg", path: "/events" },
    { name: "About", icon: "/ender-eye.svg", path: "#about" },
    { name: "Contact", icon: "/diamond.svg", path: "#contact" },
    { name: "", icon: "" },
    { name: "", icon: "" },
    { name: "", icon: "" },
    { name: "", icon: "" },
    { name: "", icon: "" },
  ];

  useEffect(() => {
    let idx = navItems.findIndex((item) => item.path === location.pathname);

    if (location.hash) {
      const hashIdx = navItems.findIndex((item) => item.path === location.hash);
      if (hashIdx !== -1) idx = hashIdx;
    }

    if (idx !== -1) setActiveIndex(idx);
  }, [location.pathname, location.hash]);

  const handleNavigation = (index) => {
    const item = navItems[index];
    if (!item || !item.path) return;

    if (item.path.startsWith("#")) {
      navigate(`/${item.path}`, { replace: true });
      setTimeout(() => {
        document
          .querySelector(item.path)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 select-none flex flex-col items-center z-900">
      {/* HOVER LABEL */}
      <div className="h-6 mb-2">
        {hoveredIndex !== null && navItems[hoveredIndex].name && (
          <div
            className="text-white text-xl transition-opacity duration-150 ease-out"
            style={{ textShadow: "2px 2px 0px #3f3f3f" }}
          >
            {navItems[hoveredIndex].name}
          </div>
        )}
      </div>

      {/* XP BAR IMAGE */}
      <div className="relative hotbar-xp-bar w-[390px] mt-[16px] mb-1 select-none">
        <img
          src="/xp_bar.png"
          alt="Minecraft XP Bar"
          className="w-full h-auto pointer-events-none"
          style={{ imageRendering: "pixelated" }}
        />
        <span
          className="absolute -top-6 left-1/2 -translate-x-1/2
                    text-[#7CFC00] text-lg font-extrabold"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000",
          }}
        ></span>
      </div>

      {/* HOTBAR */}
      <div className="relative flex items-center bg-[#00000066] border-[4px] border-black p-[1px]">
        <div className="absolute inset-0 flex hotbar-dividers">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-full w-[2px] bg-black/40"
              style={{ marginLeft: "42px" }}
            />
          ))}
        </div>

        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleNavigation(index);
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative hotbar-slot w-[42px] h-[42px] cursor-pointer z-10"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}
          >
            {item.icon && (
              <img
                src={item.icon}
                alt={item.name}
                draggable={false}
                className="hotbar-icon"
                style={{
                  width: "32px",
                  height: "32px",
                  imageRendering: "pixelated",
                  transform: "translateZ(0)",
                  display: "block"
                }} 
              />

            )}
          </div>
        ))}

        {/* SELECTOR */}
        <div
          className="hotbar-selector absolute -top-[5px] -left-[5px] w-[50px] h-[50px] transition-all duration-75 ease-out pointer-events-none"
          style={{ transform: `translateX(${activeIndex * 42}px)` }}
        >
          <div className="absolute inset-0 border-[4px] border-[#FFFFFFEE]" />
          <div className="absolute inset-[2px] border-[2px] border-[#00000088]" />
          <div className="absolute -inset-[2px] border-[2px] border-[#00000044]" />
        </div>
      </div>

      <style jsx global>{`
        body {
          background-image: url("https://www.transparenttextures.com/patterns/dark-matter.png");
          background-color: #4a5a3a;
        }
        * {
          image-rendering: pixelated;
          font-family: "Courier New", Courier, monospace;
        }
      `}</style>

      {/* RESPONSIVE: scale only (NO TRANSLATION) — added without changing any existing lines */}
      <style jsx global>{`
        /* small desktop */
        @media (max-width: 1024px) {
          nav {
            transform: scale(0.95) !important;
            bottom: 14px !important;
          }
        }

        /* tablet / phone */
        @media (max-width: 640px) {
          nav {
            transform: scale(0.85)  !important;
            bottom: 12px !important;
          }
        }

        /* very small phones */
        @media (max-width: 420px) {
          nav {
            transform: scale(0.75)  !important;
            bottom: 8px !important;
          }
        }

        /* very large screens */
        @media (min-width: 1280px) {
          nav {
            transform: scale(1.05)  !important;
          }
        }

        /* make xp-bar narrower on tiny screens */
        @media (max-width: 480px) {
          .hotbar-xp-bar {
            width: 360px !important;
          }
        }

        /* reduce icon & slot sizes on very small screens AND adjust spacing */
        @media (max-width: 480px) {
          .hotbar-icon {
            width: 28px !important;
            height: 28px !important;
            margin: 0 !important;
          }

          .hotbar-slot {
            width: 36px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hotbar-selector {
            width: 44px !important;
            height: 44px !important;
          }

          /* Fix divider spacing */
          .hotbar-dividers > div {
            margin-left: 36px !important;
          }

          /* Fix selector animation to use 36px spacing */
          .hotbar-selector {
            transform: translateX(calc(var(--active-index, 0) * 36px)) !important;
          }
        }
      `}</style>

      <style jsx>{`
        .hotbar-selector {
          --active-index: ${activeIndex};
        }
      `}</style>
    </nav>
  );
};

export default MinecraftHotbar;