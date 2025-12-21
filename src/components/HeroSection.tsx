import { motion } from "framer-motion";
import { ChevronDown, Pickaxe, Gem, Box, Sword, Cpu, Network, Sparkles } from "lucide-react";



const MinecraftBlock = ({
  type = "grass",
  size = "md",
  icon: Icon,
  sparkle = false
}: {
  type?: "grass" | "dirt" | "stone" | "diamond" | "gold" | "iron" | "emerald" | "redstone" | "obsidian" | "lapis";
  size?: "sm" | "md" | "lg";
  icon?: React.ComponentType<{ size?: number | string; className?: string }>;
  sparkle?: boolean;
}) => {
  const sizes = {
    sm: "w-10 h-10 md:w-12 md:h-12",
    md: "w-14 h-14 md:w-16 md:h-16",
    lg: "w-20 h-20 md:w-24 md:h-24"
  };

  const blockColors = {
    grass: {
      bg: "#7B9E5C",
      borderTop: "#A2D149",
      borderLeft: "#8BC34A",
      borderRight: "#5C7D3E",
      borderBottom: "#4A6939",
      text: "#FFD700"
    },
    dirt: {
      bg: "#835432",
      borderTop: "#A8642C",
      borderLeft: "#935E2A",
      borderRight: "#6B4428",
      borderBottom: "#52331F",
      text: "#FFFFFF"
    },
    stone: {
      bg: "#808080",
      borderTop: "#A0A0A0",
      borderLeft: "#909090",
      borderRight: "#606060",
      borderBottom: "#404040",
      text: "#FFFFFF"
    },
    diamond: {
      bg: "#3B5998",
      borderTop: "#55AAFF",
      borderLeft: "#55AAFF",
      borderRight: "#2A4780",
      borderBottom: "#1A3B6B",
      text: "#55FFFF"
    },
    gold: {
      bg: "#FFD700",
      borderTop: "#FFFF55",
      borderLeft: "#FFFF55",
      borderRight: "#C0A000",
      borderBottom: "#A08000",
      text: "#000000"
    },
    iron: {
      bg: "#D8D8D8",
      borderTop: "#F0F0F0",
      borderLeft: "#E8E8E8",
      borderRight: "#A0A0A0",
      borderBottom: "#808080",
      text: "#000000"
    },
    emerald: {
      bg: "#00C957",
      borderTop: "#00FF80",
      borderLeft: "#00FF80",
      borderRight: "#00A040",
      borderBottom: "#008030",
      text: "#FFFFFF"
    },
    redstone: {
      bg: "#FF0000",
      borderTop: "#FF5555",
      borderLeft: "#FF5555",
      borderRight: "#C00000",
      borderBottom: "#800000",
      text: "#FFFFFF"
    },
    obsidian: {
      bg: "#2C2C5C",
      borderTop: "#3C3C8C",
      borderLeft: "#3C3C8C",
      borderRight: "#1C1C3C",
      borderBottom: "#0C0C1C",
      text: "#AA00AA"
    },
    lapis: {
      bg: "#0041FF",
      borderTop: "#4169FF",
      borderLeft: "#4169FF",
      borderRight: "#0030C0",
      borderBottom: "#002080",
      text: "#FFFFFF"
    }
  };

  const colors = blockColors[type];

  return (
    <motion.div
      className={`${sizes[size]} relative minecraft-block-3d cursor-pointer`}
      whileHover={{
        scale: 1.1,
        rotateZ: 10,
        transition: { type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.9 }}
    >


      <div
        className="absolute  inset-0 border-4"
        style={{
          backgroundColor: colors.bg,
          borderTopColor: colors.borderTop,
          borderLeftColor: colors.borderLeft,
          borderRightColor: colors.borderRight,
          borderBottomColor: colors.borderBottom,
        }}
      >
        {/* Block texture pattern */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>

        {/* Block grid pattern */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="opacity-10 bg-black"
              style={{
                backgroundColor: i % 2 === 0 ? colors.borderBottom : colors.borderTop
              }}
            />
          ))}
        </div>


        {Icon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              size={size === "lg" ? 32 : size === "md" ? 24 : 16}
              className="drop-shadow-lg"
              style={{ color: colors.text }}
            />
          </div>
        )}
      </div>



      {sparkle && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full"></div>
        </motion.div>
      )}

      {/* Block shadow */}
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/30 -z-10 rounded"></div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-[#7EC0EE] via-[#7EC0EE] to-[#5C94C5]">
      {/* Minecraft Sky with clouds */}
     <div className="absolute inset-0 bg-gradient-to-b from-[#7EC0EE] via-[#87CEEB] to-[#5C94C5]" />
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 md:w-24 md:h-24 bg-[#FFD700] rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          rotate: 360
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="absolute inset-4 bg-[#FFA500] rounded-full"></div>
      </motion.div>

      {/* Minecraft Character */}
      <motion.div
        className="absolute left-4 md:left-8 bottom-32 md:bottom-40 z-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, type: "spring" }}
      >
        <div className="relative">
          {/* Character Body (8x8 Minecraft style) */}
          <div className="w-16 h-24 md:w-20 md:h-32 relative">
            {/* Head (8x8) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#FFD7B5] border-2 border-[#D4A574]">
              {/* Face */}
              <div className="absolute top-1 left-2 w-1 h-1 md:w-2 md:h-2 bg-[#1A1A1A]"></div> {/* Left Eye */}
              <div className="absolute top-1 right-2 w-1 h-1 md:w-2 md:h-2 bg-[#1A1A1A]"></div> {/* Right Eye */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-[#1A1A1A]"></div> {/* Mouth */}
              
              {/* Hair */}
              <div className="absolute -top-1 left-0 w-full h-2 bg-[#3C2F23]"></div>
            </div>

            {/* Body (8x12) */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-12 md:w-10 md:h-16 bg-[#3C6EB4] border-2 border-[#2A4780]">
              {/* Shirt Details */}
              <div className="absolute top-0 left-0 w-full h-4 bg-[#4A7FD1]"></div> {/* Collar */}
              <div className="absolute top-4 left-1 w-1 h-6 bg-[#2A4780]"></div> {/* Button */}
            </div>

            {/* Left Arm */}
               <motion.div
        className="absolute top-10 -left-1 w-2 h-12 md:w-3 md:h-12 bg-[#3C6EB4] border border-[#2A4780]"
        style={{
          transformOrigin: "top center" // Rotate from shoulder
        }}
        animate={{ 
          rotate: [0, 5, -5] // Gentle swing
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

            {/* Right Arm - Pointing */}
               <motion.div
        className="absolute top-10 -right-1 w-2 h-12 md:w-3 md:h-12 bg-[#3C6EB4] border border-[#2A4780]"
        style={{
          transformOrigin: "top center" 
        }}
        animate={{ 
          rotate: [0, -5 , 5], 
         
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut"
        }}
      >
              {/* Pointing Finger */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-[#FFD7B5]"></div>
            </motion.div>

            {/* Legs */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1">
              <div className="w-3 h-8 md:w-4 md:h-12 bg-[#2A4780] border border-[#1A3B6B]"></div>
              <div className="w-3 h-8 md:w-4 md:h-12 bg-[#2A4780] border border-[#1A3B6B]"></div>
            </div>

            {/* Speech Bubble */}
            <motion.div
              className="absolute -top-20 -right-4 md:-top-24 md:-right-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <div className="relative bg-white border-4 border-[#404040] rounded-lg p-3 md:p-4">
                <div className="font-pixel text-xs md:text-sm text-black">
                  Check out ACM!
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-r-4 border-b-4 border-[#404040] transform rotate-45"></div>
              </div>
            </motion.div>
          </div>

          {/* Character Shadow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/30 blur-sm rounded-full"></div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated ACM Logo block */}
          <motion.div
            className="inline-block mb-8 relative"
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            whileHover={{ scale: 1.05, rotateY: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative">
              {/* Pointing line from character to ACM */}
              <motion.div
                className="absolute left-0 top-1/2 w-32 md:w-48 h-0.5 bg-gradient-to-r from-[#55FFFF]/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{ transformOrigin: "left center" }}
              />
              
              {/* 3D Block effect */}
              <div className="w-28 h-28 md:w-36 md:h-36 bg-[#3B5998] border-4 border-t-[#55AAFF] border-l-[#55AAFF] border-r-[#2A4780] border-b-[#1A3B6B] block-shadow-lg mx-auto flex items-center justify-center relative">
                {/* Block faces */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#2A4780]"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#2A4780]"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#1A3B6B]"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#1A3B6B]"></div>

                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 border-4 border-[#55FFFF]/30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="font-pixel text-3xl md:text-4xl text-[#55FFFF] drop-shadow-lg relative z-10">
                  ACM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Title with Minecraft font effect */}
          <motion.h1
            className="font-pixel text-3xl sm:text-4xl md:text-6xl text-[#FFFFFF] mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-[#55FFFF] via-[#FFD700] to-[#FF5555] bg-clip-text text-transparent">
              ASSOCIATION FOR
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-[#FF5555] via-[#FFD700] to-[#55FFFF] bg-clip-text text-transparent">
              COMPUTING MACHINERY
            </span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            className="font-mono text-lg md:text-2xl text-[#FFFFFF]/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <div className="inline-flex items-center bg-[#000000]/40 px-4 py-3 rounded border-2 border-[#404040]">
              <span className="text-[#55FF55] mr-2"></span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                className="overflow-hidden whitespace-nowrap"
              >
                Advancing computing as a science and profession
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1"
              >
                _
              </motion.span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#join"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Minecraft button with depth */}
              <div className="px-8 py-4 bg-[#7B9E5C] border-4 border-t-[#A2D149] border-l-[#8BC34A] border-r-[#5C7D3E] border-b-[#4A6939] text-[#FFFFFF] font-pixel text-lg md:text-xl cursor-pointer minecraft-btn-shadow">
                <span className="drop-shadow-lg">JOIN ACM</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-full h-full bg-[#4A6939] -z-10"></div>
            </motion.a>

            <motion.a
              href="#about"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="px-8 py-4 bg-[#835432] border-4 border-t-[#A8642C] border-l-[#935E2A] border-r-[#6B4428] border-b-[#52331F] text-[#FFFFFF] font-pixel text-lg md:text-xl cursor-pointer minecraft-btn-shadow">
                <span className="drop-shadow-lg">EXPLORE</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-full h-full bg-[#52331F] -z-10"></div>
            </motion.a>
          </motion.div>
        </motion.div>

       
       
      </div>

      {/* Minecraft landscape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Grass layer */}
        <motion.div
          className="h-6 bg-[#4a6f28]"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Grass tufts */}
          <div className="absolute -top-2 left-1/4 w-8 h-4 bg-[#7B9E5C] clip-path-grass"></div>
          <div className="absolute -top-3 left-1/2 w-12 h-6 bg-[#7B9E5C] clip-path-grass"></div>
          <div className="absolute -top-2 right-1/4 w-8 h-4 bg-[#7B9E5C] clip-path-grass"></div>
        </motion.div>

        {/* Dirt layer */}
        <motion.div
          className="h-12 bg-gradient-to-b from-[#835432] to-[#6B4428]"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Stone ores */}
          <div className="absolute top-4 left-[15%] w-8 h-8 bg-[#808080] border-2 border-[#606060]"></div>
          <div className="absolute top-6 right-[20%] w-12 h-6 bg-[#404040] border-2 border-[#202020]"></div>
          <div className="absolute bottom-2 left-[40%] w-10 h-4 bg-[#D8D8D8] border-2 border-[#A0A0A0]"></div>
        </motion.div>

        {/* Bedrock layer */}
        <motion.div
          className="h-6 bg-gradient-to-b from-[#404040] to-[#202020]"
          initial={{ y: 60 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-[#303030] last:border-r-0">
                <div className="h-1/2 bg-[#505050]"></div>
                <div className="h-1/2 bg-[#303030]"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? "#55FFFF" : i % 3 === 1 ? "#FFD700" : "#FF5555",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 0],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

