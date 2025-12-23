import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/760373b08d568ada03cb3de6cbccded8fa722c13.png';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Packages' },
    { id: 'planner', label: 'Custom Trip' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="Travel ra Taxi & Tours Logo" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[#333333] transition-colors hover:text-[#FF5F1F] font-medium ${
                  activePage === item.id ? 'text-[#FF5F1F]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#333333] hover:text-[#FF5F1F] transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button className="block w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">English</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">German</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">French</button>
              </div>
            </div>
            
            <Button 
              className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white rounded-md px-6"
              onClick={() => onNavigate('planner')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#333333]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 text-[#333333] transition-colors hover:text-[#FF5F1F] ${
                  activePage === item.id ? 'text-[#FF5F1F] font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button 
                className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white w-full"
                onClick={() => {
                  onNavigate('planner');
                  setMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}