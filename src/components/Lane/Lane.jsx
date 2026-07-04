import { useEffect, useState } from "react";
import { fetchPosts } from "../../services/redditApi";
import PostCard from "../PostCard/PostCard";
import "./Lane.css";

function Lane({ subreddit, onRemove }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPosts() {
            try {
                setLoading(true);

                const data = await fetchPosts(subreddit);

                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, [subreddit]);

    return (
        <div className="lane">

            <div className="lane-header">
                <h2>r/{subreddit}</h2>

                <button onClick={() => onRemove(subreddit)}>
                    ✕
                </button>
            </div>

            {
                loading &&
                <div
                    style={{
                        padding: "20px",
                        textAlign: "center",
                        fontWeight: "bold"
                    }}
                >
                    <div
                        className="loading"
                    >
                        Loading posts...
                    </div>
                </div>
            }

            {error && <p>{error}</p>}

            {!loading &&
                posts.slice(0, 10).map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                    />
                ))}
        </div>
    );
}

export default Lane;