import Post from "@components/Post";
import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import '@styles/PostsList.css';

const PostsList = () => {
    const {response, error, isLoading} = useApi('http://127.0.0.1:22428/posts', 'get');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (response) {
            setPosts(response);
        }
    }, [response]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (response === null) {
        return <div>Error: {error}</div>
    }

    if (posts.length === 0) {
        return <div>Tablero sin posts</div>
    }

    return (
        <div className="posts-list">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};
export default PostsList;