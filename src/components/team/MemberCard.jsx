import { useState, useEffect, useRef, useMemo } from 'react';

// Singleton observer to reduce overhead
let sharedObserver = null;
const observerCallbacks = new Map();

function getSharedObserver() {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const callback = observerCallbacks.get(entry.target);
                    if (callback && entry.isIntersecting) {
                        callback(true);
                        sharedObserver.unobserve(entry.target);
                        observerCallbacks.delete(entry.target);
                    }
                });
            },
            { threshold: 0.01, rootMargin: '50px' }
        );
    }
    return sharedObserver;
}

export const MemberCard = ({ member, index, isLeadership = false }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [shouldLoadImage, setShouldLoadImage] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = getSharedObserver();
        observerCallbacks.set(element, (visible) => {
            setIsVisible(visible);
            setShouldLoadImage(visible);
        });
        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observerCallbacks.delete(element);
        };
    }, []);

    let roleClass = 'core';
    if (member.role.includes('Coordinator')) roleClass = 'coordinator';
    else if (member.role.includes('Mentor')) roleClass = 'mentor';

    const delay = Math.min(index * 0.02, 0.3);

    const imageSrc = useMemo(() =>
        `/dataset/${member.image.replace('dataset/', '')}`,
        [member.image]
    );

    const fallbackSrc = useMemo(() =>
        `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5d9a3c&color=fff&size=200`,
        [member.name]
    );

    const roleStyles = {
        coordinator: 'text-mc-diamond border-mc-diamond shadow-[0_0_10px_rgba(93,236,245,0.3)]',
        mentor: 'text-mc-gold border-mc-gold shadow-[0_0_10px_rgba(248,184,0,0.3)]',
        core: 'text-mc-emerald border-mc-emerald'
    };

    return (
        <div
            ref={ref}
            className={`member-card ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
            data-index={index}
        >
            <div className="relative transition-transform duration-200 ease-out hover:-translate-y-1"
                style={{ transformStyle: 'preserve-3d' }}>
                {/* Floating Name Tag */}
                <div className="name-tag">
                    <span className="text-[0.72rem] text-white tracking-[0.5px]"
                        style={{ 
                            fontFamily: "MinecraftRegular, monospace",
                            textShadow: '1px 1px 0 #000' 
                        }}>
                        {member.name}
                    </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#2f2f2f] to-[#1a1a1a] border-4 p-1 relative"
                    style={{
                        borderColor: '#555 #222 #222 #444',
                        boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.08), inset -1px -1px 0 rgba(0, 0, 0, 0.4), 0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}>
                    {/* Image Container */}
                    <div className="relative w-full aspect-square bg-[#1a1a1a] transition-transform duration-200 ease-out hover:scale-[1.01]"
                        style={{ transformStyle: 'preserve-3d' }}>
                        <div className="skin-frame">
                            {shouldLoadImage ? (
                                <img
                                    src={imageSrc}
                                    alt={member.name}
                                    loading="lazy"
                                    decoding="async"
                                    fetchpriority="low"
                                    onLoad={() => setImageLoaded(true)}
                                    onError={(e) => {
                                        e.target.src = fallbackSrc;
                                        setImageLoaded(true);
                                    }}
                                    className={`w-full h-full object-cover transition-opacity duration-300 relative z-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ) : (
                                <div className="w-full h-full bg-[#2a2a2a]" />
                            )}
                        </div>
                    </div>

                    {/* Member Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent pt-8 pb-2 px-2 text-center">
                        <h3 className="hidden">{member.name}</h3>
                        <span className={`inline-flex items-center gap-1 text-[0.6rem] py-1.5 px-2.5 bg-black/85 border-2 mt-2 uppercase tracking-[0.5px] before:content-['◆'] before:text-[0.5rem] ${roleStyles[roleClass]}`}
                            style={{ fontFamily: "MinecraftRegular, monospace" }}>
                            {member.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};