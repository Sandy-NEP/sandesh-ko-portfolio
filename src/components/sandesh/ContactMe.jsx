import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import axios from "axios";

const API_URL = import.meta.env.VITE_SMTP_API || '/api/send-mail';

const ContactMe = ({ data }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    if (!validateEmail(formData.email)) {
      setStatus({ loading: false, success: null, error: "Please enter a valid email address." });
      return;
    }
    if (formData.message.length < 10) {
      setStatus({ loading: false, success: null, error: "Message must be at least 10 characters long." });
      return;
    }

    setIsSubmitted(true);
    setStatus({ loading: true, success: null, error: null });

    const formattedMessage = `
      <p><strong>Name:</strong> ${formData.name || "Anonymous"}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong><br/>${formData.message.replace(/\n/g, "<br/>")}</p>
    `;

    try {
      const res = await axios.post(API_URL, {
        to: "sg9816062923@gmail.com",
        subject: `New message from ${formData.name || "Anonymous"}`,
        message: formattedMessage,
      });

      if (res.data && typeof res.data.success === "boolean" && res.data.success) {
        setStatus({ loading: false, success: "Message sent successfully!", error: null });
        setFormData({ name: "", email: "", message: "" });
        setIsHovered(false);
      } else {
        setStatus({ loading: false, success: null, error: res.data?.message || "Failed to send message." });
      }
    } catch (error) {
      console.error("Email send error:", error.response?.data || error.message);
      setStatus({
        loading: false,
        success: null,
        error: error.response?.data?.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-primary/30 to-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-accent/30 to-muted/10 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <img
              src={data.contactGif}
              alt="Contact Illustration"
              className="w-full max-w-md mx-auto rounded-lg"
            />
            <p className="absolute top-1/3 left-1/2 -translate-x-1/4 -translate-y-1/2 text-lg text-white font-medium -rotate-6 bg-black/30 p-2 rounded">
              My friend is waiting <br /> for your letters! <span className="text-2xl">↙</span>
            </p>
          </motion.div>

          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => !status.loading && setIsHovered(false)}
            onClick={() => setIsHovered(true)}
          >
            <motion.div
              initial={false}
              animate={{
                y: isHovered ? 80 : 200,
                scale: isHovered ? 1 : 0.9,
                filter: isHovered ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative z-0 mb-4"
              style={{ width: "600px", maxWidth: "200vw" }}
            >
              <img
                src="../img/cat.png"
                alt="Cat"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card p-6 md:p-8 relative z-20 w-full max-w-md mx-auto"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Get in touch today</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Sandesh"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring outline-none text-foreground placeholder-muted-foreground text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sandesh@gmail.com"
                      required
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring outline-none text-foreground placeholder-muted-foreground text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">Leave us a message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please type your message here..."
                    required
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring outline-none text-foreground placeholder-muted-foreground min-h-[100px] text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full button-gradient rounded-lg px-4 py-2 text-base font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/40"
                  disabled={status.loading || isSubmitted}
                >
                  {status.loading ? "Sending..." : "Send Message"} <Send size={16} />
                </Button>

                {status.success && <p className="text-green-600 text-sm mt-2">{status.success}</p>}
                {status.error && <p className="text-red-600 text-sm mt-2">{status.error}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;