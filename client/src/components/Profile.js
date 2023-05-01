import { useState, useEffect } from 'react';
import { IoSettingsOutline, IoBookmarksOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

function Profile() {
      const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me')
      .then(response => response.json())
      
      .then(data => console.log(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#fafbfc]">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src="https://source.unsplash.com/random"
            alt="user"
            className="w-24 h-24 rounded-full pl-2 pt-2"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-[#F9500D] font-semibold">
            Profile
          </div>
          <div className="mt-2">
            {/* <h1 className="text-gray-900 text-3xl font-bold">{user.username}</h1>
            <p className="text-gray-600 text-sm">{user.email}</p>*/}
            <p className="text-gray-600 text-lg">
              I am an avid technophile who is always on the lookout for the latest gadgets and software. <br />When I'm not writing or tinkering with tech, you can find me hiking in the great outdoors or indulging in my love of cooking.
            </p>
          </div>
          <div className="mt-6 flex justify-between">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#F9500D] text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              <IoSettingsOutline size={24} />
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#F9500D] text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              <IoBookmarksOutline size={24} />
              <span>Bookmarks</span>
            </button>
            <button  className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#F9500D] text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              <MdLogout size={24} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default Profile