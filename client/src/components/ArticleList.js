import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import IndArticle from "./IndArticle";

function ArticleList( {loggedIn, handleLogin, handleLogout, user} ) {
      // Store the fetched articles
  const [articles, setArticles] = useState([]);

  // Keep track of if the view button is set or not
  const [showComponent, setShowComponent] = useState(false);

  // Keep track of the selected recipe
  const [selectedArticle, setSelectedArticle] = useState([]);

    // Conditionally Render the Recipe List or a specific Recipe
    const showComponentHandler = (article) => {
        setShowComponent(!showComponent);
        console.log(showComponent);
        setSelectedArticle(article);
    };

      // Enable Back Button
    const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

    useEffect(() => {
        // Fetch the Articles
        fetch("http://localhost:3000/articles")
        .then((response) => response.json())
        .then((data) => {
          setArticles(data);
          console.log(data)
        })
        .catch((error) => {
          console.log("Error fetching articles: ", error);
        });
    }, []);
    

    return (
        <div className='w-full h-full flex flex-col items-center backdrop-blur-lg '>
            <h1 className='text-black text-4xl underline mt-9'>ARTICLES</h1>
            <div className="flex justify-between w-full">
                <button className="bg-yellow-500 hover:text-white text-black text-xl py-2 px-4 rounded mt-4 rounded-full mt-8">
                    <Link to="/addArticle">+Add Article</Link>
                </button>
            </div>
            <div className='container mx-auto mt-6 bg-white'>
                <div className='flex flex-wrap justify-center'>
                    {articles.length > 0 ? (
                    articles.map((article) => (
                        <div key={article.id} className='sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                                <img className='w-full' src={article.image_url} alt='Article'/>
                                <div className='px-6 py-4'>
                                    <div className='text-center text-xl mb-2'>{article.title}</div>
                                </div>
                                <div className='px-6 py-4 text-center'>
                                    <button className='bg-yellow-500 hover:text-white text-black align-middle text-3xl py-2 px-4 rounded mt-4 rounded-full' onClick={() => showComponentHandler(article)}>view</button>
                                </div>
                            </div>
                        </div>
                    ))
                    ) : <h2>No Articles Found</h2>}
                </div>
            </div>
        </div>
  )
}

export default ArticleList