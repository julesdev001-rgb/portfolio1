
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen selection:bg-[#C9A227] selection:text-black">
      <Hero />
      <Portfolio />
      
      {/* Minimal Footer */}
      <footer className="py-12 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] uppercase tracking-[0.3em]">
          <p>&copy; {new Date().getFullYear()} Content Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">LinkedIn</a>
            <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
