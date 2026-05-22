import { motion } from 'framer-motion';
import { skills } from '../data.js';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden scroll-mt-8">
      {/* subtle warm blob */}
      <div className="pointer-events-none absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-100/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 mb-12">
            A Few Words
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            className="space-y-5 text-[17px] text-zinc-600 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <p>
              Data &amp; AI Engineer with a passion for building end-to-end intelligent
              systems. I specialise in transforming raw data into actionable insights —
              from ingestion pipelines and feature engineering through to model deployment
              and production ML experiences.
            </p>
            <p>
              My work blends engineering rigour with product thinking. Whether it's
              wrangling distributed datasets, fine-tuning LLMs, or designing retrieval
              pipelines, I bring curiosity and precision to every layer of the stack.
              If it involves{' '}
              <span className="font-semibold text-zinc-800">
                Python, SQL, or Large Language Models
              </span>
              , I'm in my element.
            </p>
            <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-zinc-500 text-base">
              "The goal is to turn data into information, and information into insight."
            </blockquote>
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="rounded-2xl bg-white border border-zinc-200 shadow-sm p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-4">
                Technical Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-700 border border-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
