import Navbar from './components/Navbar.jsx';
import SideNav from './components/SideNav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Toolkit from './components/Toolkit.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import GhibliTree from './components/GhibliTree.jsx';
import FallingPetals from './components/FallingPetals.jsx';
import WatercolorBackground from './components/WatercolorBackground.jsx';

export default function App() {
  return (
    <div className="min-h-screen text-zinc-900 antialiased relative">
      {/* Cherry blossom photo background */}
      <GhibliTree />
      {/* Watercolor paint strokes on top of photo */}
      <WatercolorBackground />
      {/* Animated falling petals */}
      <FallingPetals />

      <SideNav />

      {/* Floating page card — rounded rectangle, floats over background */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '1100px',
          margin: '2.5rem auto 2.5rem auto',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '1.75rem',
          boxShadow: '0 8px 60px rgba(0,0,0,0.14), 0 1.5px 0 rgba(255,255,255,0.7) inset',
          zIndex: 1,
          overflow: 'visible',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Toolkit />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="py-8 px-6 text-center text-xs text-zinc-400 border-t border-zinc-100">
          © {new Date().getFullYear()} Vidhi Pitroda · Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}

