import React from 'react';
import { Globe, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Financial Software Support
            <span className="block text-blue-300">for Latin America</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Empowering financial institutions across Latin America with cutting-edge software solutions and dedicated support services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Globe className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Regional Expertise</h3>
              <p className="text-gray-200">Deep understanding of Latin American financial markets and regulations</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Solutions</h3>
              <p className="text-gray-200">Bank-grade security and compliance with international standards</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-200">Round-the-clock technical assistance in your local language</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}