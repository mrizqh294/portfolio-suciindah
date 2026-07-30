import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className="bg-surface w-full py-12 border-t border-outline-variant"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Made with <span className="text-red-500">❤️</span> by Muhammad Rizki Haikal
        </p>
      </div>
    </motion.footer>
  );
}
