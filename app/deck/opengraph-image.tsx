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
          background: "#F4EFE6",
          color: "#1C1A17",
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
              "linear-gradient(90deg, #9C4221 0%, #8A6D3B 55%, transparent 100%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 17,
              letterSpacing: "0.14em",
              color: "#9C4221",
              textTransform: "uppercase",
            }}
          >
            Substrate · Problem Validated
          </div>
          <div
            style={{
              marginTop: 56,
              display: "flex",
              flexWrap: "wrap",
              fontSize: 108,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              maxWidth: 920,
              fontWeight: 400,
            }}
          >
            <span>AI agents for the&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#9C4221" }}>
              physical
            </span>
            <span>&nbsp;world.</span>
          </div>
          <div
            style={{
              marginTop: 44,
              maxWidth: 800,
              fontStyle: "italic",
              fontSize: 38,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color: "#3A352E",
            }}
          >
            The agentic platform for deep-tech engineering.
          </div>
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            fontFamily: "monospace",
            fontSize: 15,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6B6457",
          }}
        >
          yassinalyassin.com/deck
        </div>
      </div>
    ),
    size,
  );
}
