import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Hobbies = ({ data }) => {
  const hasEnoughSlides = data.hobbiesGallery.length > 2;

  return (
    <section id="hobbies" className="section-padding bg-gradient-to-br from-background to-card relative z-10 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-unbounded font-bold mb-4">
            Photography & <span className="text-gradient">More</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond coding, I enjoy capturing moments and exploring other creative outlets.
          </p>
        </motion.div>

        {data.hobbiesGallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={hasEnoughSlides}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[Pagination, Autoplay, EffectCoverflow]}
              className="mySwiper w-full py-8"
              style={{
                "--swiper-pagination-color": "#A855F7",
                "--swiper-pagination-bullet-inactive-color": "#4B5563",
              }}
            >
              {data.hobbiesGallery.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[280px] sm:!w-[320px] md:!w-[380px]"
                >
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-purple-500/30 transform transition-all duration-500 hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hobbies;
