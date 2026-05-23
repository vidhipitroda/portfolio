import { motion } from 'framer-motion';
import { education } from '../data.js';

function DiplomaCard({ entry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
      className="relative flex items-stretch rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.7)',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 4px 28px rgba(0,0,0,0.07)',
      }}
    >
      {/* Left badge column */}
      <div
        className="flex flex-col items-center justify-center px-6 py-8 shrink-0 w-24"
        style={{ background: `linear-gradient(160deg, ${entry.accent}22 0%, ${entry.accent}0a 100%)`, borderRight: `2px solid ${entry.accent}30` }}
      >
        {/* Graduation cap icon */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
          style={{ background: entry.accent }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        {/* Year */}
        <p
          className="text-2xl leading-none text-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: entry.accent }}
        >
          {entry.year}
        </p>
      </div>

      {/* Right content */}
      <div className="flex-1 px-6 py-6 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-0.5">{entry.degree}</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold text-zinc-500">{entry.institution}</p>
            <span className="text-zinc-300">·</span>
            <p className="text-sm text-zinc-400">{entry.location}</p>
          </div>
          {/* Grade pill */}
          <span
            className="inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: `${entry.accent}18`, color: entry.accent }}
          >
            {entry.grade}
          </span>
        </div>

        {/* Key modules */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-2">Key Modules</p>
          <div className="flex flex-wrap gap-2">
            {entry.modules.map((m) => (
              <span
                key={m}
                className="text-xs px-2.5 py-0.5 rounded-full font-medium border"
                style={{ color: entry.accent, borderColor: `${entry.accent}35`, background: `${entry.accent}0d` }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 scroll-mt-8">
      <div className="pointer-events-none absolute top-0 left-0 w-[30vw] h-[30vw] bg-amber-100/30 rounded-full blur-[90px] -z-10" />

      <div className="max-w-5xl mx-auto">
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

        <div className="flex flex-col gap-5 max-w-2xl mx-auto">
          {education.map((entry, i) => (
            <DiplomaCard key={entry.degree} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
