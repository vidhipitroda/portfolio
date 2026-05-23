import { motion } from 'framer-motion';
import { education } from '../data.js';

function EducationCard({ entry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
      className="relative rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: 'rgba(255,255,255,0.65)',
        border: `1.5px solid ${entry.accent}28`,
        boxShadow: `0 4px 24px ${entry.accent}14`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-1">{entry.period}</p>
          <h3 className="text-lg font-bold text-zinc-900 leading-snug">{entry.degree}</h3>
          <p className="text-sm font-semibold mt-0.5" style={{ color: entry.accent }}>{entry.institution}</p>
        </div>
        {/* Accent circle */}
        <div
          className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center mt-0.5"
          style={{ background: `${entry.accent}18` }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={entry.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px" style={{ background: `linear-gradient(90deg, ${entry.accent}30 0%, transparent 100%)` }} />

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {entry.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-zinc-600 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: entry.accent }} />
            {b}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        {entry.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-0.5 rounded-full font-medium border"
            style={{
              color: entry.accent,
              borderColor: `${entry.accent}35`,
              background: `${entry.accent}0d`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 scroll-mt-8">
      <div className="pointer-events-none absolute top-0 left-0 w-[30vw] h-[30vw] bg-amber-100/30 rounded-full blur-[90px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">Education</p>
          <h2
            className="text-4xl md:text-5xl tracking-wider uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}
          >
            Where I've Learned
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((entry, i) => (
            <EducationCard key={entry.degree} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
