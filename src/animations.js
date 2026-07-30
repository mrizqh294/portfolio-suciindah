// Kumpulan variants Framer Motion yang dipakai bersama oleh beberapa komponen.
// Dipusatkan di sini supaya "rasa" gerakan (durasi, easing) konsisten di seluruh halaman.

export const easeOut = [0.16, 1, 0.3, 1];

// Reveal standar: fade + naik sedikit. Dipakai untuk heading section & teks umum.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Untuk container yang anak-anaknya ingin muncul bergantian (stagger)
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// Item di dalam stagger container (card skill, card edu, dsb)
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// Slide dari kiri — dipakai untuk timeline pengalaman kerja
export const slideFromLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Untuk elemen hero yang butuh entrance saat page-load (bukan scroll trigger)
export const heroText = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, delay: 0.1 + i * 0.12 },
  }),
};

// Preset yang dipakai berulang pada <motion.section whileInView>
export const viewportOnce = { once: true, amount: 0.25 };
