import { motion } from 'framer-motion';

export default function ContentSection({ id, label, title, description }) {
  return (
    <section id={id} className="relative py-24 px-6 overflow-hidden scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">{label}</p>
          <h2
            className="text-4xl md:text-5xl tracking-wider uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}
          >
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-dashed border-zinc-300 bg-white/70 px-6 py-12 text-center"
        >
          <p className="text-sm text-zinc-500">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
