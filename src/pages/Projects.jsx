import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills.",
      image: "/images/project1.png",
    },
    {
      title: "E-commerce shop",
      description: "An e-commerce website built with React and Tailwind CSS.",
      image: "/images/project2.jpg",
    },
    {
      title: "Social Media App",
      description:
        "A full-stack social media application with real-time features.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
