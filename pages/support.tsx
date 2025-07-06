import React from "react";

export default function Support() {
  return (
    <main style={{
      background: "#FEE9F6",
      minHeight: "100vh",
      color: "#6C47B6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: 'sans-serif',
      padding: 24
    }}>
      <div style={{ maxWidth: 480, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #e6e6fa33", padding: 32, margin: 16, textAlign: "center" }}>
        <h1 style={{ color: "#A259FF" }}>Contact Support</h1>
        <p>Email: <a href="mailto:xyz@gmail.com" style={{ color: "#FF6F91", textDecoration: "none" }}>xyz@gmail.com</a></p>
      </div>
    </main>
  );
} 