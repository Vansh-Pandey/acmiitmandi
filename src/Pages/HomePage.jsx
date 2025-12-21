import React from 'react';

// ============================================================
// MINECRAFT-THEMED HERO PAGE FOR ACM IIT MANDI
// All styles are inline - no external CSS dependencies
// ============================================================

// External image URLs for Minecraft assets
const ASSETS = {
  steve: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/45/Steve_%28skin%29_JE5.png',
  cloud: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Cloud.png',
  tree: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/Oak_Tree.png',
  cow: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/84/Cow_JE5_BE3.png',
  grass: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9a/Grass_Block_JE7_BE6.png',
  sun: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6f/Sun_JE2_BE2.png',
  acmLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg',
};

// ============================================================
// STYLES OBJECT - All CSS as inline styles
// ============================================================
const styles = {
  // Container
  container: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    fontFamily: "'Press Start 2P', cursive",
  },

  // Sky gradient background
  sky: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, #87CEEB 0%, #5BB5E8 40%, #4AA3D4 70%, #3D8BC2 100%)',
  },

  // Sun
  sun: {
    position: 'absolute',
    top: '40px',
    right: '80px',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(135deg, #FFEB3B 0%, #FFC107 50%, #FF9800 100%)',
    imageRendering: 'pixelated',
    animation: 'sunGlow 4s ease-in-out infinite',
    boxShadow: '0 0 60px 20px rgba(255, 200, 50, 0.5)',
  },

  // Navbar
  navbar: {
    position: 'relative',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 32px',
    background: 'linear-gradient(90deg, #2d5a27 0%, #3d7a35 50%, #2d5a27 100%)',
    borderBottom: '6px solid #1a3d15',
    boxShadow: 'inset 0 2px 0 0 rgba(255,255,255,0.15), 0 4px 8px rgba(0,0,0,0.3)',
  },

  navLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  logoBox: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    imageRendering: 'pixelated',
    boxShadow: 'inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.2)',
  },

  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },

  navLink: {
    color: 'white',
    fontSize: '10px',
    textDecoration: 'none',
    textShadow: '2px 2px 0 rgba(0,0,0,0.5)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },

  // Minecraft button style
  mcButton: {
    padding: '12px 24px',
    fontSize: '11px',
    color: 'white',
    background: 'linear-gradient(180deg, #7a7a7a 0%, #5a5a5a 50%, #3a3a3a 100%)',
    border: 'none',
    cursor: 'pointer',
    textShadow: '2px 2px 0 rgba(0,0,0,0.5)',
    boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.4), inset 4px 4px 0 rgba(255,255,255,0.2), 0 4px 0 #222',
    transition: 'all 0.1s ease',
    imageRendering: 'pixelated',
    fontFamily: "'Press Start 2P', cursive",
  },

  mcButtonGreen: {
    background: 'linear-gradient(180deg, #5b8731 0%, #4a6d28 50%, #3a5520 100%)',
    boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.4), inset 4px 4px 0 rgba(255,255,255,0.2), 0 4px 0 #2a3f18',
  },

  mcButtonOrange: {
    background: 'linear-gradient(180deg, #c77c3e 0%, #a55d2a 50%, #8b4513 100%)',
    boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.4), inset 4px 4px 0 rgba(255,255,255,0.2), 0 4px 0 #5a2d0a',
  },

  // Hero content
  heroContent: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 250px)',
    padding: '20px',
    textAlign: 'center',
  },

  // ACM Book logo
  bookContainer: {
    animation: 'float 3s ease-in-out infinite',
    marginBottom: '24px',
  },

  book: {
    position: 'relative',
    width: '120px',
    height: '140px',
    background: 'linear-gradient(135deg, #0066b2 0%, #004d8c 50%, #003366 100%)',
    border: '4px solid #002244',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '-8px 0 0 #001a33, inset 4px 4px 0 rgba(255,255,255,0.2), inset -4px -4px 0 rgba(0,0,0,0.3)',
    imageRendering: 'pixelated',
  },

  bookText: {
    color: '#00d4ff',
    fontSize: '20px',
    textShadow: '0 0 10px #00d4ff, 2px 2px 0 rgba(0,0,0,0.5)',
  },

  // Main title
  title: {
    marginBottom: '16px',
    lineHeight: 1.4,
  },

  titleLine: (color, size = '32px') => ({
    display: 'block',
    fontSize: size,
    color: color,
    textShadow: `4px 4px 0 rgba(0,0,0,0.5), 0 0 20px ${color}40`,
    marginBottom: '8px',
    letterSpacing: '2px',
  }),

  // Subtitle box
  subtitleBox: {
    background: 'linear-gradient(90deg, rgba(45, 90, 39, 0.95) 0%, rgba(61, 122, 53, 0.95) 50%, rgba(45, 90, 39, 0.95) 100%)',
    border: '4px solid #1a3d15',
    padding: '16px 32px',
    maxWidth: '600px',
    margin: '16px auto',
    boxShadow: 'inset 2px 2px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.3)',
  },

  subtitle: {
    color: 'white',
    fontSize: '10px',
    textShadow: '2px 2px 0 rgba(0,0,0,0.5)',
    margin: 0,
    lineHeight: 1.8,
  },

  // IIT Mandi badge
  badge: {
    marginTop: '20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    border: '3px solid #0f3460',
    padding: '10px 24px',
    boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
  },

  badgeText: {
    color: '#00d4ff',
    fontSize: '12px',
    textShadow: '0 0 10px #00d4ff',
    margin: 0,
  },

  // CTA buttons container
  ctaContainer: {
    display: 'flex',
    gap: '20px',
    marginTop: '32px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  // Cloud
  cloud: {
    position: 'absolute',
    zIndex: 5,
    display: 'flex',
    imageRendering: 'pixelated',
  },

  cloudPart: (size) => ({
    width: size,
    height: size * 0.7,
    background: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }),

  // Minecraft Steve character
  steveContainer: {
    position: 'absolute',
    bottom: '140px',
    left: '60px',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  speechBubble: {
    background: 'white',
    border: '3px solid #333',
    padding: '10px 14px',
    marginBottom: '8px',
    position: 'relative',
    boxShadow: '3px 3px 0 rgba(0,0,0,0.2)',
  },

  speechText: {
    fontSize: '8px',
    color: '#333',
    margin: 0,
    lineHeight: 1.6,
  },

  speechPointer: {
    position: 'absolute',
    bottom: '-10px',
    left: '20px',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '10px solid #333',
  },

  speechPointerInner: {
    position: 'absolute',
    bottom: '-6px',
    left: '22px',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '8px solid white',
  },

  // Pixel art Steve (CSS-based)
  steve: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    imageRendering: 'pixelated',
  },

  steveHead: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(180deg, #8B4513 0% 20%, #DEB887 20%)',
    border: '2px solid #654321',
    position: 'relative',
  },

  steveBody: {
    width: '40px',
    height: '48px',
    background: 'linear-gradient(180deg, #00CED1 0%, #008B8B 100%)',
    border: '2px solid #006666',
    marginTop: '-2px',
  },

  steveLegs: {
    display: 'flex',
    marginTop: '-2px',
  },

  steveLeg: {
    width: '18px',
    height: '24px',
    background: 'linear-gradient(180deg, #1E3A5F 0%, #0D1B2A 100%)',
    border: '2px solid #0a1420',
  },

  // Trees
  tree: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    imageRendering: 'pixelated',
  },

  treeLeaves: (size = 1) => ({
    width: `${60 * size}px`,
    height: `${50 * size}px`,
    background: 'linear-gradient(180deg, #228B22 0%, #2E8B2E 50%, #1E6B1E 100%)',
    border: `${3 * size}px solid #145214`,
    boxShadow: 'inset 2px 2px 0 rgba(255,255,255,0.2)',
  }),

  treeTrunk: (size = 1) => ({
    width: `${20 * size}px`,
    height: `${40 * size}px`,
    background: 'linear-gradient(90deg, #8B4513 0%, #654321 50%, #4a3520 100%)',
    border: `${2 * size}px solid #3d2817`,
    marginTop: `-${5 * size}px`,
  }),

  // Ground/Landscape
  landscape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  grassLayer: {
    height: '50px',
    background: 'linear-gradient(180deg, #5b8731 0%, #4a6d28 30%, #3d5a20 100%)',
    borderTop: '8px solid #77ab40',
    position: 'relative',
    overflow: 'hidden',
  },

  dirtLayer: {
    height: '80px',
    background: 'linear-gradient(180deg, #8B5A2B 0%, #6d4520 40%, #4a3520 100%)',
    position: 'relative',
    overflow: 'hidden',
  },

  dirtTexture: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    background: '#5a4020',
    opacity: 0.4,
  },

  stoneLayer: {
    height: '30px',
    background: 'linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)',
  },

  // Ore decorations
  ore: (type) => ({
    position: 'absolute',
    width: '32px',
    height: '32px',
    background: '#555',
    border: '2px solid #333',
    imageRendering: 'pixelated',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '4px',
  }),

  oreDot: (color) => ({
    width: '8px',
    height: '8px',
    background: color,
    boxShadow: `0 0 4px ${color}`,
  }),

  // Water pool
  water: {
    position: 'absolute',
    bottom: '130px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150px',
    height: '20px',
    background: 'linear-gradient(180deg, rgba(64, 164, 223, 0.8) 0%, rgba(30, 120, 180, 0.9) 100%)',
    border: '3px solid rgba(20, 80, 140, 0.8)',
    boxShadow: 'inset 0 -4px 8px rgba(255,255,255,0.3)',
    animation: 'waterShimmer 2s ease-in-out infinite',
    zIndex: 15,
  },

  // Cow
  cowContainer: {
    position: 'absolute',
    bottom: '135px',
    zIndex: 15,
    imageRendering: 'pixelated',
  },

  cow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  cowBody: {
    width: '50px',
    height: '30px',
    background: 'linear-gradient(180deg, #f5f5dc 0%, #dcdcaa 100%)',
    border: '2px solid #8b8878',
    position: 'relative',
  },

  cowSpot: {
    position: 'absolute',
    width: '12px',
    height: '10px',
    background: '#333',
    top: '5px',
    left: '10px',
  },

  cowHead: {
    width: '25px',
    height: '20px',
    background: '#f5f5dc',
    border: '2px solid #8b8878',
    position: 'absolute',
    left: '-20px',
    top: '2px',
  },

  cowLegs: {
    display: 'flex',
    gap: '20px',
    marginTop: '-2px',
  },

  cowLeg: {
    width: '10px',
    height: '15px',
    background: '#f5f5dc',
    border: '2px solid #8b8878',
  },
};

// ============================================================
// CSS KEYFRAMES (injected via style tag)
// ============================================================
const keyframesStyle = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes floatCloud {
    0% { transform: translateX(0); }
    50% { transform: translateX(30px); }
    100% { transform: translateX(0); }
  }
  
  @keyframes floatCloudReverse {
    0% { transform: translateX(0); }
    50% { transform: translateX(-40px); }
    100% { transform: translateX(0); }
  }
  
  @keyframes sunGlow {
    0%, 100% { box-shadow: 0 0 60px 20px rgba(255, 200, 50, 0.5); }
    50% { box-shadow: 0 0 80px 30px rgba(255, 200, 50, 0.7); }
  }
  
  @keyframes waterShimmer {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 1; }
  }
  
  @keyframes blink {
    0%, 90%, 100% { opacity: 1; }
    95% { opacity: 0; }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

// ============================================================
// COMPONENTS
// ============================================================

// ACM Logo SVG Component
const ACMLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ imageRendering: 'pixelated' }}>
    <rect x="5" y="5" width="90" height="90" fill="#0066b2" stroke="#004080" strokeWidth="4" />
    <text x="50" y="60" textAnchor="middle" fill="#00d4ff" fontSize="28" fontFamily="'Press Start 2P', monospace">
      ACM
    </text>
  </svg>
);

// ACM-W Logo SVG Component
const ACMWLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ imageRendering: 'pixelated' }}>
    <defs>
      <linearGradient id="acmwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7b2d8e" />
        <stop offset="100%" stopColor="#d4488e" />
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="90" height="90" fill="url(#acmwGrad)" stroke="#5a1a6a" strokeWidth="4" />
    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="16" fontFamily="'Press Start 2P', monospace">
      ACM-W
    </text>
  </svg>
);

// Pixel Cloud Component
const PixelCloud = ({ top, left, scale = 1, animationDuration = '8s', reverse = false }) => (
  <div style={{
    ...styles.cloud,
    top,
    left,
    transform: `scale(${scale})`,
    animation: `${reverse ? 'floatCloudReverse' : 'floatCloud'} ${animationDuration} ease-in-out infinite`,
  }}>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ width: '20px', height: '16px', background: 'white', marginRight: '-4px' }} />
      <div style={{ width: '28px', height: '24px', background: 'white', marginBottom: '8px', marginRight: '-6px' }} />
      <div style={{ width: '36px', height: '32px', background: 'white', marginBottom: '12px', marginRight: '-8px' }} />
      <div style={{ width: '28px', height: '24px', background: 'white', marginBottom: '8px', marginRight: '-4px' }} />
      <div style={{ width: '20px', height: '16px', background: 'white' }} />
    </div>
  </div>
);

// Pixel Tree Component
const PixelTree = ({ bottom, right, left, scale = 1 }) => (
  <div style={{
    position: 'absolute',
    bottom,
    right,
    left,
    zIndex: 18,
    transform: `scale(${scale})`,
    transformOrigin: 'bottom center',
  }}>
    <div style={styles.tree}>
      <div style={styles.treeLeaves(1)} />
      <div style={{ ...styles.treeLeaves(1), marginTop: '-10px', transform: 'scale(1.15)' }} />
      <div style={{ ...styles.treeLeaves(1), marginTop: '-10px' }} />
      <div style={styles.treeTrunk(1)} />
    </div>
  </div>
);

// Pixel Steve Character
const PixelSteve = () => (
  <div style={styles.steveContainer}>
    {/* Speech Bubble */}
    <div style={styles.speechBubble}>
      <p style={styles.speechText}>Check out<br />ACM!</p>
      <div style={styles.speechPointer} />
      <div style={styles.speechPointerInner} />
    </div>

    {/* Steve Body */}
    <div style={{ ...styles.steve, animation: 'blink 4s ease-in-out infinite' }}>
      {/* Head */}
      <div style={styles.steveHead}>
        {/* Hair */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10px', background: '#4a3020' }} />
        {/* Eyes */}
        <div style={{ position: 'absolute', top: '14px', left: '6px', width: '8px', height: '6px', background: '#4a90b0' }} />
        <div style={{ position: 'absolute', top: '14px', right: '6px', width: '8px', height: '6px', background: '#4a90b0' }} />
        {/* Nose/Mouth */}
        <div style={{ position: 'absolute', bottom: '6px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '4px', background: '#a08060' }} />
      </div>
      {/* Body */}
      <div style={styles.steveBody} />
      {/* Legs */}
      <div style={styles.steveLegs}>
        <div style={styles.steveLeg} />
        <div style={{ ...styles.steveLeg, marginLeft: '2px' }} />
      </div>
    </div>
  </div>
);

// Pixel Cow Component
const PixelCow = ({ left }) => (
  <div style={{ ...styles.cowContainer, left }}>
    <div style={styles.cow}>
      <div style={styles.cowBody}>
        <div style={styles.cowSpot} />
        <div style={{ ...styles.cowSpot, left: '30px', top: '12px', width: '10px', height: '8px' }} />
        <div style={styles.cowHead}>
          {/* Eyes */}
          <div style={{ position: 'absolute', top: '5px', left: '4px', width: '4px', height: '4px', background: '#000' }} />
          <div style={{ position: 'absolute', top: '5px', right: '4px', width: '4px', height: '4px', background: '#000' }} />
        </div>
      </div>
      <div style={styles.cowLegs}>
        <div style={styles.cowLeg} />
        <div style={styles.cowLeg} />
      </div>
    </div>
  </div>
);

// Diamond Ore Block
const DiamondOre = ({ bottom, right }) => (
  <div style={{ ...styles.ore('diamond'), position: 'absolute', bottom, right, zIndex: 20 }}>
    <div style={styles.oreDot('#00d4ff')} />
    <div style={styles.oreDot('#00b8e6')} />
    <div style={styles.oreDot('#00d4ff')} />
    <div style={styles.oreDot('#00e5ff')} />
  </div>
);

// Gold Ore Block
const GoldOre = ({ bottom, left }) => (
  <div style={{ ...styles.ore('gold'), position: 'absolute', bottom, left, zIndex: 20 }}>
    <div style={styles.oreDot('#FFD700')} />
    <div style={styles.oreDot('#FFC107')} />
    <div style={styles.oreDot('#FFD700')} />
    <div style={styles.oreDot('#FFEB3B')} />
  </div>
);

// ============================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================
const HomePage = () => {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  // Dirt texture positions
  const dirtTextures = React.useMemo(() =>
    Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    })), []);

  return (
    <>
      {/* Inject keyframes */}
      <style>{keyframesStyle}</style>

      <div style={styles.container}>
        {/* Sky Background */}
        <div style={styles.sky} />

        {/* Sun */}
        <div style={styles.sun} />

        {/* Clouds */}
        <PixelCloud top="60px" left="5%" scale={0.8} animationDuration="10s" />
        <PixelCloud top="100px" left="20%" scale={0.6} animationDuration="12s" reverse />
        <PixelCloud top="40px" left="50%" scale={1} animationDuration="8s" />
        <PixelCloud top="80px" left="70%" scale={0.7} animationDuration="11s" reverse />
        <PixelCloud top="120px" left="85%" scale={0.5} animationDuration="9s" />

        {/* Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.navLogo}>
            <div style={{ ...styles.logoBox, background: '#0066b2', border: '3px solid #004080' }}>
              <ACMLogo size={36} />
            </div>
            <span style={{ color: 'white', fontSize: '12px', textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>ACM</span>

            <div style={{ width: '2px', height: '32px', background: 'rgba(255,255,255,0.3)' }} />

            <div style={{ ...styles.logoBox, background: 'linear-gradient(135deg, #7b2d8e 0%, #d4488e 100%)', border: '3px solid #5a1a6a' }}>
              <ACMWLogo size={36} />
            </div>
            <span style={{ color: 'white', fontSize: '12px', textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>ACM-W</span>
          </div>

          <div style={styles.navLinks}>
            {['About', 'Events', 'Resources', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  ...styles.navLink,
                  color: hoveredLink === item ? '#FFD700' : 'white',
                  textShadow: hoveredLink === item
                    ? '0 0 10px #FFD700, 2px 2px 0 rgba(0,0,0,0.5)'
                    : '2px 2px 0 rgba(0,0,0,0.5)',
                }}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {item}
              </a>
            ))}
          </div>

          <button style={{ ...styles.mcButton, ...styles.mcButtonOrange }}>
            JOIN US
          </button>
        </nav>

        {/* Hero Content */}
        <main style={styles.heroContent}>
          {/* ACM Book Logo */}
          <div style={styles.bookContainer}>
            <div style={styles.book}>
              <span style={styles.bookText}>ACM</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 style={styles.title}>
            <span style={styles.titleLine('#00d4ff', '28px')}>ASSOCIATION</span>
            <span style={styles.titleLine('#4ade80', '22px')}>FOR</span>
            <span style={styles.titleLine('#fbbf24', '28px')}>COMPUTING</span>
            <span style={styles.titleLine('#fb923c', '28px')}>MACHINERY</span>
          </h1>

          {/* Subtitle */}
          <div style={styles.subtitleBox}>
            <p style={styles.subtitle}>
              Advancing computing as a science and profession
            </p>
          </div>

          {/* IIT Mandi Badge */}
          <div style={styles.badge}>
            <p style={styles.badgeText}>IIT MANDI CHAPTER</p>
          </div>

          {/* Scroll indicator */}
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8px', marginTop: '20px', animation: 'pulse 2s infinite' }}>
            Scroll Down ▼
          </p>

          {/* CTA Buttons */}
          <div style={styles.ctaContainer}>
            <button style={{ ...styles.mcButton, ...styles.mcButtonGreen, padding: '16px 32px' }}>
              JOIN ACM
            </button>
            <button style={{ ...styles.mcButton, ...styles.mcButtonOrange, padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📱</span> EXPLORE
            </button>
          </div>
        </main>

        {/* Steve Character */}
        <PixelSteve />

        {/* Trees */}
        <PixelTree bottom="130px" right="60px" scale={1.2} />
        <PixelTree bottom="130px" right="180px" scale={0.8} />
        <PixelTree bottom="130px" left="200px" scale={1} />

        {/* Cows */}
        <PixelCow left="30%" />
        <PixelCow left="45%" />
        <PixelCow left="65%" />

        {/* Water Pool */}
        <div style={styles.water} />

        {/* Ore Decorations */}
        <DiamondOre bottom="20px" right="100px" />
        <GoldOre bottom="40px" left="150px" />

        {/* Landscape */}
        <div style={styles.landscape}>
          {/* Grass Layer */}
          <div style={styles.grassLayer}>
            {/* Grass texture lines */}
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: '3px',
                height: '6px',
                background: '#6a9a3a',
                top: '-4px',
                left: `${(i / 80) * 100}%`,
              }} />
            ))}
          </div>

          {/* Dirt Layer */}
          <div style={styles.dirtLayer}>
            {dirtTextures.map((pos, i) => (
              <div key={i} style={{ ...styles.dirtTexture, top: pos.top, left: pos.left }} />
            ))}
          </div>

          {/* Stone Layer */}
          <div style={styles.stoneLayer} />
        </div>
      </div>
    </>
  );
};

export default HomePage;