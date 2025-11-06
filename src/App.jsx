import React from 'react';
import HeroSection from './components/HeroSection';
import GameSelector from './components/GameSelector';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold tracking-tight">PetStop</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Beta</span>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-sm text-slate-300">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#games" className="hover:text-white">Games</a>
            <a href="#help" className="hover:text-white">Help</a>
          </nav>
          <button className="rounded-md bg-sky-500 hover:bg-sky-600 text-white px-3 py-1.5 text-sm font-semibold">Sign In</button>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <HeroSection />

      {/* Game selector */}
      <div id="games">
        <GameSelector />
      </div>

      {/* Featured products grid with simple sorting */}
      <FeaturedProducts />

      {/* Footer with FAQ + contact */}
      <div id="help">
        <Footer />
      </div>
    </div>
  );
}
