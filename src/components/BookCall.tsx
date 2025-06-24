import React from 'react';
import { Calendar, MessageCircle, CheckCircle } from 'lucide-react';

export default function BookCall() {
  const benefits = [
    "Get unblocked on your current AI infrastructure challenges",
    "Free architecture review of your existing backend",
    "Clear roadmap for scaling your AI systems",
    "No sales pitch just actionable technical insights"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Talk Infra
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            If your backend is crashing or slow, I'll help you untangle it. Book a free 15-min call zero fluff, just value.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold mb-6">What You'll Get:</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Free Strategy Call</h3>
                <p className="text-blue-200">15 minutes • No commitment</p>
              </div>

              <div className="space-y-4 mb-6 text-left">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Discuss your current challenges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Get immediate technical insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Explore potential collaboration</span>
                </div>
              </div>

              <a 
                href="https://calendly.com/mekastans/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105">
                  Book My Free Strategy Call
                </button>
              </a>
              
              <p className="text-xs text-blue-200 mt-3 text-center">
                Usually responds within 2 hours
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-blue-100 text-center">
              <span className="font-semibold">Busy this week?</span> No problem. I typically have availability within 24-48 hours and can work around your timezone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}