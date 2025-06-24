import React from 'react';
import me from '../assets/me.jpeg';
import { Wrench, Zap } from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who's Behind the Code?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  {/* <User className="w-32 h-32 text-white" /> */}
                  <img 
                    src={me}
                    alt="Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Available Now
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6">
                  I'm <span className="font-bold text-slate-900">Chukwuemeka Asogwa</span> — a Backend Architect for AI Infrastructure.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  I specialize in building production-grade APIs, vector workflows, and OpenAI integrations for fast-moving teams.
                </p>
                <p className="text-lg text-slate-900 font-semibold">
                  You're not hiring a <span style={{ textDecoration: 'line-through' }}>"coder"</span> you're hiring an execution engine who removes bottlenecks.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Wrench className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-slate-900">Technical Focus</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Python/FastAPI backend systems</li>
                    <li>• Vector databases & semantic search</li>
                    <li>• AI Model/LangChain integrations</li>
                    <li>• Production deployment & scaling</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-slate-900">Execution Style</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Ship working prototypes in 48hrs</li>
                    <li>• Production-ready code from day one</li>
                    <li>• Zero fluff, maximum value delivery</li>
                    <li>• Remote-first, timezone flexible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}