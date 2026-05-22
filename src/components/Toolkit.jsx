import { tools1, tools2 } from '../data.js';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function TickerRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items];
  const cls = direction === 'left' ? 'ticker-left' : 'ticker-right';
  return (
    <div className="relative flex overflow-hidden select-none py-2">
      <div className={`flex gap-6 shrink-0 ${cls}`}>
        {doubled.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.12, y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-2 shrink-0 px-5 py-3 rounded-xl bg-white border border-zinc-200 shadow-sm w-20 cursor-pointer"
          >
            <img
              src={`https://skillicons.dev/icons?i=${item.icon}`}
              alt={item.name}
              className="w-8 h-8"
            />
            <span className="text-[11px] font-medium text-zinc-600 text-center leading-tight">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative py-24 scroll-mt-8">
      <div className="pointer-events-none absolute bottom-0 left-0 w-[45vw] h-[40vw] bg-sky-100/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 mb-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">
            Tools &amp; Technologies
          </h2>
        </motion.div>
      </div>

      {/* overflow-hidden scoped only to ticker rows */}
      <motion.div
        className="space-y-4 overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        custom={1}
      >
        <TickerRow items={tools1} direction="left" />
        <TickerRow items={tools2} direction="right" />
      </motion.div>
    </section>
  );
}
