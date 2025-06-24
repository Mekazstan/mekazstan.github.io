import React from 'react';
import { ExternalLink, Play, Code } from 'lucide-react';

export default function LiveDemo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            See It in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A working demo I built in 48 hrs includes LLM API, vector search, and full token tracking.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">Live Production Demo</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">FastAPI + LLM + Vector DB</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Under the Hood:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>FastAPI backend with async request handling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>LLM integration with smart prompting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Vector similarity search with Pinecone</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Real-time token usage tracking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Deployed on AWS with auto-scaling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2"># Response Time</div>
                  <div className="text-white">Average: 1.2s</div>
                  <div className="text-white">P95: 2.1s</div>
                  <div className="text-green-400 mt-4 mb-2"># Token Efficiency</div>
                  <div className="text-white">Cost per query: $0.003</div>
                  <div className="text-white">Optimized: 67% savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="http://54.210.145.244/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Try Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg transition-colors duration-200 space-x-2">
                  <span>Watch Code Walkthrough</span>
                  <span className="text-sm text-slate-500">(Coming Soon)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}