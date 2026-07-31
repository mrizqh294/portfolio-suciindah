import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../animations";
import serti2 from "../assets/serti2.png";
import serti3 from "../assets/serti3.png";
import jurnal from "../assets/jurnal.png";

const SKILLS = [
  {
    image: jurnal,
    title: "Publikasi Artikel Ilmiah",
    description: "Publikasi Artikel Ilmiah dengan judul Tinjauan Implementasi Pendaftaran Pasien Reservasi Online Guna Meningkatkan Efektivitas Pelayanan Rawat Jalan di RSUD Kota Bandung",
    actionLabel: "Baca Jurnal",
    link: "https://journal.universitaspahlawan.ac.id/index.php/prepotif/article/view/28724",
  },
  {
    image: serti2,
    title: "Sekretaris Umum Himpunan Mahasiswa Rekam Medis dan Informasi Kesehatan",
    description: "Bertanggung jawab sebagai Sekretaris Umum Himpunan Mahasiswa Rekam Medis dan Informasi Kesehatan periode Oktober 2023 - Desember 2024",
    actionLabel: "Lihat Sertifikat",
    link: "https://drive.google.com/file/d/14YvC3lrLS8g-Xd1qqV3d0RXWE6tTxumJ/view?usp=drivesdk",
  },
  {
    image: serti3,
    title: "Sertifikat Pelatihan Kesekretariatan dan kebendaharaan",
    description: "Mendapatkan Sertifikat Pelatihan Kesekretariatan dan kebendaharaan pada 30 Januari 2024",
    actionLabel: "Lihat Sertifikat",
    link: "https://drive.google.com/file/d/1m87ZTEk_G5XcbS2VP8Tqlky9UcDR5DSW/view?usp=drivesdk",
  },
];

export default function Skills() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex flex-col items-center mb-stack-md"
      >
        <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary">Sertifikat & Publikasi</h2>
        <div className="w-16 h-1 bg-primary-container mt-4 rounded-full" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter"
      >
        {SKILLS.map((skill) => {
          const hasLink = Boolean(skill.link);

          return (
            <motion.div
              key={skill.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-surface-container-lowest rounded-xl shadow-ambient overflow-hidden border border-outline-variant/10 flex flex-col"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-5 text-center flex flex-col items-center gap-3">
                <h3 className="font-label-md text-label-md font-bold text-primary">{skill.title}</h3>
                <p className="font-caption text-caption text-on-surface-variant">
                  {skill.description}
                </p>

                {hasLink ? (
                  <motion.a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 px-4 py-2 rounded-full border border-primary-container text-primary-container font-label-md text-[13px] hover:bg-primary-container hover:text-on-primary transition-colors"
                  >
                    {skill.actionLabel}
                  </motion.a>
                ) : (
                  <button
                    type="button"
                    disabled
                    title="Link belum tersedia"
                    className="mt-2 px-4 py-2 rounded-full border border-outline-variant text-outline font-label-md text-[13px] cursor-not-allowed opacity-60"
                  >
                    {skill.actionLabel}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}



