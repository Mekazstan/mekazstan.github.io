import React from 'react';
import { Zap, Brain, TrendingDown, Rocket, CheckCircle } from 'lucide-react';

export default function WhatIDo() {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "FastAPI APIs (LLM + LangChain)",
      description: "Production-grade APIs that handle thousands of requests without breaking"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Vector DBs (Pinecone, Chroma)",
      description: "Semantic search that actually works, with proper indexing and retrieval"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Token usage tracking + retry logic",
      description: "Smart cost management and bulletproof error handling"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Full deployment to Cloud / PAAS / your choice",
      description: "From localhost to production in hours, not weeks"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            I Build the Backend So You Can Build the Product
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Most AI teams struggle with infrastructure timeouts, broken vector lookups, crashing APIs. I solve that.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Result?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">99.9% uptime on production APIs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">50% reduction in token costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Ship features in days, not months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Scale from 100 to 100k users seamlessly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}