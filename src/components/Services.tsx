import React from 'react';
import { Server, Shield, GitBranch, HeartHandshake, MessageSquare, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Core Banking Systems",
      description: "Implementation and maintenance of robust core banking solutions"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Ensuring adherence to regional and international banking regulations"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "System Integration",
      description: "Seamless integration with existing banking infrastructure"
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Client Support",
      description: "Dedicated support teams in your time zone and language"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Training",
      description: "Comprehensive training programs for your staff"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance",
      description: "Proactive system maintenance and updates"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive financial software solutions tailored for Latin American institutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}