import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, viewportOnce } from "../animations";

const EXPERIENCES = [
  {
    role: "Staff Pendaftaran",
    company: "Rumah Sakit Ibu dan Anak Grha Bunda",
    period: "Apr 2026 - Jul 2026",
    current: false,
    points: [
      "Mengelola registrasi pasien rawat jalan dan rawat inap (umum maupun asuransi swasta mitra).",
      "memberikan pelayanan customer service terkait informasi yang dibutuhkan pasien, serta menangani transaksi pembayaran di kasir.",
    ],
    proofLink: "https://drive.google.com/file/d/1WL6X9czJnPJbwQXYTG_GxUILOxiBC4Ms/view?usp=drivesdk",
  },
  {
    role: "Costumer Service",
    company: "Rumah Sakit Mitra Kasih Cimahi",
    period: "Feb 2025 - Des 2025",
    current: false,
    points: [
      "Melayani dan membantu kendala pendaftaran online bagi pasien BPJS, memberikan informasi terkait pelayanan rumah sakit.",
      "Mengelola administrasi penginputan klaim alat bantu BPJS dan pengajuan akta kelahiran bayi baru lahir.",
    ],
    proofLink: "https://drive.google.com/file/d/1-chDI3f8SV7tL1RpyAInwOSsqzcsHWjA/view?usp=drivesdk",
  },
  {
    role: "Perekam Medis",
    company: "Rumah Sakit Umum Daerah Kota Bandung",
    period: "Maret 2024 - Mei 2024",
    current: false,
    points: [
      "Melakukan registrasi pasien IGD, rawat jalan, dan rawat inap, mengelola rekam medis manual (assembling, filing, indexing), melakukan scanning rekam medis manual ke sistem RME.",
      "Menginput coding diagnosis dan tindakan untuk klaim BPJS (casemix)",
    ],
    proofLink: "",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex flex-col items-center mb-stack-md"
      >
        <h2 className="font-display text-headline-lg text-primary">Pengalaman Kerja</h2>
        <div className="w-16 h-1 bg-primary-container mt-4 rounded-full" />
      </motion.div>

      <div className="relative border-l border-outline-variant/50 ml-4 md:ml-12 space-y-stack-md">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={slideFromLeft}
            transition={{ delay: idx * 0.15 }}
            className="relative pl-8 md:pl-12"
          >
            <div
              className={`absolute -left-3 top-1 w-6 h-6 bg-surface-container-lowest border-2 rounded-full flex items-center justify-center ${
                exp.current ? "border-primary-container" : "border-outline-variant"
              }`}
            >
              {exp.current && <div className="w-2 h-2 bg-primary-container rounded-full" />}
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300 border border-outline-variant/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="font-display text-headline-md text-primary">{exp.role}</h3>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-surface-container-low text-on-surface-variant font-caption text-caption rounded-full">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-1">
                      check_circle
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.proofLink && (
                <a
                  href={exp.proofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg border border-primary-container text-primary-container font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  Lihat Bukti Pengalaman
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
