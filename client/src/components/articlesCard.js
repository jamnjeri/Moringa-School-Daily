import React from "react";

export default function Articles() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg" alt="placeholder"/>
                </figure>
            <div className="card-body">
                <h2 className="card-title">Technical Articles!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}