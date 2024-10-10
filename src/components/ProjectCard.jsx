    import React from "react";

    const ProjectCard= ({ title, description, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  