import React, { useState, useEffect } from "react"
import avatar from "../assets/avatar.png"
import logo from "../assets/logo2.svg"
import articleImageOne from "../assets/article-image-one.png"
import articleImageTwo from "../assets/article-image-two.png"
import avatarImageOne from "../assets/avatar-feed-one.png"
import avatarImageTwo from "../assets/avatar-feed-two.png"
import Navbar from "./navbar"

function NewsFeed() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("https://ms-daily.onrender.com/articles")
      .then(response => response.json())
      .then(data => {
        const articles = data.articles.map(article => {
          return {
            title: article.title,
            body: article.body,
            likes: article.likes,
            dislikes: article.dislikes,
            user_ID: article.user_ID
          };
        });
        setArticles(articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <Navbar/>
    <main className="min-h-screen p-4 lg:p-0 grid grid-cols-1 gap-6 lg:grid-cols-[120px,auto]">
   
      <nav className="flex flex-col">
        <div className="lg:hidden flex justify-between items-center">
          <img src={logo} alt="logo main" className="w-32" />
          <i class="fa-solid fa-bars text-xl"></i>
        </div>
        <div className="hidden text-xl border-r-2 border-[#E6E6E6] lg:flex md:flex-col items-center justify-center text-orange gap-10 min-h-full">
          <a href="#"><i class="fa-solid fa-house"></i></a>
          <a><i class="fa-regular fa-bell"></i></a>
          <a href="#"><i class="fa-sharp fa-regular fa-bookmark"></i></a>
          <a href="#"><i class="fa-solid fa-toggle-off"></i></a>
          <a href="#"><i class="fa-regular fa-pen-to-square mt-9"></i></a>
          <img src={avatar} className="mt-28 rounded-full h-8 w-8 object-cover" />
        </div>
      </nav>
      {/* NewsFeed */}
      <article className="flex flex-col lg:flex-row gap-4">
        {/* Feed */}
        <section className="lg:w-3/4">
          <header className="hidden md:flex justify-between mt-20 lg:border-b-2 lg:border-[#E6E6E6] items-center pb-3">
            <div className="flex text-base gap-6 items-center">
              <a href="#" className="text-gray-text font-light">Following</a>
              <a href="#" className="text-black font-medium">Recommended</a>
            </div>
            <img src={logo} alt="logo" />
          </header>

{/* current article */}
          <article className="flex flex-col max-w-6xl mx-auto mt-10 lg:h-3/4 justify-around pr-2 gap-8 lg:gap-0">
            <section className="flex card gap-8">
              <div className="flex flex-col gap-2">
                <div className="card-header flex gap-2">
                  <img src={avatarImageOne} />

                  <div>
                    {articles.map(article => (
                      <div key={article.title}>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                        <p>Likes: {article.likes}</p>
                        <p>Dislikes: {article.dislikes}</p>
                        <p>User ID: {article.user_ID}</p>
                      </div>
                    ))}
                  </div>

                  <p>Amit Das</p>
                  <p>4 days ago</p>
                </div>
                <h2 className="card-title font-normal text-xl">
                  Best practices for refactoring legacy code
                </h2>
                <p className="card-content text-paragraph-text max-w-2xl">
                  It is quite common for us developers, especially those newer to the field, to have an idea that when entering a new company, a new project, they will come across clean, well-organized, well-structured, and easy-to-navigate and maintain code (or maybe just me in my naivety haha).
                </p>
                <div className="card-footer flex justify-between mt-2">
                  <div className="flex gap-4">
                    <p className="px-4 rounded-full bg-gray-pills">Web dev</p>
                    <p>3 min read</p>
                  </div>
                  <div className="flex gap-2">
                    <i class="fa-regular fa-bookmark"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
              </div>
              
              <img className="card-img object-cover rounded-md" src={articleImageOne} />
            </section>
            <section className="flex card gap-8">
              <div className="flex flex-col gap-2">
                <div className="card-header flex gap-2">
                  <img src={avatarImageTwo} />
                  <p>Amit Das</p>
                  <p>4 days ago</p>
                </div>
                <h2 className="card-title font-normal text-xl">
                  Melody mobile NewsFeed: a UI UX case study
                </h2>
                <p className="card-content text-paragraph-text max-w-2xl">
                  An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...
                </p>
                <div className="card-footer flex justify-between mt-2">
                  <div className="flex gap-4">
                    <p className="px-4 rounded-full bg-gray-pills">Web dev</p>
                    <p>3 min read</p>
                  </div>
                  <div className="flex gap-2">
                    <i class="fa-regular fa-bookmark"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
              </div>
              <img className="card-img object-cover rounded-md" src={articleImageTwo} />
            </section>
          </article>


        </section>
        {/* Recommendations */}
        <section className="flex flex-col pt-20 flex-grow px-4 items-center border-l-2 border-[#E6E6E6]">
          <div className="max-w-[300px] flex flex-col">
            <button className="rounded-full px-4 lg:px-5 py-2  bg-cta-blue text-white w-full">Subscribe to Moringa Daily Premium</button>
            <h3 className="mt-8 font-semibold text-base"><div className="h-3 w-3 rounded-full bg-orange inline-block mr-2"></div>Recently read posts</h3>
            {/* posts */}
            <div className="blogs flex flex-col gap-8 mt-8">
              <article className="blog flex flex-col gap-1">
                <div className="blog-header flex gap-3">
                  <img src={avatarImageOne} />
                  <p>JumaLawrence</p>
                </div>
                <h3 className="blog-title font-semibold">Best ways to use "Extract" utility type in Typescript</h3>
              </article>
              <article className="blog flex flex-col gap-1">
                <div className="blog-header flex gap-3">
                  <img src={avatarImageOne} />
                  <p>JumaLawrence</p>
                </div>
                <h3 className="blog-title font-semibold">Array Methods in Javascript</h3>
              </article>
              <article className="blog flex flex-col gap-1">
                <div className="blog-header flex gap-3">
                  <img src={avatarImageOne} />
                  <p>JumaLawrence</p>
                </div>
                <h3 className="blog-title font-semibold">Costly CSS Properties and How to Optimize Them</h3>
              </article>
              <p className="text-orange mt-2">See the full list</p>
            </div>
            <h3 className="mt-8 font-semibold">Recommended Topics</h3>
            <div className="pills mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <p className="bg-gray-pills rounded-full px-2 py-2 min-w-max">Technology</p>
              <p className="bg-gray-pills rounded-full px-2 py-2 min-w-max">AI</p>
              <p className="bg-gray-pills rounded-full px-2 py-2 min-w-max">UI/UX</p>
              <p className="bg-gray-pills rounded-full px-2 py-2 min-w-max">Web development</p>
              <p className="bg-gray-pills rounded-full px-2 py-2 min-w-max">Devops</p>
              <p className="bg-gray-pills rounded-full px-2 py-2 min-w-max">Frontend</p>
            </div>
          </div>
        </section>
      </article>
    </main>
    </div>
  )
}

export default NewsFeed
