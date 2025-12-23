import { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Star, Shield, Headphones, Settings, Car, Plane, Navigation, Wifi, CreditCard, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1',
  });

  const handleBooking = () => {
    console.log('Booking:', bookingData);
    // Handle booking logic
  };

  const featuredPackages = [
    {
      id: 1,
      title: 'Ultimate Adventure',
      description: '6 Days of thrilling experiences across Sri Lanka',
      image: 'https://images.unsplash.com/photo-1641584495089-5914d85d9bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdhdGVyJTIwcmFmdGluZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjYzOTM3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 Days',
      maxPeople: '10',
      locations: 'Sigiriya, Ella, Kitulgala',
      price: 'From $899',
    },
    {
      id: 2,
      title: 'Nature & Bird Watching',
      description: 'Explore Sri Lanka\'s diverse wildlife and natural beauty',
      image: 'https://images.unsplash.com/photo-1703536760770-b5f5cdd838b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwd2F0Y2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzY2MzIxMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days',
      maxPeople: '8',
      locations: 'Yala, Sinharaja, Bundala',
      price: 'From $599',
    },
    {
      id: 3,
      title: 'Cultural Heritage Tour',
      description: 'Journey through ancient temples and royal palaces',
      image: 'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYW5keSUyMHRlbXBsZSUyMFNyaSUyMExhbmthfGVufDF8fHx8MTc2NjQyMDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '5 Days',
      maxPeople: '12',
      locations: 'Kandy, Polonnaruwa, Anuradhapura',
      price: 'From $749',
    },
    {
      id: 4,
      title: 'Beach & Whale Paradise',
      description: 'Coastal relaxation with whale watching adventures',
      image: 'https://images.unsplash.com/photo-1734279135339-bc3cdb6bb841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXJpc3NhJTIwYmVhY2glMjB3aGFsZXN8ZW58MXx8fHwxNzY2NDU3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days',
      maxPeople: '10',
      locations: 'Mirissa, Unawatuna, Galle',
      price: 'From $649',
    },
    {
      id: 5,
      title: 'Hill Country Escape',
      description: 'Scenic tea plantations and mountain landscapes',
      image: 'https://images.unsplash.com/photo-1586511426540-d28fdb7ff3f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOdXdhcmElMjBFbGl5YSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzY2NDU3ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 Days',
      maxPeople: '8',
      locations: 'Nuwara Eliya, Ella, Haputale',
      price: 'From $499',
    },
    {
      id: 6,
      title: 'Colonial Heritage Tour',
      description: 'Explore Dutch and British colonial architecture',
      image: 'https://images.unsplash.com/photo-1713038948592-5d070e8e8459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYWxsZSUyMGZvcnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NjY0NTc4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 Days',
      maxPeople: '12',
      locations: 'Galle Fort, Colombo, Jaffna',
      price: 'From $449',
    },
  ];

  const topDestinations = [
    { name: 'Sigiriya', image: 'https://images.unsplash.com/photo-1705365291453-7962869cae67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc2NjM5MzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Ella', image: 'https://images.unsplash.com/photo-1586511426540-d28fdb7ff3f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOdXdhcmElMjBFbGl5YSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzY2NDU3ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mirissa', image: 'https://images.unsplash.com/photo-1734279135339-bc3cdb6bb841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXJpc3NhJTIwYmVhY2glMjB3aGFsZXN8ZW58MXx8fHwxNzY2NDU3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Kandy', image: 'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYW5keSUyMHRlbXBsZSUyMFNyaSUyMExhbmthfGVufDF8fHx8MTc2NjQyMDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Yala', image: 'https://images.unsplash.com/photo-1703536760770-b5f5cdd838b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwd2F0Y2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzY2MzIxMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const fleetVehicles = [
    {
      name: 'Premium Sedan',
      description: 'Perfect for couples and small families',
      features: ['Air Conditioning', 'Free Wi-Fi', 'English Speaking Driver', 'Luggage Space'],
      capacity: '1-3 passengers',
      image: 'https://images.unsplash.com/photo-1763789381108-b5622140f2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc2VkYW4lMjBjYXJ8ZW58MXx8fHwxNzY2NDMyMDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Luxury Van',
      description: 'Ideal for families and small groups',
      features: ['Air Conditioning', 'Free Wi-Fi', 'Expert Driver', 'Large Luggage Space'],
      capacity: '4-8 passengers',
      image: 'https://images.unsplash.com/photo-1765461734605-34657fa04db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YW4lMjB2ZWhpY2xlfGVufDF8fHx8MTc2NjQ1NzgzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Mini Coach',
      description: 'Best for larger groups and tours',
      features: ['Premium Comfort', 'Free Wi-Fi', 'Professional Driver', 'Extra Storage'],
      capacity: '9-15 passengers',
      image: 'https://images.unsplash.com/photo-1618323656732-351fc336af61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pJTIwY29hY2glMjBidXN8ZW58MXx8fHwxNzY2NDU3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Australia',
      rating: 5,
      comment: 'Amazing experience! Our driver was professional and the itinerary was perfect.',
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'Best way to explore Sri Lanka. Highly customizable and great service.',
    },
    {
      name: 'Emma Williams',
      location: 'UK',
      rating: 5,
      comment: 'Unforgettable journey through beautiful landscapes. Highly recommend!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1705365291453-7962869cae67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc2NjM5MzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sri Lankan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8 text-white">
            <h1 className="text-5xl md:text-7xl mb-4">Explore Sri Lanka with Ease & Adventure</h1>
            <p className="text-xl md:text-2xl mb-2">Reliable Airport Pickups & Tailor-made Island Tours</p>
            <p className="text-lg md:text-xl text-[#FFC300]">Your journey, your way</p>
          </div>

          {/* Booking Widget */}
          <Card className="max-w-5xl mx-auto p-6 bg-white/95 backdrop-blur-sm">
            <h3 className="mb-6 text-center text-[#333333]">Quick Booking - Drop & Pickup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                <Input
                  placeholder="Pickup Location"
                  value={bookingData.pickup}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, pickup: e.target.value })
                  }
                  className="pl-10 bg-input-background border-0"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                <Input
                  placeholder="Drop-off Location"
                  value={bookingData.dropoff}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, dropoff: e.target.value })
                  }
                  className="pl-10 bg-input-background border-0"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                <Input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, date: e.target.value })
                  }
                  className="pl-10 bg-input-background border-0"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                <Input
                  type="time"
                  value={bookingData.time}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, time: e.target.value })
                  }
                  className="pl-10 bg-input-background border-0"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                <select
                  value={bookingData.passengers}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, passengers: e.target.value })
                  }
                  className="w-full h-10 pl-10 pr-3 rounded-md bg-input-background border-0"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                <select
                  className="w-full h-10 pl-10 pr-3 rounded-md bg-input-background border-0"
                >
                  <option>Sedan</option>
                  <option>Van</option>
                  <option>Mini Coach</option>
                </select>
              </div>
            </div>
            <Button
              onClick={handleBooking}
              className="w-full mt-6 bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white h-12 text-lg"
            >
              Book Now
            </Button>
          </Card>
        </div>
      </section>

      {/* Quick Service Tiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-[#FFC300]">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF5F1F] to-[#FFC300] rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-[#333333]">Airport Transfers</h3>
              <p className="text-gray-600">24/7 reliable pickup and drop-off services from all major airports</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-[#FFC300]">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF5F1F] to-[#FFC300] rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-[#333333]">Guided Tours</h3>
              <p className="text-gray-600">Expert drivers who know all the hidden gems and best routes</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-[#FFC300]">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF5F1F] to-[#FFC300] rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-[#333333]">Custom Itineraries</h3>
              <p className="text-gray-600">Tours designed exactly how you want them, at your own pace</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]">Featured Packages</h2>
            <p className="text-xl text-gray-600">Curated experiences for unforgettable adventures</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                <div className="relative h-56">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFC300] text-[#333333] px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-[#333333]">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF5F1F]"/>
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#FF5F1F]"/>
                      <span>Max {pkg.maxPeople} people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF5F1F]"/>
                      <span>{pkg.locations}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl text-[#FF5F1F] font-semibold">{pkg.price}</p>
                    </div>
                    <Button
                      onClick={() => onNavigate('packages')}
                      className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('packages')}
              className="bg-[#333333] hover:bg-[#333333]/90 text-white px-8 py-6 text-lg"
            >
              View All Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Design Your Dream Tour */}
      <section className="py-20 bg-gradient-to-r from-[#FF5F1F] via-[#FFC300] to-[#FF5F1F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-6">Want Something Different?</h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">Customize your own Sri Lankan journey and explore at your own pace</p>
          <Button
            onClick={() => onNavigate('planner')}
            className="bg-white text-[#FF5F1F] hover:bg-white/90 px-12 py-6 text-xl"
          >
            Start Planning Your Custom Tour
          </Button>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]">Top Destinations</h2>
            <p className="text-xl text-gray-600">Explore the most beautiful places in Sri Lanka</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            {topDestinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-[#FFC300] hover:ring-[#FF5F1F] transition-all duration-300 hover:scale-110">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-3">
                    <span className="text-white font-semibold text-lg">{destination.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]">Our Fleet</h2>
            <p className="text-xl text-gray-600">Travel in comfort with our premium vehicles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {fleetVehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-[#333333]">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="flex items-center gap-2 mb-4 text-[#FF5F1F] font-semibold">
                    <Users className="w-5 h-5" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#FFC300]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Updated */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#333333]">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#333333]">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock support for all your travel needs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#333333]">Experienced Drivers</h3>
              <p className="text-gray-600">Professional, licensed drivers with local expertise</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#333333]">Customizable Tours</h3>
              <p className="text-gray-600">Tailor your journey to match your interests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]">What Our Guests Say</h2>
            <div className="flex items-center justify-center gap-2 text-[#FFC300] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#FFC300]" />
              ))}
            </div>
            <p className="text-xl text-gray-600">Rated 5.0 stars on TripAdvisor & Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF5F1F] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}