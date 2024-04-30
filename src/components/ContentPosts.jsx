import Posts from '@components/Post';
import '@styles/PostsContent.css';
import useApi from '../hooks/useApi';
import React, { useEffect, useState } from 'react';

const ContentPosts = () => {
    const { response, error, isLoading } = useApi('http://127.0.0.1:22428/posts', 'get');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if (response) {
            setPosts(response.data);
        }
    }, [response]);

    if (isLoading) {
        return <div>Pensando...</div>;
    }

    if (response === null) {
        return <div>Hay un error: {error.message}</div>;
    }

    if (posts.length === 0) {
        return <div>No hay posts</div>;
    }

    
    return (
        <div className="container">
            <h2>Posts</h2>
            <div className="posts">
                {posts.map((post) => (
                    <Posts
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        created_at={post.created_at}
                        images_content={post.images_content}
                        author_name={post.author_name}
                    />
                ))}
            </div>
        </div>
    );
};


export default ContentPosts;