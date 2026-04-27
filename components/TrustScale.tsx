'use client'

export default function TrustScale() {
    return (
        <section className="bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Horizontal Stat Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 border-x border-slate-200">
                    {[
                        { label: 'Banks & FIs Connected', value: '60+' },
                        { label: 'Merchants on SSLCOMMERZ', value: '10,000+' },
                        { label: 'Operating History', value: '25+ Years' },
                        { label: 'Merchant & Agent Reach', value: 'Nationwide' },
                    ].map((stat, i) => (
                        <div key={i} className="py-8 px-6 flex flex-col items-center text-center bg-white hover:bg-slate-50 transition-colors">
                            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-2">{stat.value}</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed max-w-[140px]">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Compliance Strip */}
                <div className="py-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 border-x border-b border-slate-200 bg-slate-100/50">
                    <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                        <span className="text-sm font-bold text-slate-600">PCI DSS Level 1</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                        <span className="text-sm font-bold text-slate-600">Licensed Payment System Operator (PSO), Bangladesh Bank</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                        <span className="text-sm font-bold text-slate-600">ISO/IEC 27001:2013</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                        <span className="text-sm font-bold text-slate-600">CMMI-DEV Level 3</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
