import React, { useEffect, useState } from 'react';
import Posts from '@components/Post';
import useApi from '../hooks/useApi';
import '@styles/PostsContent.css';

const ContentPosts = () => {
    const { response, error, isLoading } = useApi('http://127.0.0.1:22428/posts', 'get');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if (response) {
            setPosts(response.data);
        }
    }, [response]);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!posts || posts.length === 0) {
        return <div>No hay posts disponibles</div>;
    }
    
    return (
        <div className="container">
            <h2>Posts</h2>
            <div className="posts">
                {posts.map((post) => (
                    <Posts
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
