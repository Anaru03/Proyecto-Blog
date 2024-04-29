import React from "react";

const Post = ({ post, onSelectPost }) => {
    const date = new Date(post.created_at);
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
        <div
            key={post.id}
            className="post-container"
            onClick={() => onSelectPost(post.id)}
        >
            <h3 className="post-title">
                <span>{post.id} :{" "}</span>
                {post.title}
            </h3>
            <p className="post-created">Creado: {dateTimeString}</p>
            {post.bannerImageB64 && (
                <img
                    src={post.bannerImageB64}
                    alt="imagen"
                    className="post-image"
                />
            )}
            <p>{post.content}</p>
        </div>
    );
};

export default Post;