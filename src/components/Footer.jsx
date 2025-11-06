import React from 'react';
import { ShieldCheck, HelpCircle, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-300">
        <div>
          <div className="text-white font-extrabold text-lg">PetStop</div>
          <p className="mt-2 text-sm">A simple, trusted store for virtual pets and items. Competitive pricing and fast delivery via Discord.</p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4" /> Secure checkout and verified delivery
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-sm">
            <li>How does delivery work? — After purchase, a Discord ticket opens for manual delivery within 12 hours.</li>
            <li>Is this safe? — Yes. Payments are processed by trusted providers and we never ask for passwords.</li>
            <li>What payments? — Stripe & PayPal supported. Parents can check out easily.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm">
            <a href="https://discord.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200">
              <MessageCircle className="w-4 h-4" /> Join our Discord
            </a>
            <a href="mailto:hello@petstop.gg" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200">
              <Mail className="w-4 h-4" /> Business inquiries
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-slate-400 py-4">
        © {new Date().getFullYear()} PetStop. All rights reserved.
      </div>
    </footer>
  );
}
