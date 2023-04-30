import React, { useState, useEffect } from 'react';
import Feed from './Feed';

function ArticleCard(article) {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    async function fetchArticleData() {
      try {
        const response = await fetch(`http://localhost:3000/article/${article.id}`);
        const data = await response.json();
        setArticleData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchArticleData();
  }, [article.id]);

  if (!articleData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3">
      <img src={articleData.image_url} className="card-img-top" alt={articleData.title} />
      <div className="card-body">
        <h5 className="card-title">{articleData.title}</h5>
        <p className="card-text">{articleData.body}</p>
        <p className="card-text"><small className="text-muted">{articleData.user_id}</small></p>
        <p className="card-text"><small className="text-muted">{articleData.likes} likes</small></p>
        
      </div>
    </div>
  );
}

export default ArticleCard;
