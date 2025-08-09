// src/components/WelcomeScreen.jsx

import { motion } from "framer-motion";
import "./App.css";
import chatbotImg from "./assets/chatbot.jpeg";  // Ensure this image exists in src/assets/

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      {/* Chatbot image with entrance animation */}
      <motion.img
        src={chatbotImg}
        alt="Chatbot mascot"
        className="chatbot-image"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.4 }}
        draggable={false}
      />

      {/* Welcome title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="welcome-title"
      >
        🌟 Welcome to <span className="brand">Windbag AI</span> 🌟
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="welcome-subtitle"
      >
        Your delightful overthinking & philosophical companion.
      </motion.p>

      {/* Let’s Chat button with hover and tap scale animations */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 12px #339dffcc" }}
        whileTap={{ scale: 0.95 }}
        className="start-btn"
        onClick={onStart}
        type="button"
      >
        Let’s Chat 💬
      </motion.button>
    </div>
  );
}
