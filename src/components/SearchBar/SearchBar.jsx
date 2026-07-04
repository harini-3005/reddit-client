import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter subreddit name..."
            />

            <button>Add</button>
        </div>
    );
}

export default SearchBar;