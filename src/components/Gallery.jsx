import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../animations";

import gb1 from "../assets/gb1.jpg";
import gb2 from "../assets/gb2.jpg";
import mk from "../assets/mk.jpg";  
import wisuda from "../assets/wisuda.jpeg";
import hima from "../assets/hima.jpg";
import rsud from "../assets/rsud_bandung.jpg";

const PROJECTS = [
  {
    title: "RSIA Grha Bunda",
    description: "Foto dokumentasi bersama rekan kerja.",
    image: gb1,
    alt: "RSIA Grha Bunda",
  },
  {
    title: "RSIA Grha Bunda",
    description: "Foto dokumentasi bersama rekan kerja.",
    image: gb2,
    alt: "RSIA Grha Bunda",
  },
  {
    title: "RS Mitra Kasih Cimahi",
    description: "Foto dokumentasi bersama rekan kerja.",
    image: mk,
    alt: "RS Mitra Kasih Cimahi",
  },
  {
    title: "RSUD Kota Bandung",
    description: "Foto dokumentasi bersama rekan kerja.",
    image: rsud,
    alt: "RSUD Kota Bandung",
  },
  {
    title: "Wisuda Politeknik Piksi Ganesha",
    description: "Foto dokumentasi acara wisuda.",
    image: wisuda,
    alt: "Wisuda Politeknik Piksi Ganesha",
  },
  {
    title: "HIMA Politeknik Piksi Ganesha",
    description: "Foto dokumentasi kegiatan organisasi mahasiswa.",
    image: hima,
    alt: "HIMA Politeknik Piksi Ganesha",
  }
];

export default function Gallery() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 320; // +24 = gap-gutter
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-surface-container-low py-stack-lg overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-md flex justify-between items-end"
      >
        <div>
          <h2 className="font-display text-headline-lg text-primary">Galeri</h2>
          <div className="w-16 h-1 bg-primary-container mt-4 rounded-full" />
        </div>

        <div className="hidden md:flex gap-2">
          <button
            aria-label="Previous project"
            onClick={() => scrollByCard(-1)}
            className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-bright transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            aria-label="Next project"
            onClick={() => scrollByCard(1)}
            className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-bright transition-colors"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        ref={trackRef}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="flex overflow-x-auto gap-gutter pb-8 px-margin-mobile md:px-margin-desktop scrollbar-hide snap-x"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            data-card
            variants={staggerItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="min-w-[300px] md:min-w-[400px] h-[300px] relative rounded-xl overflow-hidden snap-center cursor-pointer shadow-ambient"
          >
            <motion.img
              variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full object-cover"
              alt={project.alt}
              src={project.image}
            />
            <motion.div
              variants={{ rest: { opacity: 0.8 }, hover: { opacity: 1 } }}
              className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
            />
            <motion.div
              variants={{ rest: { y: 16 }, hover: { y: 0 } }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 p-6 w-full"
            >
              <h3 className="font-display text-headline-md text-on-primary">{project.title}</h3>
              <motion.p
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="font-body-md text-on-primary/80 mt-2"
              >
                {project.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
