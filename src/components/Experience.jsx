import { motion } from 'framer-motion';
import { timeline } from '../data.js';

const stats = [
  { value: '3+', label: 'Years in Data & AI' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+', label: 'Cloud & MLOps Tools' },
  { value: '15+', label: 'Technologies Used' },
];

const certifications = [
  { name: 'Azure Data Engineer Associate', issuer: 'Microsoft', year: '2024' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', year: '2023' },
  { name: 'Databricks Certified Associate', issuer: 'Databricks', year: '2023' },
];

const achievements = [
  { icon: '🏆', text: 'Best Data Project — Internal Hackathon 2024' },
  { icon: '🎓', text: 'M.Sc. Distinction — Top of cohort' },
  { icon: '🚀', text: 'Shipped AI product used by 500+ users' },
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
        <ul className="mb-4 flex flex-col gap-2">
          {entry.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-zinc-600 leading-relaxed max-w-md">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: entry.accent }} />
              {b}
            </li>
          ))}
        </ul>
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

          {/* RIGHT — Sticky panel stack */}
          <div className="lg:w-72 lg:sticky lg:top-24 shrink-0 flex flex-col gap-5">

            {/* ── At a Glance ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
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
                      <p className="text-xs font-semibold text-zinc-500 leading-snug max-w-[120px]">{s.label}</p>
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

            {/* ── Certifications ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(27,75,117,0.12)',
                boxShadow: '0 8px 40px rgba(27,75,117,0.08), 0 1px 0 rgba(255,255,255,0.9) inset',
              }}
            >
              <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, #1b4b75 0%, #2d6fa3 100%)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 mb-0.5">Certifications</p>
                <p className="text-white text-sm font-semibold">Verified credentials</p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-0">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.09, ease: 'easeOut' }}
                  >
                    <div className="flex items-start gap-3 py-3.5">
                      <div className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(27,75,117,0.1)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1b4b75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-zinc-800 leading-snug">{c.name}</p>
                        <p className="text-[10px] text-zinc-400 mt-0.5">{c.issuer} · {c.year}</p>
                      </div>
                    </div>
                    {i < certifications.length - 1 && (
                      <div className="h-px" style={{ background: 'linear-gradient(90deg, rgba(27,75,117,0.10) 0%, transparent 100%)' }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Achievements ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(180,150,60,0.18)',
                boxShadow: '0 8px 40px rgba(180,150,60,0.08), 0 1px 0 rgba(255,255,255,0.9) inset',
              }}
            >
              <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, #a07830 0%, #c4a050 100%)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 mb-0.5">Achievements</p>
                <p className="text-white text-sm font-semibold">Proud moments</p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-0">
                {achievements.map((a, i) => (
                  <motion.div
                    key={a.text}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.09, ease: 'easeOut' }}
                  >
                    <div className="flex items-start gap-3 py-3.5">
                      <span className="text-lg leading-none shrink-0">{a.icon}</span>
                      <p className="text-xs font-semibold text-zinc-700 leading-snug">{a.text}</p>
                    </div>
                    {i < achievements.length - 1 && (
                      <div className="h-px" style={{ background: 'linear-gradient(90deg, rgba(160,120,48,0.12) 0%, transparent 100%)' }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
