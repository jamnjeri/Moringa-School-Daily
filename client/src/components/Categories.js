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
    <card className="h-screen grid-cols-4 col-span-5">
      {categories.map((category) => (
        <div className="card" key={category.id}>
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
            <p className="card-text">{category.description}</p>
          </div>
        </div>
      ))}
    </card>
  );
}

export default Categories;
