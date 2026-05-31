import { ImageResponse } from "next/og";

export const alt = "Substrate — AI agents for the physical world";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A1815",
          color: "#F6F2E9",
          padding: "74px 84px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #2E6B4F 0%, #8A6D3B 55%, transparent 100%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 17,
              letterSpacing: "0.16em",
              color: "#7CB89A",
              textTransform: "uppercase",
            }}
          >
            Pre-seed · 2026
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 160,
              lineHeight: 0.86,
              letterSpacing: "-0.05em",
              fontWeight: 400,
            }}
          >
            Substrate
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 40,
              fontStyle: "italic",
              color: "#c9c2b2",
              letterSpacing: "-0.01em",
              fontWeight: 300,
            }}
          >
            AI agents for the physical world.
          </div>
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            fontFamily: "monospace",
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8d8678",
          }}
        >
          yassinalyassin.com/deck
        </div>
      </div>
    ),
    size,
  );
}
