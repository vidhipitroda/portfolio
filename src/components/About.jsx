import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years in Data & AI' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+', label: 'Cloud & MLOps Tools' },
  { value: '15+', label: 'Technologies Used' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden scroll-mt-8">
      {/* subtle warm blob */}
      <div className="pointer-events-none absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-100/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">About</p>
          <h2 className="text-4xl md:text-5xl tracking-wider uppercase mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}>
            A Few Words
          </h2>
        </motion.div>

        {/* Bio — full width */}
        <motion.div
          className="space-y-5 text-[17px] text-zinc-600 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <p>
            Data &amp; AI Engineer with a passion for building end-to-end intelligent
            systems. I specialise in transforming raw data into actionable insights —
            from ingestion pipelines and feature engineering through to model deployment
            and production ML experiences.
          </p>
          <p>
            My work blends engineering rigour with product thinking. Whether it's
            wrangling distributed datasets, fine-tuning LLMs, or designing retrieval
            pipelines, I bring curiosity and precision to every layer of the stack.
            If it involves{' '}
            <span className="font-semibold text-zinc-800">
              Python, SQL, or Large Language Models
            </span>
            , I'm in my element.
          </p>
          <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-zinc-500 text-base">
            "The goal is to turn data into information, and information into insight."
          </blockquote>
        </motion.div>

        {/* Stats bar — full width below bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4"
          style={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '1px solid rgba(27,75,117,0.09)',
            boxShadow: '0 4px 24px rgba(27,75,117,0.07)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center py-8 px-4 bg-white/80 relative"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(27,75,117,0.08)' : 'none',
              }}
            >
              <p
                className="text-5xl leading-none mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}
              >
                {s.value}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
