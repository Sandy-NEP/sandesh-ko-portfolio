import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const MyProjects = ({ data }) => {
  return (
    <section id="projects" className="section-padding bg-muted/20 relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-unbounded font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and passion.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={`relative group overflow-hidden rounded-xl shadow-2xl ${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-video project-card-image border-2 border-purple-500/20"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="bg-white/10 backdrop-blur-sm border-purple-400/50 text-white hover:bg-white/20">
                      <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-1.5" /> Live Demo
                      </a>
                    </Button>
                     <Button variant="outline" size="sm" asChild className="bg-white/10 backdrop-blur-sm border-purple-400/50 text-white hover:bg-white/20">
                      <a href="https://github.com/anupchy10/react" target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1.5" /> View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`${index % 2 !== 0 ? "md:col-start-1" : ""}`}>
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mb-1">{project.date}</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">{project.description}</p>
                <div className="mb-5">
                  <p className="text-sm font-medium text-purple-300 mb-1.5">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-slate-700 text-gray-300 px-2 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
                <Button 
                  className="button-gradient text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-pink-500/30"
                  onClick={() => window.open(project.liveLink || "#", "_blank")}
                >
                  See More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
