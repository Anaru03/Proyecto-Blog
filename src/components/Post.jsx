import React from 'react';
import '@styles/Post.css';

const Post = ({ id, title, content, created_at, images_content, author_name }) => {
    const date = new Date(created_at);
    const dateString = date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    const timeString = date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const dateTimeString = `${dateString} a las ${timeString}`;

    return (
        <article className="post">
            <div className="post-Subido"></div>
            <div className="contenido-post">
                <h2>{id}: {title}</h2>
                <p>{content}</p>
                <p>{dateTimeString}</p>
                <img src={images_content} alt="imagen" />
                <p className="post-author">Autor: {author_name}</p>
            </div>
        </article>
    );
};

export default Post;
