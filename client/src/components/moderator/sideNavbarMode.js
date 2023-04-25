import React from "react";

function SideNavbarMode() {

    return (
        <div>
            <div>
                <div className="flex">
                    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <h2 className="text-xl font-bold text-white">Moderator Dashboard</h2>
                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                    <button
                                        type="submit"
                                        className="p-2 focus:outline-none focus:ring"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </button>
                                </span>

                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                            <span className="text-gray-100">Home</span>
                                        </a>
                                    </li>
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                />
                                            </svg>
                                            <span className="text-gray-100">Articles</span>
                                        </a>
                                    </li>
                                  
                                   
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>

                                            <span className="text-gray-100">Profile</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-4 mt-4 bg-neutral-200 dark:bg-neutral-700">
                        <div className="grid grid-cols-1 gap-3 mb-3 lg:grid-cols-3"
                        >
                            <div className="w-full px-4 py-5 bg-white rounded-lg shadow"
                            >
                                <div className="text-sm font-medium text-gray-500 truncate"
                                    style={{
                                        background: 'linear-gradient(to top, #101F3C, white, white, white, white, white)'
                                    }}>
                                    Published Articles
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    <Link to="/">
                                        Published
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-500 truncate"
                                    style={{
                                        background: 'linear-gradient(to top, #101F3C, white, white, white, white, white)'
                                    }}>
                                    New Articles
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    <Link>
                                        Pending Articles
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-500 truncate"
                                    style={{
                                        background: 'linear-gradient(to top, #101F3C, white, white, white, white, white)'
                                    }}>
                                    Rejected Articles
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    <Link>
                                        Rejected
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Articles />
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    )
}

export default SideNavbarMode