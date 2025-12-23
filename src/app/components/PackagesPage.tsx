import { Calendar, Users, MapPin, Camera, Waves, Mountain, TrainFront, TreePalm, Utensils, Tent, Compass, Sunset, Sunrise } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PackagesPage() {
  const allPackages = [
    {
      id: 1,
      title: 'Ultimate Adventure',
      shortDesc: 'Thrilling experiences across Sri Lanka',
      description: 'Experience the thrill of Sri Lanka with rafting, ancient ruins, scenic trains, and mountain trekking.',
      image: 'https://images.unsplash.com/photo-1641584495089-5914d85d9bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdhdGVyJTIwcmFmdGluZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjYzOTM3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 Days / 5 Nights',
      minPeople: '2',
      price: '$899',
      highlights: ['White Water Rafting', 'Sigiriya Rock', 'Scenic Train Ride', 'Ella Trekking', 'Nine Arch Bridge'],
    },
    {
      id: 2,
      title: 'Nature & Wildlife Safari',
      shortDesc: 'Explore diverse wildlife and natural beauty',
      description: 'Explore Sri Lanka\'s rich biodiversity with wildlife safaris, rainforest treks, and bird sanctuaries.',
      image: 'https://images.unsplash.com/photo-1703536760770-b5f5cdd838b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwd2F0Y2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzY2MzIxMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days / 3 Nights',
      minPeople: '2',
      price: '$599',
      highlights: ['Yala Safari', 'Leopard Spotting', 'Sinharaja Rainforest', 'Bird Watching', 'Bundala Wetlands'],
    },
    {
      id: 3,
      title: 'Cultural Heritage Tour',
      shortDesc: 'Ancient temples and royal palaces',
      description: 'Journey through UNESCO World Heritage Sites including ancient kingdoms, royal palaces, and sacred temples.',
      image: 'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYW5keSUyMHRlbXBsZSUyMFNyaSUyMExhbmthfGVufDF8fHx8MTc2NjQyMDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '5 Days / 4 Nights',
      minPeople: '2',
      price: '$749',
      highlights: ['Temple of Tooth', 'Polonnaruwa Ruins', 'Anuradhapura', 'Dambulla Cave Temple', 'Cultural Dance Show'],
    },
    {
      id: 4,
      title: 'Beach & Whale Paradise',
      shortDesc: 'Coastal relaxation with whale watching',
      description: 'Relax on pristine beaches, spot blue whales, explore colonial forts, and enjoy water sports.',
      image: 'https://images.unsplash.com/photo-1734279135339-bc3cdb6bb841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXJpc3NhJTIwYmVhY2glMjB3aGFsZXN8ZW58MXx8fHwxNzY2NDU3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days / 3 Nights',
      minPeople: '2',
      price: '$649',
      highlights: ['Whale Watching', 'Mirissa Beach', 'Galle Fort', 'Unawatuna', 'Snorkeling'],
    },
    {
      id: 5,
      title: 'Hill Country Escape',
      shortDesc: 'Tea plantations and mountain landscapes',
      description: 'Experience the cool climate of Sri Lanka\'s highlands with tea estates, waterfalls, and scenic viewpoints.',
      image: 'https://images.unsplash.com/photo-1586511426540-d28fdb7ff3f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOdXdhcmElMjBFbGl5YSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzY2NDU3ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 Days / 2 Nights',
      minPeople: '2',
      price: '$499',
      highlights: ['Nuwara Eliya Town', 'Tea Factory Tour', 'Horton Plains', 'World\'s End', 'Gregory Lake'],
    },
    {
      id: 6,
      title: 'Colonial Heritage',
      shortDesc: 'Dutch and British architecture',
      description: 'Explore the colonial legacy with historic forts, museums, and beautiful architecture from different eras.',
      image: 'https://images.unsplash.com/photo-1713038948592-5d070e8e8459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYWxsZSUyMGZvcnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NjY0NTc4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 Days / 2 Nights',
      minPeople: '2',
      price: '$449',
      highlights: ['Galle Fort', 'Dutch Museum', 'Colombo City', 'Colonial Buildings', 'Maritime Museum'],
    },
    {
      id: 7,
      title: 'Surf & Adventure',
      shortDesc: 'Surfing hotspots and adventure sports',
      description: 'Perfect for adventure seekers with world-class surfing, snorkeling, and coastal explorations.',
      image: 'https://images.unsplash.com/photo-1503384861219-7f20f2f111cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcnVnYW0lMjBCYXklMjBzdXJmaW5nfGVufDF8fHx8MTc2NjQ1NzgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '5 Days / 4 Nights',
      minPeople: '2',
      price: '$699',
      highlights: ['Arugam Bay Surf', 'Surf Lessons', 'Pottuvil Point', 'Lagoon Safari', 'Beach BBQ'],
    },
    {
      id: 8,
      title: 'Elephant & Wildlife',
      shortDesc: 'Close encounters with elephants',
      description: 'Get up close with elephants in their natural habitat and explore diverse wildlife parks.',
      image: 'https://images.unsplash.com/photo-1742874514687-9a5830598ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaW5uYXdhbGElMjBlbGVwaGFudCUyMG9ycGhhbmFnZXxlbnwxfHx8fDE3NjY0NTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days / 3 Nights',
      minPeople: '2',
      price: '$629',
      highlights: ['Pinnawala Orphanage', 'Udawalawe Safari', 'Elephant Transit', 'Minneriya Gathering', 'Wildlife Photography'],
    },
    {
      id: 9,
      title: 'Ancient Kingdoms',
      shortDesc: 'Explore 2500 years of history',
      description: 'Visit ancient capitals and archaeological sites showcasing Sri Lanka\'s glorious past.',
      image: 'https://images.unsplash.com/photo-1709729519591-2fb2d25395df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2xvbm5hcnV3YSUyMGFuY2llbnQlMjBydWluc3xlbnwxfHx8fDE3NjY0NTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days / 3 Nights',
      minPeople: '2',
      price: '$679',
      highlights: ['Polonnaruwa', 'Anuradhapura', 'Sacred Bo Tree', 'Ancient Reservoirs', 'Archaeological Museum'],
    },
    {
      id: 10,
      title: 'East Coast Explorer',
      shortDesc: 'Pristine beaches and temples',
      description: 'Discover the less-traveled east coast with beautiful beaches, ancient temples, and local culture.',
      image: 'https://images.unsplash.com/photo-1673506526008-b861f61ff825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcmluY29tYWxlZSUyMGJlYWNoJTIwdGVtcGxlfGVufDF8fHx8MTc2NjQ1ODA0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Days / 3 Nights',
      minPeople: '2',
      price: '$599',
      highlights: ['Trincomalee', 'Nilaveli Beach', 'Koneswaram Temple', 'Hot Springs', 'Pigeon Island'],
    },
    {
      id: 11,
      title: 'Northern Heritage',
      shortDesc: 'Cultural diversity of Jaffna',
      description: 'Experience the unique Tamil culture, cuisine, and historical sites of northern Sri Lanka.',
      image: 'https://images.unsplash.com/photo-1731126658227-2e22ab678c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWZmbmElMjBjdWx0dXJhbCUyMGhlcml0YWdlfGVufDF8fHx8MTc2NjQ1ODA0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 Days / 2 Nights',
      minPeople: '2',
      price: '$549',
      highlights: ['Jaffna Fort', 'Nallur Temple', 'Delft Island', 'Jaffna Library', 'Local Cuisine'],
    },
    {
      id: 12,
      title: 'Grand Sri Lanka Tour',
      shortDesc: 'Complete island experience',
      description: 'The ultimate comprehensive tour covering all major attractions, perfect for first-time visitors.',
      image: 'https://images.unsplash.com/photo-1705365291453-7962869cae67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc2NjM5MzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 Days / 9 Nights',
      minPeople: '2',
      price: '$1,299',
      highlights: ['Complete Island Tour', 'All UNESCO Sites', 'Wildlife Safari', 'Beach Time', 'Cultural Shows', 'Tea Plantations'],
    },
  ];

  const package01Timeline = [
    {
      day: 'Day 01',
      title: 'Arrival & Colombo City Tour',
      activities: ['Airport Pickup', 'Colombo Sightseeing', 'Hotel Check-in'],
      icon: MapPin,
    },
    {
      day: 'Day 02',
      title: 'White Water Rafting Adventure',
      activities: ['Travel to Kitulgala', 'Rafting Experience', 'Rainforest Exploration'],
      icon: Waves,
    },
    {
      day: 'Day 03',
      title: 'Sigiriya Rock Fortress',
      activities: ['Early Morning Climb', 'Ancient Frescoes', 'Village Safari'],
      icon: Mountain,
    },
    {
      day: 'Day 04',
      title: 'Scenic Train to Ella',
      activities: ['Board Train at Kandy', 'Scenic Journey', 'Arrive Ella'],
      icon: TrainFront,
    },
    {
      day: 'Day 05',
      title: 'Ella Trekking',
      activities: ['Little Adam\'s Peak', 'Nine Arch Bridge', 'Tea Plantation Visit'],
      icon: Mountain,
    },
    {
      day: 'Day 06',
      title: 'Beach Relaxation & Departure',
      activities: ['Mirissa Beach', 'Whale Watching (Optional)', 'Airport Transfer'],
      icon: TreePalm,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Tour Packages</h1>
          <p className="text-2xl mb-4">Carefully crafted journeys for unforgettable experiences</p>
          <p className="text-lg">Covering all major Sri Lankan tourism attractions</p>
        </div>
      </section>

      {/* All Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]">All Tour Packages</h2>
            <p className="text-xl text-gray-600">Choose from our diverse selection of tours</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allPackages.map((pkg) => (
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
                  <p className="text-gray-600 mb-4">{pkg.shortDesc}</p>
                  
                  <div className="space-y-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#FF5F1F] rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl text-[#FF5F1F] font-semibold">{pkg.price}</p>
                    </div>
                    <Button className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Package Detail - Ultimate Adventure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]">Featured Package</h2>
            <p className="text-xl text-gray-600">Our most popular adventure tour</p>
          </div>
          
          <Card className="max-w-6xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641584495089-5914d85d9bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdhdGVyJTIwcmFmdGluZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjYzOTM3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ultimate Adventure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-white">
                <div className="flex items-center gap-2 text-[#FFC300] mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>Package 01</span>
                </div>
                <h2 className="text-4xl mb-4 text-[#333333]">Ultimate Adventure</h2>
                <p className="text-gray-600 mb-6">
                  Experience the thrill of Sri Lanka with rafting, ancient ruins, scenic trains, and mountain trekking.
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FF5F1F]" />
                    <span>6 Days / 5 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF5F1F]" />
                    <span>Min 2 People</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-4xl text-[#FF5F1F]">$899</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                  <Button className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white px-8 py-6 text-lg">
                    Book this Package
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-3xl text-center mb-8 text-[#333333]">Detailed Itinerary</h3>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FFC300] hidden md:block" />

              <div className="space-y-8">
                {package01Timeline.map((day, index) => (
                  <div key={index} className="relative flex gap-6 items-start">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-[#FF5F1F] rounded-full flex items-center justify-center shadow-lg">
                        <day.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#FFC300] text-[#333333] px-3 py-1 rounded-full text-sm font-semibold">
                          {day.day}
                        </span>
                        <h4 className="text-xl text-[#333333]">{day.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#FF5F1F] rounded-full" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl text-center mb-12 text-[#333333]">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl mb-4 text-[#333333] flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#FF5F1F]" />
                  Included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Accommodation (Hotels/Guesthouses)',
                    'All Transportation',
                    'English Speaking Driver/Guide',
                    'Entrance Fees to Attractions',
                    'Breakfast Daily',
                    'Airport Pickup & Drop-off',
                    'Fuel & Parking Charges',
                    'Government Taxes',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-2xl mb-4 text-[#333333] flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-[#FF5F1F]" />
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Lunch & Dinner',
                    'Personal Expenses',
                    'Tips for Driver/Guide',
                    'Travel Insurance',
                    'Visa Fees',
                    'Optional Activities',
                    'Alcoholic Beverages',
                    'International Flights',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#FF5F1F] via-[#FFC300] to-[#FF5F1F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Can't Find the Perfect Package?</h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">Let us create a custom itinerary just for you</p>
          <Button className="bg-white text-[#FF5F1F] hover:bg-white/90 px-12 py-6 text-xl">
            Plan Your Custom Trip
          </Button>
        </div>
      </section>
    </div>
  );
}
