import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../animations";

const EDUCATION = [
  {
    icon: "menu_book",
    degree: "Diploma 3 Rekam Medis dan Informasi Kesehatan",
    school: "Politeknik Piksi Ganesha",
    description:
      "Mempelajari pengelolaan data pasien, kodefikasi penyakit, dan teknologi informasi kesehatan",
    period: "2021 - 2024",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-surface-bright py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-center mb-stack-md"
        >
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary">Pendidikan</h2>
          <div className="w-16 h-1 bg-primary-container mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={staggerItem}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient border border-outline-variant/20 flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-primary-container/10 rounded-lg text-primary-container">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {edu.icon}
                </span>
              </div>
              <div>
                <h3 className="font-display text-headline-md text-primary">{edu.degree}</h3>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                  {edu.school}
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {edu.description}
              </p>
              <span className="mt-auto inline-block px-3 py-1 bg-surface-container-low text-on-surface-variant font-caption text-caption rounded-full">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
