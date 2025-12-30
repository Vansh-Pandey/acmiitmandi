import { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ChapterSection } from '../components/ChapterSection';
import { SectionDivider } from '../components/SectionDivider';
import { Footer } from '../components/Footer';
import './about.css';

const AboutPage = () => {
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
        <div className="about-page">
            <HeroSection />

            {/* Main Content */}
            <main className="main-content">
                {loading ? (
                    <div className="text-center py-20">
                        <p className="font-['Silkscreen'] text-xl text-[#f8b800]">Loading...</p>
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
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
