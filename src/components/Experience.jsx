import { motion } from 'framer-motion';
import { timeline } from '../data.js';

const stats = [
  { value: '3+', label: 'Years in Data & AI' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '3', label: 'Roles & Orgs' },
  { value: '15+', label: 'Technologies Used' },
];

function TimelineEntry({ entry, index }) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.13, ease: 'easeOut' }}
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full mt-1.5 shrink-0"
          style={{ backgroundColor: entry.accent }}
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
        <p className="text-sm text-zinc-600 leading-relaxed mb-4 max-w-md">{entry.description}</p>
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
      <div className="pointer-events-none absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-emerald-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">Experience</p>
          <h2
            className="text-4xl md:text-5xl tracking-wider uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}
          >
            Where I've Been
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT — Timeline */}
          <div className="flex-1 min-w-0">
            {timeline.map((entry, i) => (
              <TimelineEntry key={entry.org} entry={entry} index={i} />
            ))}
          </div>

          {/* RIGHT — Sticky stats panel */}
          <div className="lg:w-64 lg:sticky lg:top-24 shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(27,75,117,0.1)',
                boxShadow: '0 4px 24px rgba(27,75,117,0.07)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-5"
                style={{ color: '#1b4b75', opacity: 0.6 }}
              >
                At a Glance
              </p>

              <div className="flex flex-col gap-5">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                  >
                    <p
                      className="text-4xl font-black leading-none mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs text-zinc-500 font-medium leading-snug">{s.label}</p>
                    {i < stats.length - 1 && (
                      <div className="mt-4 h-px bg-zinc-100" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Decorative dot grid */}
              <div className="mt-6 grid grid-cols-5 gap-1.5 opacity-20">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#1b4b75' }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
