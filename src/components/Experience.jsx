import { motion } from 'framer-motion';
import { timeline } from '../data.js';

function TimelineEntry({ entry, index }) {
  return (
    <motion.div
      className="relative flex gap-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.13, ease: 'easeOut' }}
    >
      {/* Left accent line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${entry.accent}`}
        />
        {index < timeline.length - 1 && (
          <div className="flex-1 w-px bg-zinc-200 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-1">{entry.period}</p>
        <h3 className="text-lg font-bold text-zinc-900 mb-0.5">{entry.role}</h3>
        <p className="text-sm font-semibold text-zinc-500 mb-3">{entry.org}</p>
        <p className="text-sm text-zinc-600 leading-relaxed mb-4 max-w-lg">{entry.description}</p>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden scroll-mt-8">
      {/* bg blob */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-emerald-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">Experience</p>
          <h2 className="text-4xl md:text-5xl tracking-wider uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}>
            Where I've Worked
          </h2>
        </motion.div>

        <div>
          {timeline.map((entry, i) => (
            <TimelineEntry key={entry.org} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
