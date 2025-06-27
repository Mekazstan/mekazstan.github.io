import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-lg mb-6">
            Connect with me
          </p>
          
          <div className="flex justify-center items-center mb-8">
            <a 
              href="https://www.linkedin.com/in/chukwuemeka-asogwa-151a69219/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
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