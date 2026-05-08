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
          background: "#0E0D0C",
          color: "#F2EDE5",
          padding: "74px 84px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 112,
              lineHeight: 1,
              letterSpacing: "-0.045em",
            }}
          >
            Substrate.
          </div>
          <div
            style={{
              marginTop: 42,
              maxWidth: 770,
              fontStyle: "italic",
              fontSize: 42,
              lineHeight: 1.13,
              letterSpacing: "-0.025em",
              color: "#A39C92",
            }}
          >
            AI agents for the physical world.
          </div>
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            fontSize: 18,
            color: "#E8A656",
          }}
        >
          yassinalyassin.com/deck
        </div>
      </div>
    ),
    size,
  );
}
