export const Footer = () => {
    return (
        <footer className="border-t-8 border-mc-grass-top py-8 px-6 bg-mc-dirt">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
                <p className="font-silkscreen text-[0.75rem] text-[#ccc]"
                    style={{ textShadow: '1px 1px 0 #000' }}>
                    © 2024 ACM IIT Mandi Student Chapter
                </p>
                <div className="flex gap-6">
                    <a href="#" className="font-silkscreen text-[0.7rem] text-mc-emerald no-underline transition-colors hover:text-mc-gold"
                        style={{ textShadow: '1px 1px 0 #000' }}>
                        GitHub
                    </a>
                    <a href="#" className="font-silkscreen text-[0.7rem] text-mc-emerald no-underline transition-colors hover:text-mc-gold"
                        style={{ textShadow: '1px 1px 0 #000' }}>
                        LinkedIn
                    </a>
                    <a href="#" className="font-silkscreen text-[0.7rem] text-mc-emerald no-underline transition-colors hover:text-mc-gold"
                        style={{ textShadow: '1px 1px 0 #000' }}>
                        Discord
                    </a>
                </div>
            </div>
        </footer>
    );
};
