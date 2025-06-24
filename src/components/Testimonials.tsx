import React from 'react';
import { Star, Quote } from 'lucide-react';


export default function Testimonials() {
  const testimonials = [
    {
      name: "David Stephenson",
      role: "CTO, AI Startup",
      company: "VectorFlow",
      rating: 4.7,
      text: "Chukwuemeka delivered exactly what we needed a production-ready FastAPI backend that handles our LLM workflows flawlessly. What impressed me most was his attention to error handling and cost optimization.",
      project: "LLM API Integration"
    },
    {
      name: "Marcel Postema, Rise",
      role: "Founder",
      company: "DataMind AI",
      rating: 5,
      text: "Chukwuemeka delivered exactly what we asked for. He is very responsive and proactieve and a great communicator. Will certainly hire him again for the next job.",
      project: "Backend Automations"
    },
    {
      name: "Oleksii Hrunichev",
      role: "Lead Engineer",
      company: "Semantic Labs",
      rating: 4.8,
      text: "Thank you for your support at every stage and for your quick response!",
      project: "App Development"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-5 h-5 text-yellow-400 fill-current opacity-50" />);
    }
    
    // Empty stars
    const remaining = 5 - stars.length;
    for (let i = 0; i < remaining; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from people who have worked with me.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-slate-500">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-slate-700 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    {/* <p className="text-sm text-slate-600">{testimonial.role}</p> */}
                    {/* <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p> */}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 inline-block">
            <p className="text-slate-600 mb-2">
              <span className="font-semibold text-slate-900">100% Job Success Rate</span> on Upwork
            </p>
            <p className="text-sm text-slate-500">
              5+ AI infrastructure projects delivered • Average 4.8/5 rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}