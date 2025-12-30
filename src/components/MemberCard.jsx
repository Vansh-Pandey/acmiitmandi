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
                        // Unobserve after becoming visible (one-time animation)
                        sharedObserver.unobserve(entry.target);
                        observerCallbacks.delete(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '100px' }
        );
    }
    return sharedObserver;
}

// Member Card Component - Optimized
export const MemberCard = ({ member, index, isLeadership = false }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = getSharedObserver();
        observerCallbacks.set(element, setIsVisible);
        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observerCallbacks.delete(element);
        };
    }, []);

    let roleClass = 'core';
    if (member.role.includes('Coordinator')) roleClass = 'coordinator';
    else if (member.role.includes('Mentor')) roleClass = 'mentor';

    // Limit animation delay to avoid long waits
    const delay = Math.min(index * 0.03, 0.4);

    // Memoize image source to prevent re-renders
    const imageSrc = useMemo(() =>
        `/dataset/${member.image.replace('dataset/', '')}`,
        [member.image]
    );

    const fallbackSrc = useMemo(() =>
        `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5d9a3c&color=fff&size=200`,
        [member.name]
    );

    return (
        <div
            ref={ref}
            className={`member-card ${isVisible ? 'visible' : ''}`}
            style={{
                transitionDelay: isVisible ? `${delay}s` : '0s',
            }}
            data-index={index}
        >
            <div className="card-3d-wrapper">
                {/* Floating Name Tag */}
                <div className="name-tag">
                    <span className="name-tag-text">{member.name}</span>
                </div>

                {/* Card Content */}
                <div className="card-content">
                    {/* Image Container */}
                    <div className="member-image-container">
                        <div className="skin-frame">
                            <img
                                src={imageSrc}
                                alt={member.name}
                                loading="lazy"
                                decoding="async"
                                onLoad={() => setImageLoaded(true)}
                                onError={(e) => {
                                    e.target.src = fallbackSrc;
                                    setImageLoaded(true);
                                }}
                                className={`member-image ${imageLoaded ? 'loaded' : ''}`}
                            />
                        </div>
                    </div>

                    {/* Member Info */}
                    <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <span className={`member-role ${roleClass}`}>{member.role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
