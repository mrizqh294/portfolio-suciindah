import { motion } from "framer-motion";
import { heroText } from "../animations";
import heroImage from "../assets/hero_suci.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[80vh] flex flex-col-reverse md:flex-row items-center gap-stack-lg py-stack-lg"
    >
      <div className="flex-1 flex flex-col items-center md:items-start gap-stack-sm">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="show"
          variants={heroText}
          className="font-display text-headline-lg-mobile md:text-display text-primary leading-tight"
        >
          Suci Indah Purnama
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={heroText}
          className="font-body-lg text-center md:text-start text-body-md md:text-body-lg text-on-surface-variant max-w-xl"
        >
          Perekam Medis | Staff Pendaftaran | Customer Service | Kasir
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={heroText}
          className="flex gap-4 mt-unit"
        >
          <a
            href="https://drive.google.com/file/d/1PNOIJNoHQJ-GiiQS4_F1xBaCFXLXnTxR/view?usp=drivesdk
"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity"
          >
            Unduh CV
          </a>
          <a
            href="https://wa.me/62895334830722"
            className="inline-flex items-center justify-center px-6 py-3 bg-surface-container-lowest text-primary border border-outline-variant font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors"
          >
            Hubungi Saya
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full rounded-xl overflow-hidden relative group"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="inset-0 w-full h-full object-cover object-center"
          alt="Hero Image"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </motion.div>
    </section>
  );
}
