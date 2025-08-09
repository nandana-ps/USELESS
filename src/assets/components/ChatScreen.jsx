// src/components/ChatScreen.jsx
import React from "react";
import "../App.css";

export default function ChatScreen({ personality }) {
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

  // Pick greeting based on personality
  const greeting = greetings[personality] || {
    title: "🤖 Chatbot",
    message: "Hello! Let's start chatting.",
  };

  return (
    <div className="chat-screen">
      <h1>{greeting.title}</h1>
      <p className="personality-intro">{greeting.message}</p>

      {/* Chat area placeholder */}
      <div className="chat-area">
        <div className="bot-message">
          Hi there! I’m {greeting.title}. What’s on your mind today?
        </div>
        {/* Here you can later add user input and bot replies */}
      </div>
    </div>
  );
}
