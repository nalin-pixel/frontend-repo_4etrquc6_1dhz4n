import React from 'react';
import { Gamepad2, ChevronRight } from 'lucide-react';

export default function GameSelector() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Choose a Game</h2>
        <p className="text-slate-300 text-sm">More games coming soon</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GameCard
            title="Plants vs Brainrots"
            desc="All pets and items"
            accent="bg-emerald-500"
            href="#shop"
          />
          <GameCard title="Grow a Garden" desc="Coming soon" disabled />
          <GameCard title="Steal a Brainrot" desc="Coming soon" disabled />
        </div>
      </div>
    </section>
  );
}

function GameCard({ title, desc, accent = 'bg-slate-600', disabled = false, href = '#' }) {
  const content = (
    <div className={`relative rounded-xl border border-white/10 p-5 bg-gradient-to-br from-slate-900 to-slate-950 ${
      disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-sky-500/40'
    } transition-colors`}
    >
      <div className="flex items-center justify-between">
        <div className={`w-8 h-8 rounded-md ${accent} flex items-center justify-center text-white shadow`}> 
          <Gamepad2 className="w-4 h-4" />
        </div>
        {!disabled && (
          <ChevronRight className="w-5 h-5 text-slate-200" />
        )}
      </div>
      <h3 className="mt-4 text-white font-semibold">{title}</h3>
      <p className="text-slate-300 text-sm">{desc}</p>
    </div>
  );

  if (disabled) return content;
  return (
    <a href={href} className="block focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl">
      {content}
    </a>
  );
}
