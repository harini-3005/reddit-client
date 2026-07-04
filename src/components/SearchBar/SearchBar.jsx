import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onAddLane }) {
    const [subreddit, setSubreddit] = useState("");

    const handleSubmit = () => {
        if (!subreddit.trim()) return;

        onAddLane(subreddit);

        setSubreddit("");
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Enter subreddit..."
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
            />

            <button onClick={handleSubmit}>
                Add Lane
            </button>
        </div>
    );
}

export default SearchBar;