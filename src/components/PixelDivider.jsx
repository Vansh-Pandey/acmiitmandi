export function PixelDivider() {
  return (
    <div
      className="flex justify-center items-center gap-2 my-8"
      style={{ fontFamily: "MinecraftRegular, monospace" }}
    >
      {/* Local-only animations */}
      <style>
        {`
          @keyframes pixelFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes goldPulse {
            0%, 100% { box-shadow: 0 0 6px rgba(250,204,21,0.5); }
            50% { box-shadow: 0 0 14px rgba(250,204,21,0.9); }
          }

          @keyframes grassShimmer {
            0%, 100% { opacity: 0.9; }
            50% { opacity: 1; }
          }
        `}
      </style>

      {/* Left dirt */}
      <div style={dirtWide} />

      {/* Grass shimmer */}
      <div
        style={{
          ...grass,
          animation: "grassShimmer 2.5s ease-in-out infinite",
        }}
      />

      {/* Middle dirt */}
      <div style={dirtMid} />

      {/* Center gold pixel (main action) */}
      <div
        style={{
          ...gold,
          animation:
            "pixelFloat 3s ease-in-out infinite, goldPulse 3s ease-in-out infinite",
        }}
      />

      {/* Middle dirt */}
      <div style={dirtMid} />

      {/* Grass shimmer (delayed) */}
      <div
        style={{
          ...grass,
          animation: "grassShimmer 2.5s ease-in-out infinite",
          animationDelay: "1.2s",
        }}
      />

      {/* Right dirt */}
      <div style={dirtWide} />
    </div>
  );
}

/* ---------- local styles ---------- */

const dirtWide = {
  height: "4px",
  width: "64px",
  backgroundColor: "#7c5c3e",
};

const dirtMid = {
  height: "4px",
  width: "32px",
  backgroundColor: "#7c5c3e",
};

const grass = {
  height: "8px",
  width: "8px",
  backgroundColor: "#22c55e",
};

const gold = {
  height: "12px",
  width: "12px",
  backgroundColor: "#facc15",
};
