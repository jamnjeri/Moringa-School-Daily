import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('http://localhost:3000/articles');
        const articlesData = await response.json();
        setArticles(articlesData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      {articles.map((article) => (
        <div key={article.id} className="row gx-5">
          <div className="col-md-6 mb-4">
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
              <img src={article.image} className="img-fluid" />
              <Link to={`/article/${article.id}`}>
                <div className="mask"
                  style={{
                    background: ' #F9500D'
                  }}></div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
            <h4><strong>{article.title}</strong></h4>
            <p className="text-muted">{article.user_id}</p>
            <p className="text-muted">{article.likes} likes</p>
         
            <Link to={`/article/${article.id}`} className="btn btn-primary">Read more</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
