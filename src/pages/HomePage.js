// src/components/HomePage.js
import React from 'react';

function HomePage() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   // Fetch articles from backend API when component mounts
  //   fetch('/api/articles')
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data))
  //     .catch((error) => console.error('Error fetching articles:', error));
  // }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        {/* {articles.length === 0 ? (
          <p>No articles yet. Stay tuned!</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="article">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))
        )} */}
      </div>
    </div>
  );
}

export default HomePage;
