import { useRef } from 'react';
import { MemberCard } from './MemberCard';

export const ChapterSection = ({ chapterName, members, description }) => {
    const carouselRef = useRef(null);

    const categorizeMembers = (members) => {
        const roleOrder = {
            'Coordinator': 1,
            'Co-Coordinator': 2,
            'Mentor(ACM)': 3,
            'Mentor (ACMW)': 3,
            'Mentor': 3,
            'Mentor (ACM)': 3,
            'Core Member': 4
        };
        return [...members].sort((a, b) => {
            const orderA = roleOrder[a.role] || 5;
            const orderB = roleOrder[b.role] || 5;
            return orderA - orderB;
        });
    };

    const sortedMembers = categorizeMembers(members);
    const leadership = sortedMembers.filter(m => m.role.includes('Coordinator') || m.role.includes('Mentor'));
    const coreMembers = sortedMembers.filter(m => m.role === 'Core Member');

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: direction * 240, behavior: 'smooth' });
        }
    };

    const isAcm = chapterName === 'ACM';

    return (
        <section className="max-w-[1300px] mx-auto py-12 px-6 mb-16">
            {/* Chapter Header */}
            <div className="flex flex-col items-center text-center mb-12 gap-6">
                <h2 className="font-silkscreen text-[clamp(1.2rem,3vw,1.6rem)] font-bold inline-flex items-center justify-center gap-4 text-white py-6 px-14 bg-[#6d6d6d] border-4"
                    style={{
                        textShadow: '3px 3px 0 #000',
                        borderColor: '#fff #555 #555 #fff'
                    }}>
                    <span className={`w-7 h-7 border-2 border-black ${isAcm ? 'bg-gradient-to-br from-mc-diamond to-[#3ac4b8]' : 'bg-gradient-to-br from-[#ff69b4] to-[#ff1493]'}`}
                        style={{
                            boxShadow: isAcm ? '0 0 12px rgba(93, 236, 245, 0.6)' : '0 0 12px rgba(255, 105, 180, 0.6)'
                        }}
                    />
                    {isAcm ? 'ACM Chapter' : 'ACM-W Chapter'}
                </h2>
                <p className="font-silkscreen text-[0.8rem] text-[#ccc] max-w-[600px] mx-auto leading-relaxed text-center"
                    style={{ textShadow: '1px 1px 0 #000' }}>
                    {description}
                </p>
            </div>

            {/* Members Container */}
            <div className="flex flex-col gap-12">
                {/* Leadership Carousel */}
                {leadership.length > 0 && (
                    <div className="relative mb-8 pt-[60px]">
                        <h3 className="font-silkscreen text-[1.3rem] text-mc-emerald mb-8 flex items-center gap-2 pb-[10px]"
                            style={{ textShadow: '2px 2px 0 #000' }}>
                            <span className="text-mc-gold">★</span> Leadership
                        </h3>
                        <div className="relative overflow-hidden py-8">
                            <button
                                onClick={() => scrollCarousel(-1)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#8b8b8b] text-white font-silkscreen text-2xl z-20 flex items-center justify-center border-4 transition-all hover:bg-[#9d9d9d] active:scale-95"
                                style={{
                                    borderColor: '#fff #555 #555 #fff',
                                    textShadow: '1px 1px 0 #000'
                                }}
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                            <div ref={carouselRef} className="carousel-track">
                                {leadership.map((member, index) => (
                                    <MemberCard key={member.name} member={member} index={index} isLeadership={true} />
                                ))}
                            </div>
                            <button
                                onClick={() => scrollCarousel(1)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#8b8b8b] text-white font-silkscreen text-2xl z-20 flex items-center justify-center border-4 transition-all hover:bg-[#9d9d9d] active:scale-95"
                                style={{
                                    borderColor: '#fff #555 #555 #fff',
                                    textShadow: '1px 1px 0 #000'
                                }}
                                aria-label="Next"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                )}

                {/* Core Team Grid */}
                <div className="pt-5">
                    <h3 className="font-silkscreen text-[1.3rem] text-mc-emerald mb-8 flex items-center gap-2 pb-[10px]"
                        style={{ textShadow: '2px 2px 0 #000' }}>
                        <span className="text-mc-diamond">&lt;/&gt;</span> Core Team
                    </h3>
                    <div className="members-grid">
                        {coreMembers.map((member, index) => (
                            <MemberCard key={member.name} member={member} index={index} isLeadership={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
