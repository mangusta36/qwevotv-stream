"use client";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  { name: "Starter", duration: "3 Months", price: "37", features: ["25k+ Channels", "4K HDR", "Anti-Freeze"], recommended: false },
  { name: "Popular", duration: "6 Months", price: "49", features: ["Full Content", "8K Ready", "Priority Support"], recommended: true },
  { name: "Ultimate", duration: "12 Months", price: "67", features: ["Full Access", "VIP Setup", "All Sports"], recommended: false }
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic">CHOOSE YOUR <span className="text-primary">PLAN.</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={`p-1 rounded-[3rem] ${plan.recommended ? 'bg-primary' : 'bg-white/10'}`}>
            <div className="bg-[#080808] rounded-[2.9rem] p-10 h-full flex flex-col">
              <span className="text-primary font-black text-[10px] uppercase mb-4 tracking-[0.2em]">{plan.duration}</span>
              <h3 className="text-2xl font-black text-white uppercase italic mb-6">{plan.name} PACK</h3>
              <div className="text-5xl font-black text-white mb-8">€{plan.price}</div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-white/60 italic">
                    <Check size={14} className="text-primary" /> {f}
                  </div>
                ))}
              </div>
              <a href="https://wa.me/447828714977" className={`py-4 rounded-xl font-black text-xs uppercase text-center transition-all ${plan.recommended ? 'bg-primary text-white' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                ORDER NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
