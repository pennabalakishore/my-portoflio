import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const recipientEmail = "balubalu03581@gmail.com";

const contactLinks = [
  {
    label: "Email",
    value: recipientEmail,
    href: `mailto:${recipientEmail}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bala-kishore-penna-06ba3b233",
    href: "https://www.linkedin.com/in/bala-kishore-penna-06ba3b233/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/pennabalakishore",
    href: "https://github.com/pennabalakishore",
    icon: Github,
  },
];

export const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const finalSubject = subject || "Portfolio Contact";
    const body = [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join(
      "\n"
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Open to full-time roles, freelance work, and collaborations in web,
          backend, and IoT product development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="gradient-border bg-card p-5 rounded-xl card-hover text-left flex items-start gap-4"
                >
                  <span className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>

                  <span>
                    <span className="block text-sm text-muted-foreground">
                      {contact.label}
                    </span>
                    <span className="block font-medium break-all">
                      {contact.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="lg:col-span-3 gradient-border bg-card p-6 md:p-8 rounded-xl">
            <form className="space-y-5 text-left" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full mt-2 rounded-md border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full mt-2 rounded-md border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full mt-2 rounded-md border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full mt-2 rounded-md border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40 resize-y"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="cosmic-button inline-flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
