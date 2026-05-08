import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = "Yassin Al-Yassin — Building Substrate";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
              fontFamily: "monospace",
              fontSize: 17,
              letterSpacing: "0.08em",
              color: "#E8A656",
              textTransform: "uppercase",
            }}
          >
            Building Substrate
          </div>
          <div
            style={{
              marginTop: 58,
              display: "flex",
              flexDirection: "column",
              fontSize: 112,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              maxWidth: 760,
            }}
          >
            <div>Yassin</div>
            <div>Al-Yassin</div>
          </div>
          <div
            style={{
              marginTop: 52,
              maxWidth: 770,
              fontStyle: "italic",
              fontSize: 42,
              lineHeight: 1.13,
              letterSpacing: "-0.025em",
              color: "#A39C92",
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            fontSize: 18,
            color: "#E8A656",
          }}
        >
          yassinalyassin.com
        </div>
      </div>
    ),
    size,
  );
}
