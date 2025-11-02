export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              With strong experience in modern web development and backend
              systems, I specialize in building powerful, scalable, and secure
              applications. I work with microservices, cloud based systems, and
              IoT integrations.
            </p>

            <p className="text-muted-foreground">
              I enjoy creating smart experiences using Alexa voice skills,
              automation, and distributed architectures. I constantly explore
              new tech and practices to build better products and deliver real
              value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
