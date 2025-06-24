import React from 'react';
import { Code, Zap, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                AI Infra That <span className="text-blue-400">Doesn't Break</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                LLMs. Vector DBs. FastAPIs. I help AI startups ship faster with scalable backend systems.
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://calendly.com/mekastans/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book a Free Strategy Call
                </button>
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Code className="w-6 h-6 text-blue-400" />
                <span className="text-slate-300">FastAPI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-blue-400" />
                <span className="text-slate-300">Vector DBs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-blue-400" />
                <span className="text-slate-300">LLM APIs</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-blue-400"># AI Infrastructure Stack</div>
                    <div className="text-slate-300">from fastapi import FastAPI</div>
                    <div className="text-slate-300">from openai import OpenAI</div>
                    <div className="text-slate-300">import pinecone</div>
                    <div className="text-slate-300 pt-2">app = FastAPI()</div>
                    <div className="text-green-400"># Production-ready in 48hrs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}