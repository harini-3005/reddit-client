import "./PostCard.css";

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
}

function PostCard({ post }) {
    return (
        <a
            className="post-card"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={post.thumbnail}
                alt={post.title}
                onError={(e) => {
                    e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/5968/5968292.png";
                }}
            />

            <div className="post-info">
                <h3>{post.title}</h3>

                <p className="author">
                    👤 {post.author}
                </p>

                <div className="stats">
                    <span>👍 {formatNumber(post.ups)}</span>
                    <span>💬 {formatNumber(post.num_comments)}</span>
                </div>

                <span className="read-more">
                    Read More →
                </span>
            </div>
        </a>
    );
}

export default PostCard;