import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// --- LOADING SCREEN WITH 3D ACM LOGO ---

// Create loading container
const loadingContainer = document.createElement('div');
loadingContainer.id = 'loading-screen';
loadingContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background: #0a0e14;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.8s ease-out;
`;

const canvasContainer = document.createElement('div');
canvasContainer.style.cssText = `
    width: 300px;
    height: 300px;
`;
loadingContainer.appendChild(canvasContainer);

const loadingText = document.createElement('p');
loadingText.textContent = 'Loading...';
loadingText.style.cssText = `
    font-family: 'Inter', sans-serif;
    color: #589BD6;
    font-size: 1rem;
    margin-top: 1.5rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: pulse 1.5s ease-in-out infinite;
`;
loadingContainer.appendChild(loadingText);

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
    }
`;
document.head.appendChild(style);

document.body.appendChild(loadingContainer);

// --- THREE.JS SCENE SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0e14);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
camera.position.set(0, 0, 20);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(300, 300);
renderer.setPixelRatio(window.devicePixelRatio);
canvasContainer.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Logo Group
const logoGroup = new THREE.Group();
scene.add(logoGroup);

// Materials
const blueMaterial = new THREE.MeshStandardMaterial({
    color: 0x589BD6,
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide
});
const whiteMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2
});

// Diamond
const diamondGeo = new THREE.BoxGeometry(10, 10, 1);
const diamond = new THREE.Mesh(diamondGeo, blueMaterial);
diamond.rotation.z = Math.PI / 4;
logoGroup.add(diamond);

// Rings
const ringGeo = new THREE.TorusGeometry(3.6, 0.3, 16, 100);
const frontRing = new THREE.Mesh(ringGeo, whiteMaterial);
frontRing.position.z = 0.51;
logoGroup.add(frontRing);

const backRing = new THREE.Mesh(ringGeo, whiteMaterial);
backRing.position.z = -0.51;
logoGroup.add(backRing);

// Text
const loader = new FontLoader();
loader.load('https://unpkg.com/three@0.160.0/examples/fonts/gentilis_bold.typeface.json', function (font) {
    const textGeo = new TextGeometry('acm', {
        font: font,
        size: 2.2,
        depth: 0.2,
        height: 0.2,
        curveSegments: 4,
        bevelEnabled: false
    });

    textGeo.computeBoundingBox();
    textGeo.center();

    const frontText = new THREE.Mesh(textGeo, whiteMaterial);
    frontText.position.z = 0.51;
    logoGroup.add(frontText);

    const backText = new THREE.Mesh(textGeo, whiteMaterial);
    backText.position.z = -0.51;
    backText.rotation.y = Math.PI;
    logoGroup.add(backText);
});

// Animation loop
let animationId;
function animateLoader() {
    animationId = requestAnimationFrame(animateLoader);
    logoGroup.rotation.y += 0.015;
    renderer.render(scene, camera);
}
animateLoader();

// --- TRANSITION TO ABOUT US PAGE ---
async function loadAboutPage() {
    // Import and initialize the About page
    const { default: AboutUsPage } = await import('./pages/about.js');

    // Small delay to ensure smooth transition
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Fade out loading screen
    loadingContainer.style.opacity = '0';

    // After fade, remove loading screen and stop animation
    setTimeout(() => {
        cancelAnimationFrame(animationId);
        loadingContainer.remove();
        renderer.dispose();
    }, 800);
}

// Start loading the About page
loadAboutPage();