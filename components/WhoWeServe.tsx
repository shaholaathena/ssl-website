'use client'

export default function WhoWeServe() {
    const segments = [
        { name: 'Banks & Financial Institutions', id: '01' },
        { name: 'Enterprises & FMCGs', id: '02' },
        { name: 'MSMEs & Agent Networks', id: '03' },
        { name: 'Public & Ecosystem Partners', id: '04' }
    ]

    return (
        <section className="bg-slate-50 py-24 border-b border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Who We Serve</h2>
                    </div>
                    <div className="hidden md:block text-slate-500 text-sm font-medium">
                        Powering key sectors of the digital economy
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {segments.map((segment, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-slate-200 p-8 h-64 flex flex-col justify-between hover:bg-blue-900 hover:border-blue-900 transition-all duration-300 md:-ml-px md:-mt-px z-0 hover:z-10 cursor-pointer"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-sm text-slate-400 group-hover:text-blue-400 transition-colors">
                                    /{segment.id}
                                </span>
                                <svg className="w-5 h-5 text-slate-300 group-hover:text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white leading-tight max-w-[80%] transition-colors">
                                    {segment.name}
                                </h3>
                                <div className="w-8 h-1 bg-slate-200 mt-4 group-hover:bg-blue-500 transition-colors"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
