import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DestinationsPageProps {
  onNavigate: (page: string) => void;
}

export function DestinationsPage({ onNavigate }: DestinationsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'beach', label: 'Beach' },
    { id: 'hiking', label: 'Hiking' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'cultural', label: 'Cultural' },
  ];

  const destinations = [
    {
      id: 1,
      name: 'Sigiriya',
      description: 'Ancient rock fortress with breathtaking views',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1705365291453-7962869cae67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc2NjM5MzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['UNESCO World Heritage Site', 'Ancient Frescoes', 'Lion Rock'],
    },
    {
      id: 2,
      name: 'Ella',
      description: 'Scenic hill country with stunning train journeys',
      category: 'hiking',
      image: 'https://images.unsplash.com/photo-1704797389166-c7dac99fc633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFbGxhJTIwU3JpJTIwTGFua2ElMjB0cmFpbnxlbnwxfHx8fDE3NjYzMDAwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Tea Plantations'],
    },
    {
      id: 3,
      name: 'Mirissa',
      description: 'Beautiful beaches and whale watching paradise',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1693307379048-890167f73704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXJpc3NhJTIwYmVhY2glMjB3aGFsZXxlbnwxfHx8fDE3NjYzOTM3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Whale Watching', 'Beach Activities', 'Seafood'],
    },
    {
      id: 4,
      name: 'Yala National Park',
      description: 'Premier wildlife safari destination',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1751660762088-2c340bd7be73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZYWxhJTIwd2lsZGxpZmUlMjBzYWZhcml8ZW58MXx8fHwxNzY2MzkzNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Leopard Spotting', 'Elephant Herds', 'Bird Watching'],
    },
    {
      id: 5,
      name: 'Kandy',
      description: 'Cultural capital with the Temple of the Tooth',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1696857674757-185edd346e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBjdWx0dXJhbCUyMGhlcml0YWdlfGVufDF8fHx8MTc2NjM5MzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Sacred Temple', 'Cultural Shows', 'Botanical Gardens'],
    },
    {
      id: 6,
      name: 'Horton Plains',
      description: 'High-altitude plateau with World\'s End viewpoint',
      category: 'hiking',
      image: 'https://images.unsplash.com/photo-1660231226843-a24144d4a933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHRyZWtraW5nfGVufDF8fHx8MTc2NjM5MzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['World\'s End', 'Baker\'s Falls', 'Unique Flora'],
    },
  ];

  const filteredDestinations =
    selectedCategory === 'all'
      ? destinations
      : destinations.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Explore Destinations</h1>
          <p className="text-xl">Discover the wonders of Sri Lanka</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={
                  selectedCategory === category.id
                    ? 'bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white'
                    : 'border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F]/10'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <MapPin className="w-5 h-5 text-[#FFC300]" />
                      <h3 className="text-xl">{destination.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="space-y-2 mb-4">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FFC300] rounded-full" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => onNavigate('packages')}
                    className="w-full bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white group"
                  >
                    See Tours to this Place
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
