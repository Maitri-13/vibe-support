import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      background: "#F7F1FF",
      minHeight: "100vh",
      color: "#6C47B6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: 480, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #e6e6fa33", padding: 32, margin: 16 }}>
        <h1 style={{ color: "#A259FF", marginBottom: 8, textAlign: "center" }}>Welcome to Your Fashion Assistant!</h1>
        <h2 style={{ color: "#6C47B6", fontWeight: 400, fontSize: 20, marginBottom: 24, textAlign: "center" }}>
          Your personal AI-powered wardrobe and style guide.
        </h2>
        <ul style={{ color: "#6C47B6", fontSize: 16, marginBottom: 24, paddingLeft: 20 }}>
          <li style={{ marginBottom: 12 }}><b>Digitize Your Wardrobe:</b> Effortlessly upload and organize all your clothing items in one place.</li>
          <li style={{ marginBottom: 12 }}><b>Get Dressed with AI:</b> Let our smart assistant suggest daily outfits tailored to your wardrobe, the weather, and your personal style.</li>
          <li style={{ marginBottom: 12 }}><b>Discover New Looks:</b> Explore outfit ideas and style inspirations that match the clothes you already own.</li>
          <li style={{ marginBottom: 12 }}><b>Wardrobe Insights:</b> See what you wear most often, what's gathering dust, and get tips on making the most of your closet.</li>
        </ul>
        <div style={{ color: "#A259FF", fontWeight: 500, fontSize: 18, textAlign: "center", marginBottom: 24 }}>
          Ready to transform the way you get dressed?<br />
          <span style={{ color: "#FF6F91" }}>Let your wardrobe work for you!</span>
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <h3 style={{ color: "#6C47B6", marginBottom: 8 }}>Contact Us</h3>
          <p style={{ marginBottom: 8 }}>Have questions or need help? Reach out to us!</p>
          <Link href="/support" style={{ color: "#FF6F91", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>
            Go to Support Page
          </Link>
        </div>
      </div>
    </main>
  );
}