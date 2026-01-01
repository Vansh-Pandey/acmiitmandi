import { Calendar, MapPin, Users, Clock } from "lucide-react";
import RotatingCube from "./RotatingCube.jsx";

const categoryTheme = {
  contest: { color: "#ef4444", icon: "⚔️", label: "CONTEST" },
  workshop: { color: "#22d3ee", icon: "🔧", label: "WORKSHOP" },
  session: { color: "#22c55e", icon: "👥", label: "SESSION" },
};

export function EventCard({ 
  title,
  description,
  category,
  delay = 0,
}) {
  const theme = categoryTheme[category];

  return (
    <div
      style={{
        animation: "fadeIn 0.5s ease forwards",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Enchantment particles floating around card */}
      <div className="relative group">
        {/* Floating enchantment symbols */}
        <div
          className="absolute -top-2 -left-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float"
          style={{ fontSize: "20px" }}
        >
          ᚛
        </div>
        <div
          className="absolute -top-2 -right-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float-delayed"
          style={{ fontSize: "20px" }}
        >
          ᚜
        </div>
        <div
          className="absolute -bottom-2 -left-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float-delayed"
          style={{ fontSize: "20px" }}
        >
          ᚑ
        </div>
        <div
          className="absolute -bottom-2 -right-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float"
          style={{ fontSize: "20px" }}
        >
          ᚐ
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 2s ease-in-out infinite 1s;
          }
          
          /* Stone/Cobblestone block texture */
          .block-texture {
            background-image: 
              repeating-linear-gradient(
                90deg,
                rgba(255,255,255,0.03) 0px,
                transparent 1px,
                transparent 4px
              ),
              repeating-linear-gradient(
                0deg,
                rgba(255,255,255,0.03) 0px,
                transparent 1px,
                transparent 4px
              ),
              repeating-linear-gradient(
                45deg,
                rgba(0,0,0,0.05) 0px,
                rgba(0,0,0,0.05) 2px,
                transparent 2px,
                transparent 4px
              );
          }
          
          /* Ore vein effect */
          .ore-vein {
            background-image:
              radial-gradient(circle at 20% 30%, ${theme.color}15 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, ${theme.color}10 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, ${theme.color}08 0%, transparent 60%);
          }
        `}</style>

        <div
          className="relative p-8 transition-all duration-300 rounded-lg group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden block-texture ore-vein"
          style={{
            backgroundColor: "#1f2933",
            border: `4px solid ${theme.color}`,
            boxShadow: `8px 8px 0 rgba(0,0,0,0.6), 0 0 20px ${theme.color}40`,
            fontFamily: "MinecraftRegular, monospace",
            minHeight: "380px",
            backgroundBlendMode: "overlay",
          }}
        >
          {/* Rotating cube decoration */}
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            <div
              style={{ transform: "scale(0.18)", transformOrigin: "top right" }}
            >
              <RotatingCube />
            </div>
          </div>

          {/* Torch glow with flicker effect */}
          <div
            className="absolute top-2 right-2 w-6 h-6"
            style={{
              backgroundColor: theme.color,
              filter: "blur(12px)",
              opacity: 0.6,
              animation: "flicker 3s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes flicker {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 0.8; }
            }
          `}</style>

          {/* Pixel art corner decorationss */}
          <div
            className="absolute top-0 left-0 w-4 h-4"
            style={{
              background: `linear-gradient(135deg, ${theme.color} 0%, ${theme.color} 50%, transparent 50%)`,
            }}
          />
          <div
            className="absolute top-0 right-0 w-4 h-4"
            style={{
              background: `linear-gradient(225deg, ${theme.color} 0%, ${theme.color} 50%, transparent 50%)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-4 h-4"
            style={{
              background: `linear-gradient(45deg, ${theme.color} 0%, ${theme.color} 50%, transparent 50%)`,
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4"
            style={{
              background: `linear-gradient(315deg, ${theme.color} 0%, ${theme.color} 50%, transparent 50%)`,
            }}
          />

          {/* Cracked stone effect on top border */}
          <div className="absolute top-0 left-1/4 w-8 h-1 bg-black/20" />
          <div className="absolute top-0 right-1/3 w-6 h-1 bg-black/15" />

          {/* Category badge with glow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded relative"
            style={{
              border: `2px solid ${theme.color}`,
              backgroundColor: `${theme.color}22`,
              fontSize: "12px",
              boxShadow: `0 0 15px ${theme.color}60`,
              backdropFilter: "blur(4px)",
              fontFamily: "MinecraftRegular, monospace",
            }}
          >
            <span className="text-lg">{theme.icon}</span>
            <span style={{ textShadow: `0 0 5px ${theme.color}` }}>
              {theme.label}
            </span>
          </div>

          {/* Title with glowing text shadow */}
          <h3
            className="mb-4 relative z-10"
            style={{
              fontFamily: "MinecraftRegular, monospace",
              fontSize: "18px",
              color: "#facc15",
              textShadow: "3px 3px 0 #000, 0 0 10px #facc15",
              letterSpacing: "1px",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="mb-5 relative z-10"
            style={{
              fontFamily: "MinecraftRegular, monospace",
              fontSize: "13px",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            {description}
          </p>

          {/* XP bar style divider with notches */}
          <div
            className="relative h-3 bg-black/40 rounded-sm mb-4 overflow-hidden"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="absolute h-full"
              style={{
                width: "75%",
                background: `linear-gradient(90deg, ${theme.color}, ${theme.color}cc)`,
                boxShadow: `0 0 10px ${theme.color}, inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
            />
            {/* XP bar notches */}
            <div className="absolute inset-0 flex items-center">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="h-full w-px bg-black/30"
                  style={{ marginLeft: "10%" }}
                />
              ))}
            </div>
          </div>

          {/* Bottom info with diamond icon */}
          <div className="flex items-center justify-between text-sm relative z-10">
            <div
              className="flex items-center gap-2 px-3 py-1 rounded"
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                border: `1px solid ${theme.color}40`,
              }}
            >
              <span
                style={{
                  color: theme.color,
                  filter: "drop-shadow(0 0 4px currentColor)",
                }}
              >
                💎
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}