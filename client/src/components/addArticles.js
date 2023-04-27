import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';


function AddArticles({ user }) {

    const navigate = useNavigate();

    const [article, setArticle] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();

        data.append("article[title]", event.target.title.value);
        data.append("article[body]", event.target.body.value);
        data.append("article[user_id]", user.id);
        data.append("article[image]", event.target.image.files[0]);
        submitToAPI(data);
    }

    function submitToAPI(data) {
        fetch("http://localhost:3000/articles", {
            method: "POST",
            body: data,
        })
        .then(response => response.json())
        .then(data => {
            setArticle(data.image_url);
            navigate("/articleList")
        })
        .catch((error) => console.error(error))
    }
  return (
    <div>
       
        <button className="text-center py-2 px-4 border border-transparent rounded-md text-white bg-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4 mb-4">
                    <NavLink to="/articleList" >Back</NavLink> 
        </button>
        <div className="w-full max-w-sm mx-auto">
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
                    <input type="text" name="full_name" id="title" placeholder="Enter title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                {/* Body */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="body">Body</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="body"
                        name='body'
                        placeholder="Enter body"
                    />
                </div>

                {/* Image */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="file">Upload a Image</label>
                    <input type="file" name="image" id="image"/>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button type="submit" className="text-center py-2 px-4 border border-transparent rounded-md text-white bg-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4 mb-4">Create Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddArticles