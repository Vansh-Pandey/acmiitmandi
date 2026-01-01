export const HeroSection = () => {
    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-mc-sky-top via-mc-sky-bottom to-mc-sky-bottom scroll-snap-align-start">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Minecraft Sun */}
                <div className="absolute top-[8%] right-[15%] w-16 h-16 bg-[#ffee00] border-4 border-[#ffaa00] z-[2]"
                    style={{
                        boxShadow: 'inset 8px 8px 0 #ffff88, inset -8px -8px 0 #ddbb00, 0 0 60px rgba(255, 230, 0, 0.5)'
                    }}
                />

                {/* Clouds */}
                <div className="absolute top-[5%] left-0 right-0 h-[200px] z-[1]">
                    <div className="cloud cloud-1" />
                    <div className="cloud cloud-2" />
                    <div className="cloud cloud-3" />
                    <div className="cloud cloud-4" />
                    <div className="cloud cloud-5" />
                </div>

                {/* Trees */}
                <div className="mc-tree tree-1" />
                <div className="mc-tree tree-2" />
                <div className="mc-tree tree-3" />

                {/* Cows */}
                <div className="mc-cow cow-1" />
                <div className="mc-cow cow-2" />
                <div className="mc-cow cow-3" />
                <div className="mc-cow cow-4" />

                {/* Baby Cows */}
                <div className="mc-cow mc-cow-baby baby-1" />
                <div className="mc-cow mc-cow-baby baby-2" />

                {/* Water */}
                <div className="mc-water" />

                {/* Steve */}
                <div className="mc-steve" />

                {/* Ground */}
                <div className="ground" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-8 max-w-[800px]">
                <div className="bg-black/60 py-6 px-12 mb-6 border-4 border-[#333] inline-block">
                    <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight"
                        style={{ 
                            fontFamily: "MinecraftRegular, monospace",
                            textShadow: '3px 3px 0 #000' 
                        }}>
                        <span className="block text-[#ddd] text-[0.5em] mb-1" style={{ fontFamily: "MinecraftRegular, monospace" }}>Meet Our</span>
                        <span className="block text-mc-gold"
                            style={{ fontFamily: "MinecraftRegular, monospace", textShadow: '3px 3px 0 #8b5a00, 5px 5px 0 #000' }}>
                            Team
                        </span>
                    </h1>
                </div>
                <p className="text-[clamp(0.7rem,1.5vw,0.9rem)] text-[#333] bg-white/85 py-4 px-6 mx-auto mb-8 max-w-[600px] border-[3px] border-[#555]"
                    style={{ fontFamily: "MinecraftRegular, monospace" }}>
                    The passionate minds behind ACM IIT Mandi – building a community of tech enthusiasts.
                </p>
                <div className="flex flex-col items-center">
                    <span className="text-2xl text-mc-gold animate-[bounceArrow_1s_infinite]"
                        style={{ textShadow: '2px 2px 0 #000' }}>
                        ▼
                    </span>
                </div>
            </div>
        </header>
    );
};