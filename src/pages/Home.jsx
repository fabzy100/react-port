import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";

const Home  = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills.",
      image: "/images/project1.png",
    },
    {
      title: "E-commerce Store",
      description: "An e-commerce website built with React and Tailwind CSS.",
      image: "/images/project2.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto pt-16 px-6">
        <section className="mt-16">
          <ProfileCard />
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-6">Latest Projects</h2>
          <p className="text-gray-600 mb-8">
            Here are some of my recent works:
          </p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
