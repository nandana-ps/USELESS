// src/components/PersonalitySelection.jsx
import { motion } from "framer-motion";
import "../App.css";

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

export default function PersonalitySelection({ onSelect }) {
  return (
    <div className="personality-selection">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🤖 Choose Your Bot’s Personality
      </motion.h2>

      <div className="personality-list">
        {personalities.map((p) => (
          <motion.div
            key={p.id}
            className="personality-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(p.id)}
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

