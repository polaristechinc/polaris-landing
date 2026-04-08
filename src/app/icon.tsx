import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="polaris-a" x1="210" y1="36" x2="210" y2="384">
              <stop offset="0%" stopColor="#FF8A00" />
              <stop offset="100%" stopColor="#FFF06A" />
            </linearGradient>
          </defs>

          <path
            d="M140 36H280L392 384H311L277 296H143L109 384H28L140 36Z"
            fill="url(#polaris-a)"
          />
          <path
            d="M210 104L238 156L290 184L238 212L210 316L182 212L130 184L182 156L210 104Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    size
  );
}
