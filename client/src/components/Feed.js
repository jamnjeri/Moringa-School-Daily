import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';


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
    <div className="container mx-3 mt-4 w-full max-[1240px]">
    <div className="grid grid-cols-1 gap-3 px-4 mb-3 lg:grid-cols-3 drop-shadow-lg">
      {articles.map((article) => (
        <div key={article.id} className="row gx-5">
          <div className="col-md-6 mb-4">
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
            <div className="card w-96 object-cover rounded-lg bg-base-100 shadow-xl">
              <img src={article.image_url} className="img-fluid rounded-lg" />
              </div>
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
            <h5><strong>{article.title}</strong></h5>
            <p className="text-muted">Added by: {article.user_id}</p>
            <p className="text-muted">{article.likes} Likes</p>
         
            <Link to={`/article/${article.id}`} className="btn btn-primary">
  Read more
</Link>
          </div>
        </div>
      ))}

          </div>
          </div>
  );
}

export default Feed;
