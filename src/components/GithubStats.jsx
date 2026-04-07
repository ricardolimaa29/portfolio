import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function GithubStats() {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
const data = Object.keys(languages).map(lang => ({
    name: lang,
    value: languages[lang]
}));
  useEffect(() => {
    fetch("https://api.github.com/users/ricardolimaa29/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data);

        const langCount = {};

        data.forEach(repo => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });

        setLanguages(langCount);
      });
  }, []);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  return (
    <section className="github">
      <h2>GitHub Stats</h2>

      <div className="stats">
        <div className="stat">
          <h3>{repos.length}</h3>
          <p>Repositórios</p>
        </div>

        <div className="stat">
          <h3>{totalStars}</h3>
          <p>Stars</p>
        </div>
      </div>
    

      <div className="languages">
        {Object.keys(languages).map((lang, i) => (
          <div key={i} className="lang">
            <img src={getIcon(lang)} alt={lang} />
            <span>{lang}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 🔥 ÍCONES REAIS (devicon CDN) */
function getIcon(lang) {
  const icons = {
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    Shell: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  };

  return icons[lang] || "https://cdn-icons-png.flaticon.com/512/5968/5968342.png";
}