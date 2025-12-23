// @ts-ignore: React is provided by the host project
import React, { useState, useEffect } from 'react';
// @ts-ignore: lucide-react types may be provided externally
import { MessageCircle, MessageSquare, X } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { DestinationsPage } from './components/DestinationsPage';
import { PackagesPage } from './components/PackagesPage';
import { TripPlannerPage } from './components/TripPlannerPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Button } from './components/ui/button';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showChatbot, setShowChatbot] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'destinations':
        return <DestinationsPage onNavigate={setCurrentPage} />;
      case 'packages':
        return <PackagesPage />;
      case 'planner':
        return <TripPlannerPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      
      {/* Floating Action Buttons - Improved Design */}
      <div className="fixed bottom-8 right-8 flex flex-col-reverse gap-4 z-40">
        {/* WhatsApp Button - More prominent and friendly */}
        <div className="group relative">
          <Button
            onClick={() => window.open('https://wa.me/94771234567?text=Hello! I would like to inquire about your tour packages.', '_blank')}
            className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-2xl hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center p-0 border-4 border-white"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
          </Button>
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            <div className="bg-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              Chat on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-[#333333]"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chatbot Button - Improved styling */}
        <div className="group relative">
          <Button
            onClick={() => setShowChatbot(!showChatbot)}
            className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center p-0 border-4 border-white ${
              showChatbot 
                ? 'bg-[#333333] hover:bg-[#444444] shadow-[0_10px_40px_rgba(51,51,51,0.4)]' 
                : 'bg-[#FF5F1F] hover:bg-[#E54E17] shadow-[0_10px_40px_rgba(255,95,31,0.4)]'
            }`}
            title="Chat with us"
          >
            {showChatbot ? (
              <X className="w-8 h-8 text-white" strokeWidth={2.5} />
            ) : (
              <MessageCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
            )}
          </Button>
          {/* Tooltip */}
          {!showChatbot && (
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
              <div className="bg-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                Need help? Chat with us
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="border-8 border-transparent border-l-[#333333]"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Enhanced Chatbot Widget */}
      {showChatbot && (
        <div className="fixed bottom-32 right-8 w-[380px] max-w-[calc(100vw-4rem)] bg-white rounded-2xl shadow-2xl z-40 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#FF5F1F]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">Travel ra Support</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-white/95 text-sm">Online - We're here to help!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chat Content */}
          <div className="p-5 h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="flex gap-3 animate-in slide-in-from-left duration-500">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF5F1F] to-[#FFC300] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">TR</span>
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md max-w-[80%]">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    👋 Welcome to <span className="font-semibold text-[#FF5F1F]">Travel ra</span>! 
                    I'm here to help you plan your perfect Sri Lankan adventure.
                  </p>
                </div>
              </div>
              
              {/* Quick Options Message */}
              <div className="flex gap-3 animate-in slide-in-from-left duration-500 delay-150">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF5F1F] to-[#FFC300] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">TR</span>
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md flex-1">
                  <p className="text-sm text-gray-800 mb-3 font-medium">How can I assist you today?</p>
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        setCurrentPage('packages');
                        setShowChatbot(false);
                      }}
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#FF5F1F]/10 to-[#FFC300]/10 hover:from-[#FF5F1F]/20 hover:to-[#FFC300]/20 rounded-xl text-sm text-[#333333] transition-all duration-200 hover:shadow-md border border-[#FF5F1F]/20 font-medium"
                    >
                      📦 Browse Tour Packages
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentPage('planner');
                        setShowChatbot(false);
                      }}
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#FF5F1F]/10 to-[#FFC300]/10 hover:from-[#FF5F1F]/20 hover:to-[#FFC300]/20 rounded-xl text-sm text-[#333333] transition-all duration-200 hover:shadow-md border border-[#FF5F1F]/20 font-medium"
                    >
                      ✈️ Plan a Custom Trip
                    </button>
                    <button 
                      onClick={() => window.open('https://wa.me/94771234567', '_blank')}
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl text-sm text-[#128C7E] transition-all duration-200 hover:shadow-md border border-green-200 font-medium"
                    >
                      💬 Continue on WhatsApp
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentPage('contact');
                        setShowChatbot(false);
                      }}
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#FF5F1F]/10 to-[#FFC300]/10 hover:from-[#FF5F1F]/20 hover:to-[#FFC300]/20 rounded-xl text-sm text-[#333333] transition-all duration-200 hover:shadow-md border border-[#FF5F1F]/20 font-medium"
                    >
                      📞 Contact Information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Available 24/7 • Average response time: 2 minutes
            </p>
          </div>
        </div>
      )}
    </div>
  );
}