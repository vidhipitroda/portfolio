import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'toolkit',    label: 'Toolkit' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
];

export default function SideNav() {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observers = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center gap-2.5 group"
            aria-label={`Go to ${label}`}
          >
            {/* Label tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm border border-zinc-200"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <motion.span
              animate={{
                scale: isActive ? 1.35 : 1,
                backgroundColor: isActive ? '#6366f1' : '#d4d4d8',
              }}
              transition={{ duration: 0.25 }}
              className="block rounded-full"
              style={{ width: isActive ? 10 : 7, height: isActive ? 10 : 7 }}
            />
          </button>
        );
      })}
    </nav>
  );
}
