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

    return (
        <section className={`chapter-section ${chapterName.toLowerCase()}`}>
            {/* Chapter Header */}
            <div className="chapter-header">
                <h2 className="chapter-title">
                    <span className={`chapter-icon ${chapterName.toLowerCase()}-icon`} />
                    {chapterName === 'ACM' ? 'ACM Chapter' : 'ACM-W Chapter'}
                </h2>
                <p className="chapter-description">{description}</p>
            </div>

            {/* Members Container */}
            <div className="members-container">
                {/* Leadership Carousel */}
                {leadership.length > 0 && (
                    <div className="leadership-section">
                        <h3 className="section-subtitle">
                            <span className="star-icon">★</span> Leadership
                        </h3>
                        <div className="carousel-wrapper">
                            <button
                                onClick={() => scrollCarousel(-1)}
                                className="carousel-nav prev"
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
                                className="carousel-nav next"
                                aria-label="Next"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                )}

                {/* Core Team Grid */}
                <div className="core-section">
                    <h3 className="section-subtitle">
                        <span className="code-icon">&lt;/&gt;</span> Core Team
                    </h3>
                    <div className="members-grid core-grid">
                        {coreMembers.map((member, index) => (
                            <MemberCard key={member.name} member={member} index={index} isLeadership={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
