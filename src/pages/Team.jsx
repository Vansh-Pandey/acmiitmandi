import { useState, useEffect } from 'react';
import { HeroSection } from '../components/team/HeroSection';
import { ChapterSection } from '../components/team/ChapterSection';
import { SectionDivider } from '../components/team/SectionDivider';
import { Footer } from '../components/team/Footer';

const Team = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch('/dataset/members.json');
                if (!response.ok) throw new Error('Fetch failed');
                const data = await response.json();
                setMembers(data);
                console.log('Loaded members:', data.length);
            } catch (error) {
                console.error('Failed to load members data:', error);
                setMembers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    const acmMembers = members.filter(m => m.chapter === 'ACM');
    const acmwMembers = members.filter(m => m.chapter === 'ACMW');

    return (
        <div className="min-h-screen relative overflow-y-visible bg-mc-dirt-dark">
            <HeroSection />

            {/* Main Content */}
            <main className="max-w-full mx-auto p-0 relative min-h-screen scroll-snap-align-start"
                style={{
                    background: "url('./cave-background.png') center center / cover no-repeat fixed"
                }}>
                {/* Cave transition overlay */}
                <div className="absolute top-0 left-0 right-0 h-[200px] z-[1] pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, #866043 0%, #593d29 30%, rgba(25, 30, 40, 0.9) 70%, transparent 100%)'
                    }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 140, 50, 0.15) 0%, transparent 60%), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%)'
                    }}
                />

                <div className="relative z-[2]">
                    {loading ? (
                        <div className="text-center py-20">
                            <p className="font-silkscreen text-xl text-mc-gold">Loading...</p>
                        </div>
                    ) : (
                        <>
                            <ChapterSection
                                chapterName="ACM"
                                members={acmMembers}
                                description="The ACM Student Chapter at IIT Mandi – advancing computing and empowering students through workshops, hackathons, and tech talks."
                            />

                            <SectionDivider />

                            <ChapterSection
                                chapterName="ACMW"
                                members={acmwMembers}
                                description="ACM-W (Women in Computing) – supporting and celebrating women in technology, creating an inclusive environment for all."
                            />
                        </>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Team;
