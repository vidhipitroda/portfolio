import React from 'react';
import { motion } from 'framer-motion';

const phrases = [
  'Building with AI',
  'Shipping data products',
  'Wrangling petabyte pipelines',
  'Deploying ML to production',
  'Designing RAG systems',
];

function Typewriter() {
  const [idx, setIdx] = React.useState(0);
  const [displayed, setDisplayed] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const full = phrases[idx];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <motion.div
        className="flex flex-col items-center text-center max-w-2xl mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar */}
        <div className="relative mb-5">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-lg" />
          <img
            src="/profile.png"
            alt="Vidhi Pitroda"
            className="relative h-44 w-44 rounded-full object-cover border-[3px] border-white shadow-2xl"
          />
        </div>

        {/* Name */}
        <h1
          className="text-7xl md:text-9xl tracking-wider uppercase leading-[0.95]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#1b4b75' }}
        >
          Vidhi<br />Pitroda
        </h1>

        {/* Roles */}
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: '#1b4b75' }}>
          Data &amp; AI Engineer <span className="mx-2">|</span> AI Agents <span className="mx-2">|</span> LLMs
        </p>

        {/* Typewriter pill */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-sm ring-1 ring-zinc-200/80">
          <span className="text-sm font-medium text-zinc-700 min-h-[1.25em]">
            <Typewriter />
          </span>
          <span className="text-indigo-500">✦</span>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        className="absolute bottom-10 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-600 transition-colors bounce"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.button>
    </section>
  );
}
