import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

export default function Hero() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ricardolimaa29/repos")
      .then(res => res.json())
      .then(data => {
        const langs = data
          .map(repo => repo.language)
          .filter(Boolean);

        // remove duplicados
        const unique = [...new Set(langs)];

        setSkills(unique);
      });
  }, []);

  return (
    <section className="hero">

      <div className="hero-bg"></div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img src={profile} alt="Ricardo" className="profile" />

        <h1>Ricardo Lima</h1>
        <h2>Desenvolvedor de Software</h2>


        <div className="buttons">
          <a href="#projects">Projetos</a>
          <a href="#footer">Contato</a>
        </div>

      </motion.div>

    </section>
  );
}
