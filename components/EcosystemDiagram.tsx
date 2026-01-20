'use client'

export default function EcosystemDiagram() {
    return (
        <section className="bg-slate-900 py-24 text-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-6">A Trusted Infrastructure Layer</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            SSL operations as a neutral infrastructure layer connecting banks, enterprises, MSMEs, agents, and public institutions. We provide the rails for secure, interoperable digital services.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 border border-slate-700 bg-slate-800/50">
                                <div className="font-mono text-blue-400 text-sm">01</div>
                                <div className="text-sm font-medium">Bank & FI Core Connectivity</div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-slate-700 bg-slate-800/50">
                                <div className="font-mono text-blue-400 text-sm">02</div>
                                <div className="text-sm font-medium">Enterprise Reconciliation Systems</div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-slate-700 bg-slate-800/50">
                                <div className="font-mono text-blue-400 text-sm">03</div>
                                <div className="text-sm font-medium">Government Service Aggregation</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Schematic Diagram */}
                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-80 h-80 border border-slate-700 rounded-full flex items-center justify-center">
                            {/* Outer Ring */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-slate-900 px-3 text-xs text-slate-500 uppercase tracking-widest">Institutions</div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-slate-900 px-3 text-xs text-slate-500 uppercase tracking-widest">Consumers</div>

                            {/* Inner Core */}
                            <div className="w-40 h-40 border border-blue-900/50 bg-blue-900/10 rounded-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="font-bold text-white text-lg">SSL Core</div>
                                    <div className="text-[10px] text-blue-400 uppercase tracking-widest mt-1">Infrastructure</div>
                                </div>
                            </div>

                            {/* Connecting Axis */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-px h-full bg-slate-800"></div>
                                <div className="h-px w-full bg-slate-800"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
