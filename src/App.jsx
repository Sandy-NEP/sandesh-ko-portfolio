import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sandesh/Navbar";
import Hero from "@/components/sandesh/Hero";
import AboutMe from "@/components/sandesh/AboutMe";
import MySkills from "@/components/sandesh/MySkills";
import MyProjects from "@/components/sandesh/MyProjects";
import Hobbies from "@/components/sandesh/Hobbies";
import ContactMe from "@/components/sandesh/ContactMe";
import Footer from "@/components/sandesh/Footer";
import BuyMeACoffeeModal from "@/components/sandesh/BuyMeACoffeeModal";
import { ChevronUp, Coffee } from "lucide-react";
import ThemeSwitcher from "@/components/sandesh/ThemeSwitcher";
import ThreeBackground from "@/components/three/ThreeBackground";
import FloatingElements from "@/components/ui/FloatingElements";

// --- Skeleton Loader Component ---
function SkeletonLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <h1
        className="text-[64px] md:text-[96px] font-extrabold uppercase tracking-[0.25em] mb-4 select-none"
        style={{
          color: "transparent",
          background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)",
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 2s infinite",
          letterSpacing: "12px",
        }}
      >
        WELCOME
      </h1>
      <p
        className="text-2xl md:text-3xl font-semibold select-none"
        style={{
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "2px",
          animation: "fadeInUp 1s ease-out 1s both",
        }}
      >
        Preparing your experience
      </p>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}

const sandeshData = {
  name: "Sandesh Ghimire",
  title: "Aspiring Web Developer",
  age: 17,
  caste: "Ghimire",
  country: "Nepal",
  district: "Ilam",
  school: "Adarsha Secondary School, Sanothimi, Bhaktapur",
  passion: "Web Developer",
  hobbies: ["Dancing", "Photography", "Coding", "Playing Guitar"],
  email: "sandeshghimire4004@gmail.com",
  phone: "9842163841",
  cvUrl: "#",
  profileImage: "../img/background.jpg",
  myimage:"../img/sandesh2.jpg",
  aboutImage: "../img/sandesh2.jpg",
  contactImage: "../img/About.jpg",
  contactGif:"../img/pengu.gif",

  socialMedia: {
    facebook: { link: "https://www.facebook.com/sandesh.ghimire.798", color: "text-blue-600", hoverColor: "hover:text-blue-500" },
    whatsapp: { link: "https://wa.me/9842163841", color: "text-green-500", hoverColor: "hover:text-green-400" },
    instagram: { link: "https://www.instagram.com/sandesh_ghimire01/", color: "text-pink-500", hoverColor: "hover:text-pink-400" },
    twitter: { link: "https://twitter.com/sandesh_ghimire01/", color: "text-sky-500", hoverColor: "hover:text-sky-400" },
    threads: { link: "https://www.threads.com/@sandesh_ghimire01?xmt=AQF0KLP0CKAKpaaWU6CsWRkOUMCp_i7Ziq6C__wG9m2pmEk", color: "text-white-800 bright:text-neutral-200", hoverColor: "hover:text-neutral-600 bright:hover:text-neutral-400" },
    youtube: { link: "https://www.youtube.com/@sandesh_ghimire01", color: "text-red-600", hoverColor: "hover:text-red-500" },
  },
  skills: [
    { name: "HTML", icon: "Html5", color: "text-orange-500" },
    { name: "CSS", icon: "Css3", color: "text-blue-500" },
    { name: "JavaScript", icon: "Javascript", color: "text-yellow-400" },
    { name: "React", icon: "ReactJs", color: "text-sky-400" },
    { name: "Node.js", icon: "Nodedotjs", color: "text-green-500" },
    { name: "TailwindCSS", icon: "Tailwindcss", color: "text-cyan-400" },
    { name: "Git", icon: "Git", color: "text-red-500" },
    { name: "Figma", icon: "Figma", color: "text-purple-500" },
    { name: "Python", icon: "Python", color: "text-blue-400" },
    { name: "Java", icon: "Java", color: "text-red-400" },
    { name: "C++", icon: "Cplusplus", color: "text-indigo-500" },
    { name: "Photoshop", icon: "Adobephotoshop", color: "text-blue-600" },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      date: "// jan 2025",
      description: "A modern online store for Clothes with a clean UI and secure payment integration. Features include advanced product filtering, dynamic cart updates, and an admin dashboard for managing inventory.",
      technologies: ["React", "Tailwind CSS", "Stripe API", "Node.js"],
      imageUrl: "../img/E-commerce-Platform.png",
      tags: ["E-commerce", "Tech"],
      liveLink: "#",
    },
    {
      title: "Online Cinema",
      date: "// September 2023",
      description: "A feature-rich platform for streaming movies and TV shows. It includes user authentication, personalized recommendations, watchlists, and responsive design for seamless viewing across devices.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/9a82512e9057dcbff8371739a5c15563.png",
      tags: ["Design", "Web"],
      liveLink: "#",
    },
     {
      title: "Games Forum",
      date: "// December 2024",
      description: "A community-driven forum for gamers to discuss, share, and connect. Includes real-time chat, post moderation, and a ranking system to highlight active contributors.",
      technologies: ["Angular", "Firebase", "WebSocket"],
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/9cb9637e76af5c37f5a62c4e6abcbc00.png",
      tags: ["Games", "Social media"],
      liveLink: "#",
    }
  ],
  hobbiesGallery: [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/157c524b88ec3b267666d6c7e903f02d.jpg", alt: "Sandesh playing guitar" }, // User provided image
    { src: "../img/sandesh1.jpg", alt: "Photography example 1" },
    { src: "../img/sandesh2.jpg", alt: "Photography example 2" },
    { src: "../img/sandesh3.jpg", alt: "Photography example 3" },
  ],
  paymentOptions: {
    esewa: "9842163841",
    bank: { name: "Global IME Bank", acc: "25607010046172" },
    khalti: "9842163841",
  },
  aboutMeDetails: [
    { year: "Current", title: "Web Development Passion", description: "Deeply immersed in learning and creating web applications. Focusing on modern JavaScript frameworks and backend technologies." },
    { year: "2023 - Present", title: "Adarsha Secondary School", description: "Actively participating in tech clubs and coding competitions while pursuing studies." },
    { year: "Ongoing", title: "Self-Learning & Projects", description: "Continuously expanding skills through online courses, personal projects, and exploring new technologies in web development and design." },
  ]
};


function App() {
  const { toast } = useToast();
  const [isCoffeeModalOpen, setIsCoffeeModalOpen] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState(() => {
    return localStorage.getItem('portfolio-theme') || 'default';
  });

  // --- Skeleton loading state ---
  const [loading, setLoading] = React.useState(() => {
    // Only show loader on first visit in this session
    return sessionStorage.getItem("hasLoaded") ? false : true;
  });

  React.useEffect(() => {
    localStorage.setItem('portfolio-theme', currentTheme);
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleContactSubmit = (formData) => {
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out, Sandesh will get back to you soon.",
      duration: 3000,
      className: "bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white",
    });
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <ThreeBackground />
      <FloatingElements />
      <Navbar data={sandeshData} onCoffeeClick={() => setIsCoffeeModalOpen(true)} />
      <main>
        <Hero data={sandeshData} />
        <AboutMe data={sandeshData} />
        <MySkills data={sandeshData} />
        <MyProjects data={sandeshData} />
        <Hobbies data={sandeshData} />
        <ContactMe data={sandeshData} onSubmit={handleContactSubmit} />
      </main>
      <Footer data={sandeshData} />
      <Toaster />
      <BuyMeACoffeeModal 
        isOpen={isCoffeeModalOpen} 
        onClose={() => setIsCoffeeModalOpen(false)}
        paymentOptions={sandeshData.paymentOptions}
      />
      
      <motion.div 
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center"
      >
        <ThemeSwitcher 
          currentTheme={currentTheme} 
          setCurrentTheme={setCurrentTheme} 
        />
         <Button 
          className="rounded-full p-3 shadow-xl bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white focus:ring-4 focus:ring-pink-400"
          onClick={() => setIsCoffeeModalOpen(true)}
          aria-label="Buy me a coffee"
        >
          <Coffee size={24} />
        </Button>
        <Button 
          className="rounded-full p-3 shadow-xl bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white focus:ring-4 focus:ring-purple-400"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </Button>
      </motion.div>
    </div>
  );
}

export default App;
