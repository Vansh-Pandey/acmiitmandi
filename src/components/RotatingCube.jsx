export default function RotatingCube() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <style>{`
        @keyframes rotate3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        .cube-container {
          perspective: 1000px;
          width: 50px;
          height: 50px;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 8s linear infinite;
        }

        .cube-face {
          position: absolute;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #facc15 0%, #fb923c 100%);
          border: 3px solid #000;
          box-shadow: 
            0 0 30px rgba(250, 204, 21, 0.8),
            0 0 60px rgba(250, 204, 21, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.2),
            inset 10px 10px 20px rgba(0, 0, 0, 0.2);
          opacity: 0.95;
        }

        /* Pixelated texture overlay */
        .cube-face::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 0px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.05) 0px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.1) 0px,
              rgba(0,0,0,0.1) 2px,
              transparent 2px,
              transparent 4px
            );
        }

        .cube-face.front {
          transform: translateZ(100px);
        }

        .cube-face.back {
          transform: rotateY(180deg) translateZ(100px);
        }

        .cube-face.right {
          transform: rotateY(90deg) translateZ(100px);
        }

        .cube-face.left {
          transform: rotateY(-90deg) translateZ(100px);
        }

        .cube-face.top {
          transform: rotateX(90deg) translateZ(100px);
        }

        .cube-face.bottom {
          transform: rotateX(-90deg) translateZ(100px);
        }
      `}</style>

      <div className="cube-container">
        <div className="cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
    </div>
  );
}
