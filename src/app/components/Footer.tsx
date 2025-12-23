import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4 text-[#FFC300]">Travel ra</h3>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for exploring the beautiful island of Sri Lanka.
              Customizable tours, experienced drivers, 24/7 service.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFC300] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFC300] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFC300] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            {/* Payment Icons */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">We Accept</p>
              <div className="flex gap-3 items-center flex-wrap">
                <div className="bg-white rounded px-3 py-2 flex items-center justify-center">
                  <CreditCard className="w-8 h-5 text-[#333333]" />
                </div>
                <div className="bg-white rounded px-3 py-2 text-[#333333] text-xs font-semibold">
                  VISA
                </div>
                <div className="bg-white rounded px-3 py-2 text-[#333333] text-xs font-semibold">
                  MASTER
                </div>
                <div className="bg-white rounded px-3 py-2 text-[#1565C0] text-xs font-semibold">
                  PayPal
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4 text-[#FFC300]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-[#FFC300] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="text-gray-300 hover:text-[#FFC300] transition-colors">
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="text-gray-300 hover:text-[#FFC300] transition-colors">
                  Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('planner')} className="text-gray-300 hover:text-[#FFC300] transition-colors">
                  Custom Trip
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-[#FFC300] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-[#FFC300] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-4 text-[#FFC300]">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">Airport Transfers</li>
              <li className="text-gray-300">City Tours</li>
              <li className="text-gray-300">Custom Packages</li>
              <li className="text-gray-300">Wildlife Safaris</li>
              <li className="text-gray-300">Cultural Tours</li>
              <li className="text-gray-300">Beach Holidays</li>
              <li className="text-gray-300">Adventure Tours</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl mb-4 text-[#FFC300]">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                <div>
                  <p>+94 77 123 4567</p>
                  <p className="text-xs text-gray-400 mt-1">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                <div>
                  <p>info@travelra.lk</p>
                  <p className="text-xs text-gray-400 mt-1">Quick Response</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                <div>
                  <p>123 Galle Road</p>
                  <p>Colombo 03, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Travel ra Taxi & Tours. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-[#FFC300] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#FFC300] transition-colors">Terms of Service</button>
              <button className="hover:text-[#FFC300] transition-colors">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}