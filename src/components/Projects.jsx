import { motion } from 'framer-motion';
import { projects } from '../data.js';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group rounded-2xl bg-white border border-zinc-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      {/* Gradient header band */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-zinc-900 leading-tight">{project.title}</h3>
          {project.status && (
            <span className="ml-2 shrink-0 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-sm font-semibold text-zinc-400 mb-3">{project.tagline}</p>
        <p className="text-sm text-zinc-600 leading-relaxed mb-5">{project.description}</p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 underline-offset-2 hover:underline transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline-offset-2 hover:underline transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden scroll-mt-8">
      {/* bg blob */}
      <div className="pointer-events-none absolute top-10 right-0 w-[40vw] h-[40vw] bg-violet-100/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
