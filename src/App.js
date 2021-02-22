import React, { useState, useEffect } from "react";

import "./styles.css";

const portfolio = [
  {
    name: "Bill Management",
    category: ["all", "cat1", "cat2"]
  },
  {
    name: "Bill Management2",
    category: ["all", "cat1", "cat2"]
  },
  {
    name: "Bill Management3",
    category: ["all", "cat1", "cat3"]
  },
  {
    name: "Bill Management4",
    category: ["all", "cat1", "cat2"]
  },
  {
    name: "Bill Management5",
    category: ["all", "cat1", "cat3"]
  }
];

function App() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  console.table(projects);

  return (
    <>
      <div className="portfolio__labels">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "cat1"}
          onClick={() => setFilter("cat1")}
        >
          cat1
        </a>
        <a
          href="/#"
          active={filter === "cat2"}
          onClick={() => setFilter("cat2")}
        >
          cat2
        </a>
        <a
          href="/#"
          active={filter === "cat3"}
          onClick={() => setFilter("cat3")}
        >
          cat3
        </a>
      </div>
      <div className="portfolio__container">
        {projects.map((item) =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div>
    </>
  );
}

export default App;
