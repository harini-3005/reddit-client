const mockData = {
    reactjs: [
        {
            id: "1",
            title: "React 19 is officially released 🚀",
            author: "react_team",
            ups: 12450,
            num_comments: 842,
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            url: "https://react.dev",
        },
        {
            id: "2",
            title: "Best React Project Ideas for Beginners",
            author: "frontend_dev",
            ups: 8450,
            num_comments: 234,
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            url: "https://react.dev",
        },
    ],

    javascript: [
        {
            id: "3",
            title: "JavaScript ES2026 Features Explained",
            author: "js_master",
            ups: 5300,
            num_comments: 150,
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            url: "https://developer.mozilla.org/",
        },
        {
            id: "4",
            title: "10 JavaScript Interview Questions",
            author: "webdev",
            ups: 7800,
            num_comments: 401,
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            url: "https://developer.mozilla.org/",
        },
    ],

    programming: [
        {
            id: "5",
            title: "Why Every Developer Should Learn Git",
            author: "opensource",
            ups: 4200,
            num_comments: 188,
            thumbnail:
                "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            url: "https://github.com",
        },
    ],
};

export async function fetchPosts(subreddit) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const posts = mockData[subreddit.toLowerCase()];

    if (!posts) {
        throw new Error("Subreddit not found");
    }

    return posts;
}