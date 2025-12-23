import { Award, Shield, Users, Heart, Car } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const fleet = [
    {
      name: 'Luxury Sedans',
      description: 'Comfortable 4-seater vehicles for couples and small families',
      image: 'https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYzODc0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      capacity: '1-4 passengers',
    },
    {
      name: 'Mini Vans',
      description: 'Spacious vehicles perfect for families and small groups',
      image: 'https://images.unsplash.com/photo-1758409313902-db8e331f71cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW4lMjB0cmFuc3BvcnQlMjB0cmF2ZWx8ZW58MXx8fHwxNzY2MzkzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      capacity: '5-8 passengers',
    },
    {
      name: 'Mini Coaches',
      description: 'Large vehicles for bigger groups and tour parties',
      image: 'https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYzODc0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      capacity: '9-15 passengers',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All vehicles are regularly maintained and drivers are professionally trained',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest quality service and unforgettable experiences',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction and comfort are at the heart of everything we do',
    },
    {
      icon: Heart,
      title: 'Passion for Sri Lanka',
      description: 'We love sharing the beauty and culture of our island with the world',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '50+', label: 'Tour Packages' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">About Travel ra</h1>
          <p className="text-xl">Your trusted partner for exploring Sri Lanka</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-6 text-[#333333]">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2014, Travel ra Taxi & Tours began with a simple mission: to help
                  travelers discover the true beauty of Sri Lanka. What started as a small taxi
                  service in Colombo has grown into one of the island's most trusted tour operators.
                </p>
                <p>
                  We believe that travel is more than just visiting places—it's about experiencing
                  cultures, creating memories, and connecting with people. Our team of experienced
                  drivers and tour guides are passionate locals who know every hidden gem, scenic
                  route, and authentic experience Sri Lanka has to offer.
                </p>
                <p>
                  Today, we're proud to have served thousands of travelers from around the world,
                  each with their own unique journey and story. Whether you're seeking adventure,
                  relaxation, culture, or wildlife, we're here to make your Sri Lankan dream a
                  reality.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl text-[#FF5F1F] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#333333]">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-[#333333]">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#333333]">Our Fleet</h2>
            <p className="text-gray-600 text-lg">Modern, comfortable vehicles for every group size</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="w-5 h-5 text-[#FF5F1F]" />
                    <h3 className="text-xl text-[#333333]">{vehicle.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{vehicle.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-[#FFC300]" />
                    <span className="text-gray-700">{vehicle.capacity}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Standards */}
      <section className="py-16 bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Driver Excellence</h2>
            <p className="text-xl mb-8">
              Our drivers are the heart of Travel ra. Each one is carefully selected and trained
              to ensure your journey is safe, comfortable, and memorable.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="mb-2">Licensed & Insured</h3>
                <p className="text-sm">
                  All drivers hold valid licenses and comprehensive insurance coverage
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="mb-2">Local Experts</h3>
                <p className="text-sm">
                  Born and raised in Sri Lanka with deep knowledge of the island
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="mb-2">English Speaking</h3>
                <p className="text-sm">
                  Fluent in English and often multiple other languages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#333333]">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To provide exceptional travel experiences that showcase the natural beauty,
              rich culture, and warm hospitality of Sri Lanka, while ensuring the safety,
              comfort, and satisfaction of every traveler who chooses to explore with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
