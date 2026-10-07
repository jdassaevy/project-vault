import { ImageResponse } from "next/og";

export const alt = "JD // Project Vault — Full Stack Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#07090d",
          color: "#f5f8ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(107,182,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(107,182,255,0.08) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            opacity: 0.45,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            right: -100,
            top: -180,
            borderRadius: 999,
            background: "rgba(72,145,255,0.22)",
            filter: "blur(110px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            left: 260,
            bottom: -260,
            borderRadius: 999,
            background: "rgba(139,124,255,0.16)",
            filter: "blur(100px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "62px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              JD
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                fontSize: 13,
                letterSpacing: "0.18em",
                color: "rgba(245,248,255,0.5)",
              }}
            >
              <span>JD // PROJECT VAULT</span>
              <span style={{ color: "#6bb6ff" }}>SOFTWARE ENGINEERING // 2026</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 14,
                letterSpacing: "0.2em",
                color: "#6bb6ff",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#69ddb5",
                  boxShadow: "0 0 18px rgba(105,221,181,0.65)",
                }}
              />
              FULL STACK DEVELOPMENT
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 80,
                fontWeight: 700,
                letterSpacing: "-0.065em",
                lineHeight: 0.9,
                maxWidth: 920,
              }}
            >
              SYSTEMS BUILT TO SHIP.
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "rgba(245,248,255,0.56)",
                maxWidth: 830,
                lineHeight: 1.45,
              }}
            >
              SaaS · Product systems · Automation · Integrations · Real engineering decisions
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 12,
              letterSpacing: "0.16em",
              color: "rgba(245,248,255,0.3)",
            }}
          >
            <span>PROJECT-VAULT-RHO.VERCEL.APP</span>
            <span>SELECTED BUILDS // CASE STUDIES</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
