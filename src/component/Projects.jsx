import { AiFillProject } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce website with product management, user authentication, and order tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/ecommerce",
    },

    {
      title: "Notes Mobile App",
      description:
        "A cross-platform mobile app for taking and managing notes with Firebase authentication.",
      tech: ["Flutter", "Firebase"],
      link: "https://github.com/yourusername/notes-app",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-start self-stretch  px-4"
      aria-labelledby="projects-heading"
    >
      <div className="flex items-center gap-2 mb-6">
        <AiFillProject className="text-xl text-[#eb0e19]" />
        <span className="text-base font-bold uppercase tracking-wide text-gray-900">
          Personal & Academic Projects
        </span>
      </div>

      <div className="flex flex-col gap-6 w-full ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm mb-2">{project.description}</p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#E86A24] hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
