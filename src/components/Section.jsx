import Card from "./Card";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle }) {
  return (
    <section id={id} className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h2>

      <p>{subtitle}</p>

      <div className="cards">
        <Card 
          title="Sistema de Automação"
          desc="Desenvolvimento com Python e SQL."
        />

        <Card 
          title="Apps com Flet"
          desc="Interfaces modernas e funcionais."
        />
      </div>
    </section>
  );
}