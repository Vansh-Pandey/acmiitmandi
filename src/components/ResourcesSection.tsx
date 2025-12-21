import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Video, Code, Download, ExternalLink, Book, Database, GraduationCap, Terminal, Sparkles, Bookmark } from "lucide-react";

const resources = [
  {
    icon: Database,
    title: "Digital Library",
    description: "Access 3+ million computing items. Largest collection in the world.",
    type: "diamond",
    link: "#",
    glow: true
  },
  {
    icon: Book,
    title: "Publications",
    description: "Journals, magazines, and conference proceedings archive.",
    type: "lapis",
    link: "#",
    glow: false
  },
  {
    icon: GraduationCap,
    title: "Learning Center",
    description: "Online courses & tutorials to level up your skills.",
    type: "emerald",
    link: "#",
    glow: true
  },
  {
    icon: Terminal,
    title: "Code Resources",
    description: "Open source projects and developer tools for builders.",
    type: "redstone",
    link: "#",
    glow: false
  },
];

const ResourceCard = ({ 
  resource, 
  index 
}: { 
  resource: typeof resources[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const blockColors = {
    diamond: {
      bg: "#3B5998",
      borderTop: "#55AAFF",
      borderLeft: "#55AAFF",
      borderRight: "#2A4780",
      borderBottom: "#1A3B6B",
      text: "#55FFFF",
      shadow: "#1A3B6B"
    },
    lapis: {
      bg: "#0041FF",
      borderTop: "#4169FF",
      borderLeft: "#4169FF",
      borderRight: "#0030C0",
      borderBottom: "#002080",
      text: "#FFFFFF",
      shadow: "#002080"
    },
    emerald: {
      bg: "#00C957",
      borderTop: "#00FF80",
      borderLeft: "#00FF80",
      borderRight: "#00A040",
      borderBottom: "#008030",
      text: "#FFFFFF",
      shadow: "#008030"
    },
    redstone: {
      bg: "#FF0000",
      borderTop: "#FF5555",
      borderLeft: "#FF5555",
      borderRight: "#C00000",
      borderBottom: "#800000",
      text: "#FFFFFF",
      shadow: "#800000"
    }
  };

  const colors = blockColors[resource.type as keyof typeof blockColors];

  return (
    <motion.a
      ref={ref}
      href={resource.link}
      className="relative group block"
      initial={{ opacity: 0, y: 60, rotateY: 90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        rotateX: 5,
        rotateY: 5
      }}
    >
      {/* Card container with 3D effect */}
      <div 
        className="relative p-6 border-4"
        style={{
          backgroundColor: colors.bg,
          borderTopColor: colors.borderTop,
          borderLeftColor: colors.borderLeft,
          borderRightColor: colors.borderRight,
          borderBottomColor: colors.borderBottom,
        }}
      >
        {/* Inner texture */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        
        {/* Block grid pattern */}
        <div className="absolute inset-2 border-2 border-white/10"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon block */}
          <motion.div
            className={`w-16 h-16 mx-auto mb-6 border-4 flex items-center justify-center relative`}
            style={{
              backgroundColor: colors.bg,
              borderTopColor: colors.borderTop,
              borderLeftColor: colors.borderLeft,
              borderRightColor: colors.borderRight,
              borderBottomColor: colors.borderBottom,
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 360
            }}
            transition={{ duration: 0.5 }}
          >
            <resource.icon size={32} className="drop-shadow-lg" style={{ color: colors.text }} />
            
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2" style={{ backgroundColor: colors.borderBottom }}></div>
            <div className="absolute -top-1 -right-1 w-2 h-2" style={{ backgroundColor: colors.borderBottom }}></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2" style={{ backgroundColor: colors.borderBottom }}></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2" style={{ backgroundColor: colors.borderBottom }}></div>
            
            {resource.glow && (
              <motion.div 
                className="absolute inset-0 border-2"
                style={{ borderColor: colors.text }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Title */}
          <h3 className="font-pixel text-lg mb-4 text-center" style={{ color: colors.text }}>
            <span className="drop-shadow-lg">{resource.title}</span>
          </h3>

          {/* Description */}
          <div className="font-mono text-sm text-white/90 mb-6 leading-relaxed text-center bg-black/20 p-3 border border-white/10">
            {resource.description}
          </div>

          {/* Link button */}
          <div className="flex items-center justify-center gap-2 font-mono text-sm">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-2 px-4 py-2 border-2"
              style={{
                borderTopColor: colors.borderTop,
                borderLeftColor: colors.borderLeft,
                borderRightColor: colors.borderRight,
                borderBottomColor: colors.borderBottom,
                backgroundColor: colors.bg,
                color: colors.text
              }}
            >
              <ExternalLink size={14} />
              <span>Open</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3D Shadow */}
      <div 
        className="absolute -bottom-2 -right-2 w-full h-full -z-10"
        style={{ backgroundColor: colors.shadow }}
      ></div>
      
      {/* Hover glow effect */}
      <motion.div 
        className="absolute inset-0 -z-20 opacity-0 blur-xl"
        style={{ backgroundColor: colors.text }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

const ResourcesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resources" className="relative py-32 bg-gradient-to-b from-[#8B4513] via-[#A0522D] to-[#8B4513] overflow-hidden">
      {/* Minecraft dirt/stone cave background */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #6B4428 2px, transparent 2px),
            radial-gradient(circle at 40% 40%, #835432 3px, transparent 3px),
            radial-gradient(circle at 80% 20%, #52331F 4px, transparent 4px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
          opacity: 0.3
        }}
      />
      
      {/* Glowing ore veins */}
      <motion.div 
        className="absolute left-10 top-1/4 w-32 h-4 bg-[#55FFFF]/20 blur-md"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute right-20 top-1/2 w-48 h-3 bg-[#00FF80]/20 blur-md"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header - Mine entrance style */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Torch */}
          <motion.div 
            className="relative w-12 h-20 mx-auto mb-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-16 bg-[#835432] border-2 border-[#6B4428]"></div>
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-[#FF6B00] to-[#FF4500] rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Mine entrance arch */}
          <div className="relative inline-block mb-10">
            <div className="absolute -inset-4 bg-black/50 blur-xl rounded-lg"></div>
            <div className="relative bg-gradient-to-b from-[#404040] to-[#202020] border-4 border-t-[#606060] border-l-[#606060] border-r-[#303030] border-b-[#101010] px-8 py-6">
              <h2 className="font-pixel text-4xl md:text-5xl mb-4" style={{
                background: "linear-gradient(45deg, #FFD700, #55FFFF, #FF5555)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "3px 3px 0 #000000"
              }}>
                RESOURCES
              </h2>
              <div className="font-mono text-lg text-white/80 bg-black/30 p-3 border border-white/10 max-w-xl mx-auto">
                <span className="text-[#55FF55]"></span> Unlock the treasure chest of computing knowledge
              </div>
            </div>
            
            {/* Mine entrance pillars */}
            <div className="absolute -top-8 -left-8 w-8 h-24 bg-gradient-to-b from-[#606060] via-[#404040] to-[#202020] border-2 border-[#303030]"></div>
            <div className="absolute -top-8 -right-8 w-8 h-24 bg-gradient-to-b from-[#606060] via-[#404040] to-[#202020] border-2 border-[#303030]"></div>
          </div>

          {/* Animated chest */}
          <motion.div 
            className="inline-block mb-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative w-20 h-16 bg-[#C19A6B] border-4 border-t-[#E5C28B] border-l-[#D4B483] border-r-[#A67C52] border-b-[#8B5A2B]">
              <div className="absolute -top-2 left-0 right-0 h-4 bg-[#C19A6B] border-2 border-[#8B5A2B]"></div>
              <div className="absolute inset-1 border-2 border-[#8B5A2B]/30"></div>
              <div className="absolute top-1 left-1 right-1 h-1 bg-[#FFD700]"></div>
              <div className="absolute top-3 left-1 right-1 h-1 bg-[#FFD700]"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Resources grid - Mine shaft style */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Mine shaft torches */}
          <div className="absolute -left-4 top-1/4 w-4 h-12 bg-[#835432] border-2 border-[#6B4428] hidden lg:block"></div>
          <div className="absolute -right-4 top-1/2 w-4 h-12 bg-[#835432] border-2 border-[#6B4428] hidden lg:block"></div>
          
          {/* Mine cart rails between cards */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#808080] hidden lg:block"></div>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#808080] hidden lg:block"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#808080] hidden lg:block"></div>
          
          {resources.map((resource, index) => (
            <ResourceCard key={resource.title} resource={resource} index={index} />
          ))}
        </motion.div>

        {/* Animated mine cart */}
        <motion.div
          className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-12"
          animate={{ x: ["-100px", "calc(100vw + 100px)"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="relative">
            <div className="w-16 h-8 bg-[#C0C0C0] border-2 border-[#A0A0A0] rounded-t-lg">
              <div className="absolute inset-1 border border-[#808080]"></div>
            </div>
            <div className="w-20 h-4 bg-[#404040] mx-auto border-2 border-[#303030]">
              <div className="absolute -top-1 left-2 w-4 h-4 bg-[#808080] rounded-full border-2 border-[#606060]"></div>
              <div className="absolute -top-1 right-2 w-4 h-4 bg-[#808080] rounded-full border-2 border-[#606060]"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom cave floor */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Stone floor */}
        <div className="h-12 bg-gradient-to-b from-[#606060] to-[#404040] border-t-4 border-[#808080]">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-[#505050] last:border-r-0">
                <div className="h-full bg-gradient-to-b from-[#707070] via-[#505050] to-[#303030]"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bedrock layer */}
        <div className="h-6 bg-gradient-to-b from-[#202020] to-[#000000]">
          <div className="grid grid-cols-24 h-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className={`border-r ${i % 2 === 0 ? 'border-[#303030]' : 'border-[#101010]'}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating knowledge particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: [0, 0.8, 0],
              rotate: 360
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          >
            <Bookmark 
              size={16} 
              className={i % 3 === 0 ? "text-[#55FFFF]" : i % 3 === 1 ? "text-[#FFD700]" : "text-[#FF5555]"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;