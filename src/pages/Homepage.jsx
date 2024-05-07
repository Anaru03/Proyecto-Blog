
import ContentPosts from '@components/ContentPosts';
import '@styles/Homepage.css';

const Homepage = () => {
    
    return (
        <div className="container">
            <h1>⚡ Bienvenido a Potterhead´s blog ⚡</h1>
            <p>Este es un blog donde podrás encontrar información sobre el mundo de Harry Potter.</p>
            <ContentPosts />
        </div>
  );
};

export default Homepage;