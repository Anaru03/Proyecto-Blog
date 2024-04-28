import React, { useState, useEffect } from 'react';
import './App.css';

function Header() {
  return (
    <nav>
      <div className="contenedor contenedor-nav">
        <img
          className="nav-logo"
          src="src/IMG/escudo.jpg"
          alt="Imagen del logo"
        />
      </div>
    </nav>
  );
}

function Menu() {
  return (
    <div className="nav-table-container">
      <ul className="nav-menu">
        <li><a>Crear Post</a></li>
        <li><a>Autores</a></li>
        <li><a>Clubs</a></li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="Blog-footer">
        <small>Ruth´s Blog &copy;</small>
      </div>
    </footer>
  );
}

function Post({ id, title, content, created_at, images_content, author_name }) {
  const date = new Date(created_at);
  const dateString = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  const timeString = date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const dateTimeString = `${dateString} a las ${timeString}`;

  return (
    <article className="post">
      <div className="Post-Subido">
      </div>
      <div className="contenido-post">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{dateTimeString}</p>
        <img src={author_name} alt="imagen" />
        <p>{images_content}</p>
      </div>
    </article>
  );
}

function Posts({ posts }) {
  return (
    <section className="posts">
      <div className="contenedor contenedor-posts">
        {posts.map(post => (
          <Post
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
    </section>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:22428/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Posts posts={posts} />
      <Footer />
    </>
  );
}

export default App;
