import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, value: "100K+", label: "Members Worldwide" },
  { icon: Globe, value: "170+", label: "Countries" },
  { icon: Award, value: "1947", label: "Founded" },
  { icon: BookOpen, value: "50+", label: "Publications" },
];

const StatBlock = ({ 
  stat, 
  index 
}: { 
  stat: typeof stats[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 40, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4, rotate: 1 }}
    >
      {/* Minecraft-style block with beveled edges */}
      <div className="minecraft-block bg-[#7B9E5C] border-4 border-[#5C7D3E] border-t-[#A2D149] border-l-[#8BC34A] border-r-[#5C7D3E] border-b-[#4A6939] p-6 text-center relative">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#5C7D3E]"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#5C7D3E]"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#4A6939]"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#4A6939]"></div>
        
        <div className="w-12 h-12 bg-[#835432] border-4 border-[#6B4428] border-t-[#A8642C] border-l-[#935E2A] border-r-[#6B4428] border-b-[#52331F] mx-auto mb-4 flex items-center justify-center">
          <stat.icon size={24} className="text-[#FFD700]" />
        </div>
        <div className="font-pixel text-2xl md:text-3xl text-[#FFD700] mb-2 text-shadow">
          {stat.value}
        </div>
        <div className="font-mono text-sm text-[#FFFFFF]">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-[#8B8B8B] overflow-hidden">
      {/* Minecraft dirt pattern background */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16L24 8l8 16-8 8-16-8zm32 0l16-8-8 16-8 8-16-8 8-16zM8 48l16-8 8 8-16 8-8-8zm32 0l16-8 8 8-16 8-8-8z' fill='%235C4033' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Minecraft grass top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#7B9E5C]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with Minecraft-style title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-6">
            {/* Minecraft sword icon */}
            <motion.div 
              className="relative w-20 h-20 mx-auto mb-4"
              animate={{ rotateZ: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-[#C0C0C0]"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-10 bg-[#404040]"></div>
              <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-[#C0C0C0]"></div>
            </motion.div>
            
            <div className="w-24 h-4 bg-[#835432] border-2 border-[#6B4428] mb-1 mx-auto" />
            <div className="w-24 h-8 bg-[#7B9E5C] border-2 border-[#5C7D3E] mx-auto" />
          </div>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-[#000000] blur-sm opacity-50"></div>
            <h2 className="section-title font-pixel relative text-4xl md:text-5xl text-[#FFD700] mb-4 px-4 py-2 border-4 border-[#835432] bg-[#5C4033]">
              ABOUT ACM
            </h2>
          </div>
          <p className="font-mono text-[#FFFFFF] max-w-2xl mx-auto mt-6 px-4 py-3 bg-[#404040]/80 border-2 border-[#505050]">
            <span className="text-[#55FF55]"></span> The Association for Computing Machinery is the world's largest educational 
            and scientific computing society, delivering resources that advance computing 
            as a science and profession.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatBlock key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* About content */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Minecraft block grid */}
          <div className="relative flex justify-center">
            <motion.div
              className="grid grid-cols-3 gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Different Minecraft block types */}
              {[
                { color: "#7B9E5C", border: "#5C7D3E", type: "grass" }, // Grass
                { color: "#835432", border: "#6B4428", type: "wood" }, // Wood
                { color: "#404040", border: "#202020", type: "stone" }, // Stone
                { color: "#FFFF00", border: "#C0C000", type: "gold" }, // Gold
                { color: "#3B5998", border: "#2A4780", type: "diamond" }, // Diamond (ACM blue)
                { color: "#A52A2A", border: "#8B1A1A", type: "redstone" }, // Redstone
                { color: "#808080", border: "#606060", type: "iron" }, // Iron
                { color: "#32CD32", border: "#228B22", type: "emerald" }, // Emerald
                { color: "#800080", border: "#600060", type: "amethyst" }, // Amethyst
              ].map((block, i) => (
                <motion.div
                  key={i}
                  className={`w-16 h-16 md:w-20 md:h-20 border-4 ${i === 4 ? "border-t-[#55AAFF] border-l-[#55AAFF] border-r-[#3B5998] border-b-[#2A4780]" : `border-t-[${block.color}] border-l-[${block.color}] border-r-[${block.border}] border-b-[${block.border}]`} minecraft-shadow relative`}
                  style={{
                    backgroundColor: block.color,
                    borderTopColor: block.color,
                    borderLeftColor: block.color,
                    borderRightColor: block.border,
                    borderBottomColor: block.border,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                >
                  {/* Block texture effect */}
                  <div className="absolute inset-0 opacity-20 bg-gradient-gradient-to-br from-transparent via-black/10 to-transparent"></div>
                  {i === 4 && ( // Diamond block sparkle
                    <motion.div 
                      className="absolute inset-0"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white"></div>
                      <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white"></div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Floating Minecraft pickaxe */}
            <motion.div
              className="absolute -right-4 top-1/2 transform -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-12 h-12">
                <div className="w-2 h-6 bg-[#C0C0C0] mx-auto"></div>
                <div className="w-6 h-4 bg-[#404040] -mt-1 mx-auto"></div>
                <div className="w-8 h-2 bg-[#C0C0C0] -mt-1 mx-auto"></div>
              </div>
            </motion.div>
          </div>

          {/* Minecraft sign-style content */}
          <div className="space-y-6">
            <div className="relative">
              {/* Minecraft sign post */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-[#835432] border-2 border-[#6B4428]"></div>
              
              <div className="minecraft-sign bg-[#F0E68C] border-4 border-[#8B7355] border-t-[#FFEAA8] border-l-[#FFEAA8] border-r-[#8B7355] border-b-[#6B5D4F] p-6 ml-4">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#FF0000] mr-2"></div>
                  <h3 className="font-pixel text-lg text-[#8B0000]">Our Mission</h3>
                </div>
                <p className="font-mono text-[#000000]">
                  ACM brings together computing educators, researchers, and professionals 
                  to inspire dialogue, share resources, and address the field's challenges.
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Minecraft torch */}
              <motion.div 
                className="absolute -left-2 top-4 w-4 h-8"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="w-2 h-4 bg-[#835432] mx-auto"></div>
                <div className="w-4 h-4 bg-[#FF6B00] rounded-full -mt-2"></div>
              </motion.div>
              
              <div className="minecraft-sign bg-[#98FB98] border-4 border-[#5C7D3E] border-t-[#A2D149] border-l-[#A2D149] border-r-[#5C7D3E] border-b-[#4A6939] p-6 ml-6">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#FFD700] mr-2"></div>
                  <h3 className="font-pixel text-lg text-[#8B8000]">Our Vision</h3>
                </div>
                <p className="font-mono text-[#000000]">
                  To advance computing as a science and a profession, develop technical 
                  standards, and promote policies that benefit society.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Minecraft bedrock */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#202020] border-t-4 border-[#404040]">
        <div className="flex">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-1 h-full border-r-2 border-[#404040] last:border-r-0">
              <div className="h-1/2 bg-[#303030]"></div>
              <div className="h-1/2 bg-[#101010]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles (like Minecraft enchantment particles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#55FFFF]"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: '100vh',
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: '-10vh',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;