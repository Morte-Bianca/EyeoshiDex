"use client";

import { useState } from "react";
import { useConvert } from "@orderly.network/hooks";

const TOKENS = ["USDC", "USDT"];

export default function SwapPage() {
  const [selectedToken, setSelectedToken] = useState("USDC");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const { maxAmount, convert } = useConvert({ token: selectedToken });

  const handleConvert = async () => {
    if (!amount || Number(amount) <= 0) return;
    setLoading(true);
    setResult(null);
    try {
      await convert({ amount: Number(amount), slippage: 0.01 });
      setResult("Conversion successful!");
      setAmount("");
    } catch (err: any) {
      setResult(err?.message || "Conversion failed");
    } finally {
      setLoading(false);
    }
  };

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
          maxWidth: "480px",
          padding: "32px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#C8E64A",
            marginBottom: "8px",
          }}
        >
          Swap / Convert
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.54)",
            marginBottom: "24px",
          }}
        >
          Convert your collateral assets on Orderly Network
        </p>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              color: "rgba(255,255,255,0.54)",
              marginBottom: "6px",
            }}
          >
            Target Token
          </label>
          <select
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "16px",
              outline: "none",
            }}
          >
            {TOKENS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              color: "rgba(255,255,255,0.54)",
              marginBottom: "6px",
            }}
          >
            Amount
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px",
                paddingRight: "60px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              onClick={() => maxAmount && setAmount(String(maxAmount))}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#C8E64A",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              MAX
            </button>
          </div>
          {maxAmount !== undefined && (
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.36)",
                marginTop: "4px",
              }}
            >
              Available: {Number(maxAmount).toFixed(2)} {selectedToken}
            </p>
          )}
        </div>

        <button
          onClick={handleConvert}
          disabled={loading || !amount || Number(amount) <= 0}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            background: loading ? "rgba(200,230,74,0.3)" : "#C8E64A",
            color: "#0f172a",
            fontSize: "16px",
            fontWeight: 700,
            border: "none",
            cursor: loading ? "wait" : "pointer",
            opacity: !amount || Number(amount) <= 0 ? 0.5 : 1,
          }}
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        {result && (
          <p
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontSize: "14px",
              color: result.includes("success") ? "#00b49e" : "#ff447c",
            }}
          >
            {result}
          </p>
        )}
      </div>
    </div>
  );
}
