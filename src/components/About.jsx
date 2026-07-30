import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../animations";

export default function About() {
  return (
    <section id="about" className="bg-surface-container-low py-stack-lg">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center gap-stack-sm"
      >
        <motion.span
          variants={fadeUp}
          className="material-symbols-outlined text-primary text-4xl mb-2"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          psychology
        </motion.span>

        <motion.h2 variants={fadeUp} className="font-display text-headline-lg text-primary">
          Tentang Saya
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
        >
          Lulusan D3 Rekam Medis dan Informasi Kesehatan dengan STR aktif dan 
          pengalaman kerja lebih dari 1 tahun di rumah sakit pada posisi 
          Customer Service, Kasir, dan Staf Pendaftaran, serta memiliki pengalaman 
          Praktik Kerja Lapangan (PKL) sebagai Perekam Medis.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
        >
          Mahir mengoperasikan SIMRS (Teramedik), sistem BPJS (M-JKN, VClaim, E-Klaim, LUPIC), 
          serta berbagai portal asuransi swasta mitra (YKP BJB, AdMedika, Inhealth, PLN, dll.).
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
        >
          Memiliki kemampuan komunikasi pelayanan yang baik, manajemen data administrasi 
          pasien yang teliti, serta mampu bekerja cepat dan tepat untuk efisiensi waktu 
          tunggu pasien. Beradaptasi dengan cepat terhadap teknologi maupun lingkungan 
          kerja baru.
        </motion.p>

      </motion.div>
    </section>
  );
}
