import React from "react";
import { Link } from "react-router-dom";

export default function RoleLogin() {

    return (
        <section className="mt-11 bg-neutral-200">


                <div className="grid grid-cols-1 gap-1 mb-1 lg:grid-cols-3">
                

                        <div className="card w-96 bg-base-100 shadow-xl ml-11">
                            <figure className="px-10 pt-10">
                                <img src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Admin!</h2>
                                <p>You're One Step Closer to Power: Admin Login Page</p>
                                <div className="card-actions">
                                    <Link
                                        to="/adminLogin"
                                        className="mb-3 inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        style={{
                                            background: ' #F9500D'
                                        }}
                                    >Login</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Moderator!</h2>
                                <p>Get Ready to Take Control: Moderator Login Here</p>
                                <div className="card-actions">
                                    <Link
                                        to="/moderatorLogin"
                                        className="mb-3 inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        style={{
                                            background: ' #F9500D'
                                        }}
                                    >Login</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Technical Writer!</h2>
                                <p>Your Personal Oasis: Login Page</p>
                                <div className="card-actions">
                                    <Link
                                        to="/login"
                                        className="mb-3 inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        style={{
                                            background: ' #F9500D'
                                        }}
                                    >Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
               
           
        </section>
    )
}