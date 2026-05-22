import Navbar from './components/Navbar.jsx';
import SideNav from './components/SideNav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Toolkit from './components/Toolkit.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import WatercolorBackground from './components/WatercolorBackground.jsx';

export default function App() {
  return (
    <div className="min-h-screen text-zinc-900 antialiased relative" style={{ zIndex: 1 }}>
      <WatercolorBackground />
      <Navbar />
      <SideNav />
      <main>
        <Hero />
        <About />
        <Toolkit />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 px-6 text-center text-xs text-zinc-400 border-t border-zinc-200">
        © {new Date().getFullYear()} Vidhi Pitroda · Built with React & Tailwind
      </footer>
    </div>
  );
}
