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
            d="M132 28H288L404 392H304L272 304H148L116 392H16L132 28ZM210 116L232 160L278 184L232 208L210 292L188 208L142 184L188 160L210 116Z"
            fill="url(#polaris-a)"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </div>
    ),
    size
  );
}
