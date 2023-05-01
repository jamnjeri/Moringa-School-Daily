import React, { useState, useEffect } from 'react';

function AddCategories() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, description })
            });

            if (!response.ok) {
                throw new Error('Failed to create category');
            }

            setName('');
            setDescription('');

            // Optionally, you could fetch the updated list of categories
            // and update the state of your app to reflect the new category
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div class="container h-full p-10">

            <form className="w-11" onSubmit={handleSubmit}>
                <div className="mb-4 w-auto">
                    <label className="block text-gray-700 font-normal mb-2" htmlFor="title">Category    Name</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        className="px-3 py-2 rounded-md border border-gray-400 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-normal mb-2" htmlFor="title">Description</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Description"
                        className="px-3 py-2 rounded-md border border-gray-400 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <button
                    class="mb-3 inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    style={{
                        background: ' #F9500D'
                    }}>
                    Create
                </button>
            </form>

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
        </div>
    );
}

export default AddCategories;
