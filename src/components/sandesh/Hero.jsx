import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { Download } from "lucide-react";

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end md:items-center justify-center section-padding hero-bg-image"
      style={{ backgroundImage: `url(${data.profileImage})` }}
    >
      <div className="container-custom hero-content">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-end">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="md:col-span-3 text-center md:text-left order-2 md:order-1"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-unbounded font-bold text-white mb-4">
              <AnimatedText 
                text={data.name.split(" ")[0]} 
                className="inline-block"
              />{" "}
              <span className="font-unbounded text-gradient">{data.name.split(" ")[1][0]}.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary uppercase tracking-wider font-medium mb-6">
              <AnimatedText 
                text={`${data.title} | Fullstack Developer`}
                delay={1000}
              />
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
              With impeccable experience from concept to layout, I bring your
              ideas to life with clean code. Passionate about creating intuitive
              and dynamic web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="button-gradient text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg transform hover:scale-105 transition-transform"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-purple-400/50 text-white hover:bg-white/20 hover:text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg flex items-center gap-2 group"
                onClick={() => window.open(data.cvUrl, "_blank")}
              >
                Contact me <Download size={18} className="group-hover:animate-bounce" />
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
<div className="md:col-span-2 flex justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2">
  <div className="flex justify-center relative">
    {/* High-priority LCP Image */}
    <img
      src={data.myimage}
      alt={data.name}
      width={288}
      height={288}
      loading="eager"
      fetchpriority="high"
      decoding="async"
      className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-primary shadow-xl bg-white/10 animate-glow animate-float"
      style={{
        animationDelay: '0s',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
      }}
    />
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
