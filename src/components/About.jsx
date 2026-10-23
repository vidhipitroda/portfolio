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
            <p className="text-[16px] text-zinc-600 leading-relaxed">
              I’m a Data &amp; AI Engineer who enjoys researching new ideas and turning them into practical products. I’m especially interested in building AI that solves real problems—and in making it reliable enough to use beyond a demo. Outside of work, you’ll often find me gardening, baking sourdough, or out cycling.
            </p>
          </motion.div>

          {/* Stat 1 — Years */}
          <motion.div {...tile(0.1)}
            className="col-span-1 rounded-2xl p-5 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #1b4b75 0%, #2d6fa3 100%)' }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Experience</p>
            <div>
              <p className="text-6xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'white' }}>5+</p>
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
              <p className="text-6xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'white' }}>7+</p>
              <p className="text-xs text-white/70 mt-1 font-medium">Projects Shipped</p>
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
                { icon: '✦', muted: true, text: "Let's build something great together" },
                { icon: '🔨', text: 'Building AI-powered data products' },
                { icon: '📍', text: 'Toronto, Ontario, Canada' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className={`text-sm ${item.muted ? 'text-zinc-400' : ''}`}>{item.icon}</span>
                  <p className="text-xs font-semibold text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
