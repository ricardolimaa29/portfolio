import { motion } from "framer-motion";

export default function Card({ title, desc }) {
  return (
  <motion.div 
    onClick={() => setSelected(proj)}
    className="project-card"
  ></motion.div>

  );
}