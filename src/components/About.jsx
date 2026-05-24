import { motion } from 'framer-motion';

const tile = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden scroll-mt-8">
      <div className="pointer-events-none absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-100/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div {...tile(0)} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">About</p>
          <h2 className="text-4xl md:text-5xl tracking-wider uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}>
            A Few Words
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-4">

          {/* Bio — spans 2 cols, 2 rows */}
          <motion.div {...tile(0.05)}
            className="col-span-2 row-span-2 rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #fdf8f4 0%, #faeee5 100%)', border: '1px solid rgba(184,92,56,0.12)' }}
          >
            <div className="space-y-4 text-[16px] text-zinc-600 leading-relaxed">
              <p>
                I work across data engineering, machine learning, and cloud. Four years across a few different industries.
              </p>
              <p>
                I enjoy the early stage of a problem, when the shape of it isn't clear yet and you have to ask the right questions before writing a single line of code. I also genuinely enjoy the research part: reading papers, digging into how something actually works.
              </p>
              <p>
                I care about doing things well. Whether that's a pipeline, a model, or a conversation with a stakeholder. I try to find the right level of effort for what's actually needed, not over-engineer for the sake of it.
              </p>
              <p>
                Outside work I grow things in my garden, bake sourdough, cycle, run, play tennis, and read. Enough to keep me away from screens and occasionally humble.
              </p>
            </div>
          </motion.div>

          {/* Stat 1 — Years */}
          <motion.div {...tile(0.1)}
            className="col-span-1 rounded-2xl p-5 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #1b4b75 0%, #2d6fa3 100%)' }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Experience</p>
            <div>
              <p className="text-6xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'white' }}>4+</p>
              <p className="text-xs text-white/70 mt-1 font-medium">Years in Data & AI</p>
            </div>
          </motion.div>

          {/* Stat 2 — Projects */}
          <motion.div {...tile(0.15)}
            className="col-span-1 rounded-2xl p-5 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #b85c38 0%, #d4845a 100%)' }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Output</p>
            <div>
              <p className="text-6xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'white' }}>10+</p>
              <p className="text-xs text-white/70 mt-1 font-medium">Projects Shipped</p>
            </div>
          </motion.div>

          {/* Stat 3 — Tools, wide */}
          <motion.div {...tile(0.2)}
            className="col-span-2 rounded-2xl p-5 flex items-center justify-between gap-6"
            style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(27,75,117,0.09)', boxShadow: '0 2px 16px rgba(27,75,117,0.06)' }}
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-1">Stack Depth</p>
              <p className="text-6xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}>15+</p>
              <p className="text-xs text-zinc-400 mt-1 font-medium">Technologies Used</p>
            </div>
            {/* Mini icon row */}
            <div className="flex flex-wrap gap-2 max-w-[180px]">
              {['Python', 'SQL', 'Azure', 'Spark', 'LLMs', 'Docker'].map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: 'rgba(27,75,117,0.07)', color: '#1b4b75' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Currently tile */}
          <motion.div {...tile(0.25)}
            className="col-span-2 rounded-2xl p-5"
            style={{ background: 'linear-gradient(135deg, #f0f7f4 0%, #e0f2ec 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#10b981' }}>Currently</p>
            <div className="flex flex-col gap-2">
              {[
                { icon: '🟢', text: "Let's build something great together" },
                { icon: '🔨', text: 'Building AI-powered data products' },
                { icon: '📍', text: 'Toronto, Ontario, Canada' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <p className="text-xs font-semibold text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cloud tools stat */}
          <motion.div {...tile(0.3)}
            className="col-span-2 rounded-2xl p-5 flex items-center gap-5"
            style={{ background: 'linear-gradient(135deg, #fdf8ed 0%, #f5edcc 100%)', border: '1px solid rgba(184,137,42,0.15)' }}
          >
            <p className="text-7xl leading-none shrink-0" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#b8892a' }}>5+</p>
            <div>
              <p className="text-xs font-bold text-zinc-700">Cloud & MLOps Tools</p>
              <p className="text-[11px] text-zinc-400 mt-0.5">Azure · Databricks · MLflow · Airflow · Docker</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
