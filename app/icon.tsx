import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F6F2E9",
          color: "#2E6B4F",
          fontSize: 22,
          fontStyle: "italic",
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        Y
      </div>
    ),
    size,
  );
}
