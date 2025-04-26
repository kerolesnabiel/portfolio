import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Microservices Platform",
    description:
      "Distributed platform with user, product, cart, order, payment, and notification services.",
    link: "https://github.com/kerolesnabiel/ecommerce-microservices",
    image: "/projects/ecommerce.webp",
    tech: [
      ".NET 9",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "SignalR",
      "RabbitMQ",
      "Stripe",
      "Docker",
      "JWT",
    ],
  },
  {
    title: "Social Media API",
    description:
      "RESTful API with authentication, post/comment/follow features, and admin panel.",
    link: "https://github.com/kerolesnabiel/SocialMediaAPI",
    image: "/projects/social-api.webp",
    tech: [
      "ASP.NET Web API",
      "SQL Server",
      "EF Core",
      "ASP.NET Identity",
      "Clean Architecture",
      "CQRS",
    ],
  },
  {
    title: "Real-Time Chat API",
    description:
      "Chat backend API with SignalR, JWT authentication, and real-time updates.",
    link: "https://github.com/kerolesnabiel/RealTimeChatAPI",
    image: "/projects/chat-api.webp",
    tech: ["ASP.NET Core", "WebSockets", "SignalR", "SQL Server", "JWT"],
  },
  {
    title: "Real-Time Chat WebApp",
    description:
      "Frontend chat app with profile management, search, and real-time messaging.",
    link: "https://github.com/kerolesnabiel/RealTimeChatWebApp",
    image: "/projects/chat-web.webp",
    tech: ["React", "TypeScript", "TailwindCSS", "SignalR"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and TailwindCSS to showcase projects, and skills — made with vibe coding.",
    link: "https://github.com/kerolesnabiel/portfolio",
    image: "/projects/portfolio.webp",
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 sm:px-6 lg:px-10 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work, showcasing problem-solving, design, and
          full-stack development skills.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group hover:shadow-orange-500/40 transition duration-300 ease-in-out"
          >
            <div className="overflow-hidden h-48 bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
