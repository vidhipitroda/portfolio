import { tools1, tools2 } from '../data.js';
import { motion } from 'framer-motion';

function TickerRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items];
  const cls = direction === 'left' ? 'ticker-left' : 'ticker-right';
  return (
    <div className="relative flex overflow-hidden select-none py-2">
      <div className={`flex gap-6 shrink-0 ${cls}`}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 shrink-0 px-5 py-3 rounded-xl bg-white border border-zinc-200 shadow-sm w-20"
          >
            <img
              src={`https://skillicons.dev/icons?i=${item.icon}`}
              alt={item.name}
              className="w-8 h-8"
            />
            <span className="text-[11px] font-medium text-zinc-600 text-center leading-tight">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative py-24 overflow-hidden scroll-mt-8">
      {/* bg blob */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[45vw] h-[40vw] bg-sky-100/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">
            Tools &amp; Technologies
          </h2>
        </motion.div>
      </div>

      <div className="space-y-4">
        <TickerRow items={tools1} direction="left" />
        <TickerRow items={tools2} direction="right" />
      </div>
    </section>
  );
}
