import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Redux toolkit", category: "frontend" },


  // Backend / API
  { name: "Node.js", category: "backend" },
  { name: "Fastify", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Cassandra", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "RabbitMQ (RPC)", category: "backend" },
  { name: "OAuth 2.0 / JWT / 2FA", category: "backend" },

  // IoT / Voice / Automation
  { name: "Alexa Smart Home Skill", category: "iot" },
  { name: "MQTT / EMQX", category: "iot" },
  { name: "Gateway Simulation", category: "iot" },

  // Cloud / DevOps
  { name: "CI/CD", category: "cloud" },
  { name: "CI/CD Pipelines", category: "cloud" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
];

const categories = ["all", "frontend", "backend", "iot", "cloud", "tools"];

const getCategoryLabel = (category) => {
  if (category === "iot") return "IoT";
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="gradient-border bg-card p-6 rounded-lg shadow-xs card-hover text-left"
            >
              <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                {getCategoryLabel(skill.category)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
