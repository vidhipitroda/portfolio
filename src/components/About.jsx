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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            className="space-y-5 text-[17px] text-zinc-600 leading-relaxed"
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

          {/* At a Glance */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(180,100,60,0.15)',
              boxShadow: '0 8px 40px rgba(180,100,60,0.10), 0 1px 0 rgba(255,255,255,0.9) inset',
            }}
          >
            <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, #b85c38 0%, #d4845a 100%)' }}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 mb-0.5">At a Glance</p>
              <p className="text-white text-sm font-semibold">Career highlights</p>
            </div>
            <div className="px-6 py-4 flex flex-col">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="flex items-center justify-between gap-4 py-4">
                    <p className="text-xs font-semibold text-zinc-500 leading-snug max-w-[140px]">{s.label}</p>
                    <p className="text-5xl leading-none shrink-0" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#b85c38' }}>
                      {s.value}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="h-px" style={{ background: 'linear-gradient(90deg, rgba(184,92,56,0.15) 0%, transparent 100%)' }} />
                  )}
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-3 flex items-center gap-2" style={{ background: 'rgba(184,92,56,0.05)', borderTop: '1px solid rgba(184,92,56,0.10)' }}>
              <div className="flex gap-1.5">
                {['#b85c38', '#d4a050', '#c47a5a'].map((c) => (
                  <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-wide">Data · AI · Engineering</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
