import React from "react";
const ProfileCard = () => {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-16">
        <div className="flex justify-center">
          <img
            src="/images/projectProPic.jpg"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg object-cover"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-900">Azeez Faborode</h2>
          <p className="text-gray-600">Full Stack Developer</p>
          <p className="mt-4 text-gray-500">
            I specialize in building high-performance web applications and
            scalable APIs.
          </p>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  