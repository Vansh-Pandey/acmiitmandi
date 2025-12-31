export const HeroSection = () => {
    return (
        <header className="hero-section">
            {/* Hero Background */}
            <div className="hero-background">
                {/* Minecraft Sun */}
                <div className="mc-sun" />

                {/* Clouds */}
                <div className="clouds">
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
            <div className="hero-content">
                <div className="title-block">
                    <h1 className="hero-title">
                        <span className="title-line">Meet Our</span>
                        <span className="title-highlight">Team</span>
                    </h1>
                </div>
                <p className="hero-subtitle">
                    The passionate minds behind ACM IIT Mandi – building a community of tech enthusiasts.
                </p>
                <div className="scroll-indicator">
                    <span className="scroll-arrow">▼</span>
                </div>
            </div>
        </header>
    );
};
