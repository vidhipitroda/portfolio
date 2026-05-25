import { motion } from 'framer-motion';
import { timeline } from '../data.js';

const CREDLY_URL = 'https://www.credly.com/users/vidh-i-pitroda/badges#credly';

const certifications = [
  { name: 'Azure Data Engineer Associate', issuer: 'Microsoft', logo: '/Azure.png' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', logo: '/Azure.png' },
  { name: 'Snowflake Certified SnowPro Core', issuer: 'Snowflake', logo: '/snowflake.svg' },
  { name: 'Machine Learning Specialist Associate', issuer: 'IBM', logo: '/ibm.png' },
  { name: 'Banking Insights and Solutions (Bronze)', issuer: 'IBM', logo: '/ibm.png' },
];

const achievements = [
  {
    icon: '📄',
    title: 'IEEE Publication — Explainable AI for Lung Disease Classification',
    desc: 'Peer-reviewed research on applying explainable AI techniques to medical imaging — cited 37+ times.',
    tags: ['37+ Citations', 'IEEE · Peer Reviewed'],
    link: 'https://ieeexplore.ieee.org/abstract/document/9628573/',
  },
  {
    icon: '📄',
    title: 'Publication — Introduction to Blockchain and Cryptocurrency',
    desc: 'Co-authored a technical overview of blockchain fundamentals and cryptocurrency mechanisms.',
    tags: ['Authorea · Preprint · 2023'],
    note: '* Preprint — not peer reviewed',
    link: 'https://www.authorea.com/doi/full/10.36227/techrxiv.12100842',
  },
  {
    icon: '🏆',
    title: 'Employee of the Year — IBM',
    desc: 'Recognised across the organisation for consistent delivery and impact on high-stakes data & AI projects.',
    tags: ['Company-wide', 'IBM · 2023'],
  },
  {
    icon: '💼',
    title: 'Generated $3M+ in client pipeline opportunities at IBM',
    desc: 'Identified and progressed enterprise opportunities across data & AI engagements, contributing directly to business growth.',
    tags: ['$3M+ Value', 'IBM'],
  },
  {
    icon: '🚀',
    title: 'Delivered AI products used by millions across Canada & the US',
    desc: 'Contributed to 3+ enterprise-scale AI releases including conversational AI deployments live on the CIBC platform — serving customers across Canada and the United States.',
    tags: ['Millions of users', 'CIBC · Banking', 'Production · Live'],
  },
  {
    icon: '🎤',
    title: 'Internal Tech Talks & Knowledge Sharing',
    desc: 'Delivered internal talks on data & AI topics, translating complex concepts for cross-functional teams and driving knowledge across the organisation.',
    tags: ['Technical Leadership', 'Knowledge Sharing'],
  },
  {
    icon: '🌱',
    title: 'Mentored 5+ Engineers',
    desc: 'Supported junior and mid-level team members through technical guidance, career conversations, and hands-on project mentorship.',
    tags: ['5+ People', 'Mentorship · Leadership'],
  },
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
                    <a
                      href={CREDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 py-3.5 group cursor-pointer"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-white transition-shadow group-hover:shadow-md" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                        <img src={c.logo} alt={c.issuer} width="16" height="16" className="object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-zinc-800 leading-snug group-hover:text-[#1b4b75] transition-colors">{c.name}</p>
                        <p className="text-[10px] text-zinc-400 mt-0.5">{c.issuer}</p>
                      </div>
                      <svg className="mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1b4b75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
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
                    key={a.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                  >
                    {a.link ? (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 py-3.5 group cursor-pointer">
                        <span className="text-base leading-none shrink-0 mt-0.5">{a.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-zinc-800 leading-snug group-hover:text-[#a07830] transition-colors mb-1">{a.title}</p>
                          <p className="text-[10px] text-zinc-500 leading-relaxed mb-1.5">{a.desc}</p>
                          {a.note && <p className="text-[9px] text-zinc-400 italic mb-1.5">{a.note}</p>}
                          <div className="flex flex-wrap gap-1">
                            {a.tags.map(t => <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(160,120,48,0.1)', color: '#a07830' }}>{t}</span>)}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 py-3.5">
                        <span className="text-base leading-none shrink-0 mt-0.5">{a.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-zinc-800 leading-snug mb-1">{a.title}</p>
                          <p className="text-[10px] text-zinc-500 leading-relaxed mb-1.5">{a.desc}</p>
                          <div className="flex flex-wrap gap-1">
                            {a.tags.map(t => <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(160,120,48,0.1)', color: '#a07830' }}>{t}</span>)}
                          </div>
                        </div>
                      </div>
                    )}
                    {i < achievements.length - 1 && (
                      <div className="h-px" style={{ background: 'linear-gradient(90deg, rgba(160,120,48,0.12) 0%, transparent 100%)' }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Tech Stack ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(27,75,117,0.10)',
                boxShadow: '0 8px 40px rgba(27,75,117,0.06), 0 1px 0 rgba(255,255,255,0.9) inset',
              }}
            >
              <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, #2d4a2d 0%, #3d6b3d 100%)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 mb-0.5">Tech Stack</p>
                <p className="text-white text-sm font-semibold">Tools I work with</p>
              </div>
              <div className="px-5 py-4 flex flex-col gap-3">
                {[
                  { label: 'Data & Cloud', tags: ['Azure', 'Databricks', 'PySpark', 'ADF', 'Airflow'] },
                  { label: 'ML & AI', tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs'] },
                  { label: 'Engineering', tags: ['SQL', 'Docker', 'CI/CD', 'FastAPI', 'Git'] },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400 mb-1.5">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                          style={{ background: 'rgba(27,75,117,0.07)', color: '#1b4b75', border: '1px solid rgba(27,75,117,0.12)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
