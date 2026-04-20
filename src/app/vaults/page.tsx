"use client";

export default function VaultsPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "60px",
        minHeight: "calc(100vh - 64px)",
        background: "var(--background, #0f172a)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#C8E64A",
            marginBottom: "12px",
          }}
        >
          Vaults
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.54)",
            marginBottom: "32px",
          }}
        >
          Strategy Vaults — Earn yield on your assets through automated trading
          strategies on Orderly Network.
        </p>

        <div
          style={{
            padding: "48px 32px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏦</div>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              marginBottom: "8px",
            }}
          >
            Coming Soon
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.36)",
            }}
          >
            Vault strategies will be available here. Stay tuned for DeFi yield
            opportunities powered by Orderly&apos;s infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
