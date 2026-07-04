import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Lane from "./components/Lane/Lane";
import EmptyState from "./components/EmptyState/EmptyState";
import "./styles/App.css";

function App() {
  const [lanes, setLanes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("reddit-lanes");

    if (saved) {
      setLanes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reddit-lanes", JSON.stringify(lanes));
  }, [lanes]);

  const addLane = (subreddit) => {
    subreddit = subreddit.trim().toLowerCase();

    if (!subreddit) return;

    if (lanes.includes(subreddit)) return;

    setLanes([...lanes, subreddit]);
  };

  const removeLane = (subreddit) => {
    setLanes(lanes.filter((lane) => lane !== subreddit));
  };

  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <SearchBar onAddLane={addLane} />

        {lanes.length === 0 ? (
          <div className="lanes-container">
            <EmptyState />
          </div>
        ) : (
          <div className="lanes-grid">
            {lanes.map((lane) => (
              <Lane
                key={lane}
                subreddit={lane}
                onRemove={removeLane}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;