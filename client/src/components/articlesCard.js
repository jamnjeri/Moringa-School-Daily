import React from "react";
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Articles() {
    return (
        <div className="container mx-4 mt-4">
            <div className="grid grid-cols-1 gap-3 mb-3 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg" alt="placeholder" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Technical Articles!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg" alt="placeholder" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Technical Articles!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg" alt="placeholder" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Technical Articles!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg" alt="placeholder" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Technical Articles!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg" alt="placeholder" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Technical Articles!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="text-center py-2 px-4 border border-transparent rounded-md text-white bg-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4 mb-4">
                    <NavLink to="/addArticle" >+ Article</NavLink> 
            </button>
        </div>
    );
}