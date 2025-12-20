import './about.css';

// About Us Page Module - Optimized Minecraft Theme
class AboutUsPage {
    constructor() {
        this.members = [];
        this.container = null;
    }

    async init() {
        try {
            const response = await fetch('/dataset/members.json');
            if (!response.ok) throw new Error('Fetch failed');
            this.members = await response.json();
            console.log('Loaded members:', this.members.length);
        } catch (error) {
            console.error('Failed to load members data:', error);
            this.members = [];
        }
        this.render();
    }

    categorizeMembers(members) {
        const roleOrder = {
            'Coordinator': 1,
            'Co-Coordinator': 2,
            'Mentor(ACM)': 3,
            'Mentor (ACMW)': 3,
            'Mentor': 3,
            'Core Member': 4
        };

        return members.sort((a, b) => {
            const orderA = roleOrder[a.role] || 5;
            const orderB = roleOrder[b.role] || 5;
            return orderA - orderB;
        });
    }

    createMemberCard(member, isLeadership = false) {
        const card = document.createElement('div');
        card.className = 'member-card';

        let roleClass = 'core';
        if (member.role.includes('Coordinator')) roleClass = 'coordinator';
        else if (member.role.includes('Mentor')) roleClass = 'mentor';

        card.innerHTML = `
            <div class="card-3d-wrapper">
                <div class="name-tag">
                    <span class="name-tag-text">${member.name}</span>
                </div>
                <div class="card-content">
                    <div class="member-image-container">
                        <div class="skin-frame">
                            <img 
                                src="/dataset/${member.image.replace('dataset/', '')}" 
                                alt="${member.name}" 
                                class="member-image"
                                loading="lazy"
                                onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5d9a3c&color=fff&size=200';this.classList.add('loaded');"
                            />
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">${member.name}</h3>
                        <span class="member-role ${roleClass}">${member.role}</span>
                    </div>
                </div>
            </div>
        `;

        // Add image load handler
        const img = card.querySelector('.member-image');
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });

        // If image is already cached and loaded
        if (img.complete) {
            img.classList.add('loaded');
        }

        return card;
    }

    createChapterSection(chapterName, members, description) {
        const section = document.createElement('section');
        section.className = `chapter-section ${chapterName.toLowerCase()}`;

        const sortedMembers = this.categorizeMembers(members);

        const leadership = sortedMembers.filter(m =>
            m.role.includes('Coordinator') || m.role.includes('Mentor')
        );
        const coreMembers = sortedMembers.filter(m =>
            m.role === 'Core Member'
        );

        section.innerHTML = `
            <div class="chapter-header">
                <h2 class="chapter-title">
                    <span class="chapter-icon ${chapterName.toLowerCase()}-icon"></span>
                    ${chapterName === 'ACM' ? 'ACM Chapter' : 'ACM-W Chapter'}
                </h2>
                <p class="chapter-description">${description}</p>
            </div>
            <div class="members-container">
                ${leadership.length > 0 ? `
                    <div class="leadership-section">
                        <h3 class="section-subtitle"><span class="star-icon">★</span> Leadership</h3>
                        <div class="carousel-wrapper">
                            <button class="carousel-nav prev" aria-label="Previous">◄</button>
                            <div class="carousel-track"></div>
                            <button class="carousel-nav next" aria-label="Next">►</button>
                        </div>
                    </div>
                ` : ''}
                <div class="core-section">
                    <h3 class="section-subtitle"><span class="code-icon">&lt;/&gt;</span> Core Team</h3>
                    <div class="members-grid core-grid"></div>
                </div>
            </div>
        `;

        if (leadership.length > 0) {
            const carouselTrack = section.querySelector('.carousel-track');
            leadership.forEach((member, index) => {
                const card = this.createMemberCard(member, true);
                // Eager load first 3 leadership images
                if (index < 3) {
                    const img = card.querySelector('.member-image');
                    img.removeAttribute('loading');
                }
                carouselTrack.appendChild(card);
            });

            this.setupCarousel(section.querySelector('.carousel-wrapper'));
        }

        const coreGrid = section.querySelector('.core-grid');
        coreMembers.forEach((member, index) => {
            const card = this.createMemberCard(member, false);
            // Eager load first 6 core team images
            if (index < 6) {
                const img = card.querySelector('.member-image');
                img.removeAttribute('loading');
            }
            coreGrid.appendChild(card);
        });

        return section;
    }

    setupCarousel(wrapper) {
        const track = wrapper.querySelector('.carousel-track');
        const prevBtn = wrapper.querySelector('.carousel-nav.prev');
        const nextBtn = wrapper.querySelector('.carousel-nav.next');

        const scrollAmount = 240;

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    render() {
        document.body.innerHTML = '';

        this.container = document.createElement('div');
        this.container.className = 'about-page';

        const hero = document.createElement('header');
        hero.className = 'hero-section';
        hero.innerHTML = `
            <div class="hero-background">
                <div class="mc-sun"></div>
                <div class="clouds">
                    <div class="cloud cloud-1"></div>
                    <div class="cloud cloud-2"></div>
                    <div class="cloud cloud-3"></div>
                    <div class="cloud cloud-4"></div>
                    <div class="cloud cloud-5"></div>
                </div>
                <div class="mc-tree tree-1"></div>
                <div class="mc-tree tree-2"></div>
                <div class="mc-tree tree-3"></div>
                <div class="mc-cow cow-1"></div>
                <div class="mc-cow cow-2"></div>
                <div class="mc-cow cow-3"></div>
                <div class="mc-cow cow-4"></div>
                <div class="mc-cow mc-cow-baby baby-1"></div>
                <div class="mc-cow mc-cow-baby baby-2"></div>
                <div class="mc-water"></div>
                <div class="mc-steve"></div>
                <div class="ground"></div>
            </div>
            <div class="hero-content">
                <div class="title-block">
                    <h1 class="hero-title">
                        <span class="title-line">Meet Our</span>
                        <span class="title-highlight">Team</span>
                    </h1>
                </div>
                <p class="hero-subtitle">The passionate minds behind ACM IIT Mandi – building a community of tech enthusiasts.</p>
                <div class="scroll-indicator">
                    <span class="scroll-arrow">▼</span>
                </div>
            </div>
        `;
        this.container.appendChild(hero);

        const main = document.createElement('main');
        main.className = 'main-content';

        const acmMembers = this.members.filter(m => m.chapter === 'ACM');
        const acmwMembers = this.members.filter(m => m.chapter === 'ACMW');

        main.appendChild(this.createChapterSection(
            'ACM',
            acmMembers,
            'The ACM Student Chapter at IIT Mandi – advancing computing and empowering students through workshops, hackathons, and tech talks.'
        ));

        const divider = document.createElement('div');
        divider.className = 'section-divider';
        divider.innerHTML = '<div class="divider-line"></div><div class="divider-icon">⛏</div><div class="divider-line"></div>';
        main.appendChild(divider);

        main.appendChild(this.createChapterSection(
            'ACMW',
            acmwMembers,
            'ACM-W (Women in Computing) – supporting and celebrating women in technology, creating an inclusive environment for all.'
        ));

        this.container.appendChild(main);

        const footer = document.createElement('footer');
        footer.className = 'about-footer';
        footer.innerHTML = `
            <div class="footer-content">
                <p class="footer-text">ACM Student Chapter @ IIT Mandi</p>
                <div class="footer-links">
                    <a href="/" class="footer-link">Home</a>
                    <a href="/events" class="footer-link">Events</a>
                    <a href="/contact" class="footer-link">Contact</a>
                </div>
            </div>
        `;
        this.container.appendChild(footer);

        document.body.appendChild(this.container);

        this.initScrollAnimations();
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const cardIndex = parseInt(entry.target.dataset.index) || 0;
                    if (cardIndex < 12) {
                        entry.target.classList.add('spawn');
                    }
                }
            });
        }, { threshold: 0.05, rootMargin: '100px' });

        document.querySelectorAll('.member-card').forEach((card, index) => {
            card.dataset.index = index;
            const delay = Math.min(index * 0.04, 0.8);
            card.style.transitionDelay = `${delay}s`;
            card.style.animationDelay = `${delay}s`;
            observer.observe(card);
        });

        document.querySelectorAll('.chapter-section').forEach(section => {
            observer.observe(section);
        });
    }
}

const aboutPage = new AboutUsPage();
aboutPage.init();

export default AboutUsPage;