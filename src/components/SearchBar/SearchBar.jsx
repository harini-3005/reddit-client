import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
    const [subreddit, setSubreddit] = useState("");

    const handleAdd = () => {
        console.log(subreddit);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter subreddit name..."
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default SearchBar;