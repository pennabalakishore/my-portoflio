import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built this portfolio to showcase my backend, frontend, and IoT work with a responsive React UI, category-based skills section, and direct contact workflow.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: "/portfolio-homepage.png",
    liveUrl: "",
    codeUrl: "",
    status: "Current",
  },
  {
    title: "Smart Home Voice Control Platform",
    description:
      "Built an Alexa-enabled automation layer that connects home devices through MQTT topics and Fastify services for real-time control and status sync.",
    technologies: [
      "AWS Lambda",
      "React",
      "Alexa Developer Console",
      "Node.js",
      "PostgreSQL",
      "MQTT",
      "DynamoDB",
    ],
    image: "/smart-home-dashboard.png",
    liveUrl: "",
    codeUrl: "",
    status: "Private",
  },
  {
    title: "Auth & User Security Microservice",
    description:
      "Designed a secure authentication service with OAuth2, JWT rotation, and 2FA. Added caching and rate-limit guards for reliable high-volume logins.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "JWT",
      "OAuth2",
    ],
    liveUrl: "",
    codeUrl: "",
    status: "Production",
  }
];

export const ProjectsSection = () => {
  const [lightbox, setLightbox] = useState(null);
  const [visible, setVisible] = useState(false);

  const openLightbox = (project) => {
    setLightbox(project);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeLightbox = useCallback(() => {
    setVisible(false);
    setTimeout(() => setLightbox(null), 500);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => e.key === "Escape" && closeLightbox();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A selection of backend, microservice, and IoT products focused on
          performance, security, and practical user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="gradient-border bg-card rounded-xl card-hover text-left flex flex-col overflow-hidden"
            >
              {project.image && (
                <div
                  className="w-full h-48 overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-secondary/70 text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 pt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Live: NDA</span>
                )}

                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Code: Private</span>
                )}
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
            style={{ opacity: visible ? 1 : 0 }}
          />

          <div
            className="relative w-[60vw] max-h-[80vh] transition-all duration-500 ease-in-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={lightbox.image}
              alt={`${lightbox.title} screenshot`}
              className="w-full h-auto rounded-xl shadow-2xl object-contain"
            />

            <p className="text-center text-white/80 text-sm mt-3 font-medium">
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
