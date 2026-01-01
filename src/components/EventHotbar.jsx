export function EventHotbar({ items, selectedIndex, onSelect }) {
  return (
    <div className="flex justify-center">
      <div
        className="inline-flex p-1 gap-1"
        style={{
          backgroundColor: "#1f2933",
          border: "4px solid #a16207",
          boxShadow: "6px 6px 0 rgba(0,0,0,0.6)",
          fontFamily: "MinecraftRegular, monospace",
        }}
      >
        {items.map((item, index) => {
          const isActive = selectedIndex === index;

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className="relative flex items-center justify-center transition-transform duration-100"
              style={{
                width: "56px",
                height: "56px",
                border: `2px solid ${isActive ? "#facc15" : "#6b7280"}`,
                backgroundColor: isActive ? "rgba(250,204,21,0.15)" : "#111827",
                transform: isActive ? "scale(1.1)" : "scale(1)",
              }}
            >
              <span style={{ fontSize: "24px" }}>{item.icon}</span>

              {isActive && (
                <div
                  className="absolute"
                  style={{
                    bottom: "-18px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "8px",
                    color: "#facc15",
                    whiteSpace: "nowrap",
                    textShadow: "1px 1px 0 #000",
                  }}
                >
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
