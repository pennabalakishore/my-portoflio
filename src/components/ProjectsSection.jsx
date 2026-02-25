import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built this portfolio to showcase my backend, frontend, and IoT work with a responsive React UI, category-based skills section, and direct contact workflow.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "",
    codeUrl: "",
    status: "Current",
  },
  {
    title: "Smart Home Voice Control Platform",
    description:
      "Built an Alexa-enabled automation layer that connects home devices through MQTT topics and Fastify services for real-time control and status sync.",
    technologies: [
      "Node.js",
      "Fastify",
      "Alexa Skill Kit",
      "MQTT",
      "Redis",
      "RabbitMQ",
    ],
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
              className="gradient-border bg-card p-6 rounded-xl card-hover text-left flex flex-col"
            >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
