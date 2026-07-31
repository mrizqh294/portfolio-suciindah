import { useState } from "react";
import { motion } from "framer-motion";
import { viewportOnce, easeOut } from "../animations";

const infoBlockVariant = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const formBlockVariant = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.1 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — sambungkan ke endpoint/backend sesuai kebutuhan Anda.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg"
    >
      <div className="flex flex-col lg:flex-row gap-stack-lg bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-ambient border border-outline-variant/10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={infoBlockVariant}
          className="flex-1 flex flex-col gap-6"
        >
          <div>
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary">Hubungi Saya</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-md">
              Saya selalu terbuka untuk mendiskusikan pekerjaan atau peluang kerjasama.
              Kirim pesan.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary-container">mail</span>
              <span className="font-body-md">suciindahpurnama2003@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary-container">phone</span>
              <span className="font-body-md">0895-3348-30722</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary-container">location_on</span>
              <span className="font-body-md">Sumedang, Jawa Barat</span>
            </div>
          </div>

          {/* <div className="flex gap-4 mt-auto pt-8">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors"
            >
              <span className="material-symbols-outlined">link</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
          </div> */}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={formBlockVariant}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block font-label-md text-label-md text-primary mb-2" htmlFor="name">
                Nama
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ketik nama Anda"
                className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary-container focus:bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-on-surface transition-colors"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-primary mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Ketik email Anda"
                className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary-container focus:bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-on-surface transition-colors"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-primary mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea
                id="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Ketik pesan Anda"
                className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary-container focus:bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-on-surface transition-colors resize-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === "sending"}
              className="self-start px-8 py-3 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Terkirim ✓" : "Kirim Pesan"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
