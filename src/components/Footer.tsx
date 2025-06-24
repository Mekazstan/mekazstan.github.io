import React from 'react';
import { Code, Database, Zap, Globe } from 'lucide-react';

export default function Footer() {
  const techStack = [
    { name: 'FastAPI', icon: <Code className="w-4 h-4" /> },
    { name: 'OpenAI', icon: <Zap className="w-4 h-4" /> },
    { name: 'Pinecone', icon: <Database className="w-4 h-4" /> },
    { name: 'Chroma', icon: <Database className="w-4 h-4" /> },
    { name: 'Railway', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-lg mb-6">
            Built with FastAPI, OpenAI, Pinecone, Chroma, Railway
          </p>
          
          <div className="flex justify-center items-center space-x-6 mb-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-800 px-3 py-2 rounded-lg">
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2025 Chukwuemeka Asogwa. Ready to ship production-grade AI infrastructure.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Contact: Available for immediate project engagement • Remote-first • Timezone flexible
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}