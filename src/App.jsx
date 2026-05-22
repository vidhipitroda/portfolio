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

export default function App() {
  return (
    <div className="min-h-screen text-zinc-900 antialiased relative">
      {/* Full-page cherry blossom background */}
      <GhibliTree />
      {/* Animated falling petals */}
      <FallingPetals />

      <SideNav />

      {/* Curved floating page card */}
      <div className="relative mx-auto min-h-screen"
        style={{
          maxWidth: '900px',
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: '0 0 2.5rem 2.5rem',
          boxShadow: '0 8px 60px rgba(0,0,0,0.13), 0 1.5px 0 rgba(255,255,255,0.7) inset',
          zIndex: 1,
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
