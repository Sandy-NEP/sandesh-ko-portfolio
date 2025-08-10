import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiFigma, SiPython, SiCplusplus, SiAdobephotoshop, SiOracle
} from "@icons-pack/react-simple-icons";

const iconComponents = {
  Html5: SiHtml5,
  Css3: SiCss3,
  Javascript: SiJavascript,
  ReactJs: SiReact,
  Nodedotjs: SiNodedotjs,
  Tailwindcss: SiTailwindcss,
  Git: SiGit,
  Figma: SiFigma,
  Python: SiPython,
  Java: SiOracle, 
  Cplusplus: SiCplusplus,
  Adobephotoshop: SiAdobephotoshop,
};

const MySkills = ({ data }) => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-card to-background relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-unbounded font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I'm proficient with. Each skill I cultivate brings me closer to crafting digital magic.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
          {data.skills.map((skill, index) => {
            const IconComponent = iconComponents[skill.icon] || SiReact;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.05, boxShadow: `0px 12px 25px -5px ${skill.color.replace('text-','rgba(').replace('-500',',0.4)').replace('-400',',0.3)')}` }}
                transition={{ duration: 0.35, delay: index * 0.06, type: "spring", stiffness: 200, damping: 15 }}
                className="group glass-card p-5 md:p-6 flex flex-col items-center justify-center text-center aspect-square rounded-xl border border-slate-700/50 hover:border-purple-500/70"
              >
                <IconComponent size={52} className={`mb-3.5 transition-colors duration-300 ${skill.color || 'text-purple-400'}`} />
                <p className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
