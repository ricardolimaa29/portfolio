import { motion } from "framer-motion";
import { useEffect,useState } from "react";

import project3 from "../assets/senai.png";
import project4 from "../assets/jbs.jpg";
import project5 from "../assets/barbearia2.png";
import project6 from "../assets/app-fabrica.png";


const baseProjects = [
  {
    title: "App - Escola Fabrica de Programadores",
    desc: "Sistema com Python e SQL",
    image: project6,
    repo: "PROJETO_APP"
  },
  {
    title: "YoutubeDownloader",
    desc: "Download de vídeos",
    image: project4,
    repo: "YouTuDownload2v"
  },
  {
    title: "Automação de chamadas",
    desc: "Automatização no SENAI",
    image: project3,
    repo: "calls---RPA"
  },
  {
    title: "Sistema de Barbearia",
    desc: "App para barbearias",
    image: project5,
    repo: "barbersyst"
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    Promise.all(
      baseProjects.map(p =>
        fetch(`https://api.github.com/repos/ricardolimaa29/${p.repo}`)
          .then(res => res.json())
      )
    ).then(data => setReposData(data));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>

      <div className="projects-grid">
        {baseProjects.map((proj, index) => {
          const repo = reposData[index];

          return (
            <motion.div 
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={proj.image} />

              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>

                {/* BADGE LINGUAGEM */}
                {repo && (
                  <span className="badge">
                    {repo.language}
                  </span>
                )}

                <a 
                  href={`https://github.com/ricardolimaa29/${proj.repo}`} 
                  target="_blank"
                >
                  GitHub →
                </a>
              </div>
              {selected && (
                  <div className="modal" onClick={() => setSelected(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                      
                      <h2>{selected.title}</h2>
                      <p>{selected.desc}</p>

                      <img src={selected.image} />

                      <a href={selected.github} target="_blank">
                        Ver no GitHub
                      </a>

                    </div>
                  </div>
                )}
            </motion.div>
            
          );
        })}
      </div>
    </section>
  );
}