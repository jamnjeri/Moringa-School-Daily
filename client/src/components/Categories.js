import React, { useState, useEffect } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://localhost:3000/categories');
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div className="card" key={categories.id}>
          <div className="card-body">
            <h5 className="card-title">{categories.name}</h5>
            <p className="card-text">{categories.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
