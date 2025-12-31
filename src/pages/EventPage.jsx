import { useState } from "react";
import { EventCard } from "../components/EventCard";
import MinecraftHotbar from "../components/MinecraftHotbar";
import { PixelDivider } from "../components/PixelDivider";

// ================= DATA SECTION =================
const events = [
  {
    id: 1,
    title: "CODE QUEST",
    description:
      "Code Quest is a competitive programming challenge for second year girls where participants solve algorithmic problems within a fixed time, and top performers are ranked and awarded based on correctness and efficiency.",
    category: "contest",
    org: "ACM-W",
  },
  {
    id: 2,
    title: "LATEX WORKSHOP",
    description:
      "LaTeX Workshop is a hands-on session where participants learn to create professional documents, reports, and resumes using LaTeX, focusing on clean formatting and practical usage.",
    category: "workshop",
    org: "ACM",
  },
  {
    id: 3,
    title: "ALGO HACK",
    description:
      "Algo Hack is a challenge where participants analyze a given algorithm and create test cases that make it fail. The goal is to spot edge cases, hidden bugs, and logical flaws — not to write code, but to break it intelligently.",
    category: "contest",
    org: "ACM-W",
  },
  {
    id: 4,
    title: "INTERNSHIP GUIDANCE",
    description:
      "Internship Guidance is an interactive session focused on navigating internship applications, building strong profiles, and preparing effectively for interviews and selection processes.",
    category: "session",
    org: "ACM-W",
  },
  {
    id: 5,
    title: "COMPETITIVE PROGRAMMING INTRODUCTION",
    description:
      "Competitive Programming Introduction is a beginner-friendly session that covers core problem-solving techniques, common algorithms, and strategies to get started with competitive coding contests.",
    category: "workshop",
    org: "ACM",
  },
  {
    id: 6,
    title: "MATLAB AND  RESEARCH METHODOLOGY WORKSHOP ",
    description:
      "MATLAB and Research Methodology Workshop is a practical session on using MATLAB for data analysis and simulations, along with an introduction to structuring, conducting, and documenting academic research effectively.",
    category: "workshop",
    org: "ACM",
  },
  {
    id: 7,
    title: "ICPC PRELIMS",
    description:
      "ICPC Prelims Session is a focused practice and guidance session to help participants understand the contest format, solve representative problems, and prepare strategically for the ICPC preliminary round.",
    category: "session",
    org: "ACM",
  },
  {
    id: 8,
    title: "CLASH OF CODES",
    description:
      "Clash of Codes is a beginner-friendly competitive coding challenge for first-year girls, designed to build confidence in problem-solving through approachable questions and a supportive contest environment, with winners recognized and awarded.",
    category: "contest",
    org: "ACM-W",
  },
  {
    id: 9,
    title: "PUZZLE PIT",
    description:
      "This is a python-based , puzzle format coding contest designed for first year girls to learn programming concepts and apply them in a fun and interactive way",
    category: "contest",
    org: "ACM-W",
  },
  {
    id: 10,
    title: "GIT-HERO",
    description:
      "Git Hero is a hands-on challenge where participants solve practical tasks using Git and GitHub, testing their version control skills through real-world scenarios.",
    category: "contest",
    org: "ACM",
  },
  {
    id: 11,
    title: "ICPC-PRELIMS",
    description:
      "ICPC Prelims Conduction is the official preliminary round where teams compete by solving algorithmic problems to qualify for the next stage of the ICPC contest.",
    category: "contest",
    org: "ACM",
  },
];

const filterItems = [
  { icon: "🎮", label: "ALL" },
  { icon: "⚔️", label: "CONTEST" },
  { icon: "🔧", label: "WORKSHOP" },
  { icon: "👥", label: "SESSION" },
];

const categoryMap = {
  0: null,
  1: "contest",
  2: "workshop",
  3: "session",
};

const ParticleOverlay = () => {
  const particles = Array.from({ length: 45 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[15] overflow-hidden">
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(110vh) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 0.35;
          }
          70% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>

      {particles.map((_, i) => {
        const size = Math.random() * 2 + 3;
        const duration = Math.random() * 20 + 18;
        const delay = Math.random() * 20;

        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: 0, // anchor to viewport
              background: "#facc15",
              boxShadow: "0 0 10px rgba(250,204,21,0.45)",
              filter: "blur(0.6px)",
              animation: `floatUp ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};


// ================= MAIN COMPONENT =================

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  const filteredEvents = events.filter((event) => {
    if (selectedFilter === 0) return true;
    return event.category === categoryMap[selectedFilter];
  });

  const acmEvents = filteredEvents.filter((e) => e.org === "ACM");
  const acmWEvents = filteredEvents.filter((e) => e.org === "ACM-W");

  const SectionHeader = ({ title, glowColor, borderColor, textColor }) => (
    <div className="flex flex-col items-center mb-10 mt-16">
      <div className="flex gap-16 mb-[-4px]">
        <div className="pixel-chain" />
        <div className="pixel-chain" />
      </div>

      <div className="flex items-center w-full gap-4">
        <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent to-yellow-600 opacity-20" />
        <div className="relative">
          <div
            className={`absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 ${borderColor}`}
          />
          <div
            className={`absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 ${borderColor}`}
          />
          <div
            className="px-10 py-3 bg-[#11071d] border-2 border-[#a16207] shadow-[6px_6px_0px_rgba(0,0,0,0.8)]"
            style={{ boxShadow: `0 0 20px ${glowColor}15` }}
          >
            <h2 className={`text-xl tracking-[5px] font-bold ${textColor}`}>
              {title}
            </h2>
          </div>
        </div>
        <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent to-yellow-600 opacity-20" />
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        fontFamily: "MinecraftRegular, monospace",
        color: "#f8fafc",
        backgroundColor: "#080a0f",
      }}
    >
      <div className="fixed inset-0 bedrock-bg pointer-events-none z-0" /> 

      <div className="relative z-10">
        <div className="relative h-[60vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/minecraft-gold-purple.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.25) saturate(0.8)",
              zIndex: 0,
            }}
          />

          <div
            className="absolute inset-0 animate-pulse pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 40%, rgba(250,204,21,0.1) 0%, transparent 60%)`,
              filter: "blur(60px)",
              zIndex: 1,
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #080a0f)",
              zIndex: 2,
            }}
          />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <header className="mb-8 relative inline-block">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-yellow-500" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-yellow-500" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-yellow-500" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-yellow-500" />

              <div className="px-16 py-8 bg-black/60 border-4 border-[#a16207]">
                <h1
                  className="text-6xl mb-1 text-[#facc15]"
                  style={{ textShadow: "4px 4px 0px #714304" }}
                >
                  EVENTS
                </h1>
              </div>
            </header>

            <div className="flex flex-col items-center">
              <PixelDivider />
              <div className="mt-10 transition-transform hover:scale-105 duration-300">
                <MinecraftHotbar
                  items={filterItems}
                  selectedIndex={selectedFilter}
                  onSelect={setSelectedFilter}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden -mt-12">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
        linear-gradient(
          to bottom,
          #07080d 0%,
          #0a0c12 14%,
          rgba(18, 6, 31, 0.92) 28%,
          rgba(26, 11, 46, 0.78) 46%,
          rgba(26, 11, 46, 0.72) 60%,
          rgba(14, 6, 22, 0.88) 78%,
          #05070c 100%
        ),
        radial-gradient(
          circle at 50% 52%,
          rgba(250,204,21,0.22),
          rgba(250,204,21,0.12) 30%,
          transparent 62%
        ),
        radial-gradient(
          circle at 28% 50%,
          rgba(168,85,247,0.14),
          transparent 68%
        ),
        radial-gradient(
          circle at 72% 48%,
          rgba(250,204,21,0.10),
          transparent 70%
        )
      `,
              zIndex: 0,
            }}
          />

          {acmEvents.length > 0 && (
            <section className="relative z-10 container mx-auto px-4 pt-16">
              <SectionHeader
                title="ACM CHAPTER"
                glowColor="#facc15"
                borderColor="border-yellow-500"
                textColor="text-yellow-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {acmEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="group hover:-translate-y-2 transition-all duration-300"
                  >
                    <EventCard {...event} delay={index * 100} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {acmWEvents.length > 0 && (
            <section className="relative z-10 container mx-auto px-4 mt-24 pb-24">
              <SectionHeader
                title="ACM-W CHAPTER"
                glowColor="#a855f7"
                borderColor="border-purple-500"
                textColor="text-purple-400"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {acmWEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="group hover:-translate-y-2 transition-all duration-300"
                  >
                    <EventCard {...event} delay={index * 100} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}