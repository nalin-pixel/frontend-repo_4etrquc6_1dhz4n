import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Clock, Star, ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-950/80" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 px-3 py-1 text-xs font-medium mb-4">
          <Rocket className="w-4 h-4" />
          Launch Offer: Fast delivery on best sellers
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          PetStop — Your #1 Stop for Virtual Items
        </h1>
        <p className="mt-3 max-w-2xl text-slate-200 text-sm sm:text-base">
          Simple. Fast. Trusted. Shop Plants vs Brainrots pets with confidence and get your items delivered quickly via Discord.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-sky-500/20 transition-colors"
          >
            Shop Best Sellers
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://discord.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-100 px-5 py-3 text-sm font-semibold border border-white/10 backdrop-blur"
          >
            <MessageCircle className="w-4 h-4" />
            Join our Discord
          </a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <TrustBadge icon={Shield} label="Secure" sub="Safe payments" />
          <TrustBadge icon={Clock} label="12h Delivery" sub="Fast & reliable" />
          <TrustBadge icon={Star} label="Top Rated" sub="Loved by players" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon: Icon, label, sub }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-slate-100">
      <Icon className="w-4 h-4 text-sky-300" />
      <div className="text-left">
        <p className="text-xs font-semibold leading-none">{label}</p>
        <p className="text-[10px] text-slate-300 leading-tight">{sub}</p>
      </div>
    </div>
  );
}
