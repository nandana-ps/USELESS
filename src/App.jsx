import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import chatbotImg from "./assets/chatbot.jpeg"; // adjust path if needed

export default function SinglePageApp() {
  const [personality, setPersonality] = useState("deep-diver");

  // Personality-specific greetings
  const greetings = {
    "deep-diver": {
      title: "🌊 Deep Diver",
      message:
        "Let's plunge into the depths of thought and explore every hidden detail...",
    },
    philosopher: {
      title: "💭 Sage Orion",
      message:
        "Let’s walk through the garden of wisdom and ponder life’s deepest mysteries...",
    },
  };

  const personalities = [
    {
      id: "deep-diver",
      name: "Deep Diver",
      desc: "Explores the depths of every idea, uncovering hidden truths beneath the surface 🌊",
    },
    {
      id: "philosopher",
      name: "Sage Orion",
      desc: "A traveler of ideas, sharing timeless wisdom from the depths of the mind 💭",
    },
  ];

  const greeting = greetings[personality];

  return (
    <div className="home-page" style={{ padding: "20px", textAlign: "center" }}>
      {/* ===== Welcome Section ===== */}
      <div className="welcome-screen">
        <div className="decorative-blob top-left"></div>
        <div className="decorative-blob bottom-right"></div>

        <motion.img
          src={chatbotImg}
          alt="Chatbot mascot"
          className="chatbot-image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.3 }}
          draggable={false}
          style={{ width: "200px", borderRadius: "12px" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          🌟 Welcome to <span className="brand">Windbag AI</span> 🌟
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Your delightful overthinking & philosophical companion.
        </motion.p>
      </div>

      {/* ===== Personality Selection ===== */}
      <div className="personality-picker-inline" style={{ margin: "20px 0" }}>
        <div className="personality-list-inline" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          {personalities.map((p) => (
            <motion.div
              key={p.id}
              className={
                "personality-option-inline" +
                (personality === p.id ? " selected" : "")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setPersonality(p.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                background: personality === p.id ? "#e3f2fd" : "#f8faff",
                border: personality === p.id ? "2px solid #1e88e5" : "2px solid transparent",
                fontWeight: 500,
              }}
            >
              {p.name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Chat Window ===== */}
      <div
        className="chat-screen"
        style={{
          background: "#f8f9fa",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{greeting.title}</h2>
        <p style={{ fontStyle: "italic", textAlign: "center", color: "#555" }}>
          {greeting.message}
        </p>

        {/* Chat bubble example */}
        <div
          className="bot-message"
          style={{
            background: "#e3f2fd",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          Hi there! I’m {greeting.title}. What’s on your mind today?
        </div>

        {/* User input area */}
        <div style={{ marginTop: "15px", display: "flex", gap: "8px" }}>
          <input
            type="text"
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "8px 16px",
              background: "#1e88e5",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

