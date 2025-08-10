import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, UserCircle, Zap } from "lucide-react";

const AboutMe = ({ data }) => {
  const icons = [ <Zap key="zap" />, <UserCircle key="user"/>, <GraduationCap key="grad"/>, <Briefcase key="brief"/>];
  const colors = ["text-pink-400", "text-purple-400", "text-sky-400", "text-indigo-400"];
  
  const aboutInfo = [
    { label: "Name", value: data.name },
    { label: "Age", value: data.age },
    { label: "Passion", value: data.passion },
    { label: "School", value: data.school },
    { label: "Country", value: data.country },
    { label: "District", value: data.district },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-card relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-unbounded font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hello, I'm <span className="font-semibold text-purple-300">{data.name}</span>. A young and enthusiastic web developer from Nepal with a love for dancing and capturing moments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-2.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-xl opacity-40 animate-pulse-glow group-hover:opacity-60 transition-opacity"></div>
              <img 
                src={data.aboutImage}
                alt={`${data.name} - About Me`}
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl border-2 border-primary/50 transform group-hover:scale-105 transition-transform duration-300 animate-float"
                />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {aboutInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y:15 }}
                  whileInView={{ opacity: 1, y:0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.5}}
                  className="bg-card/40 p-4 rounded-lg border border-border shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  <p className="text-sm font-medium text-primary mb-0.5">{info.label}</p>
                  <p className="text-base text-foreground font-semibold">{info.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">My Journey</h3>
                {data.aboutMeDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 mb-3 last:mb-0">
                    <span className={`mt-1 p-1.5 rounded-full bg-card ${colors[index % colors.length]} animate-pulse-glow`}>
                    {React.cloneElement(icons[index % icons.length], { size: 16, className: "text-white" })}
                    </span>
                    <div>
                    <p className={`text-xs font-medium ${colors[index % colors.length]}`}>{item.year}</p>
                    <h4 className="text-md font-semibold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
