import { useState } from 'react';
import { Calendar, Users, CircleCheck, ChevronRight, ChevronLeft, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';

export function TripPlannerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    travelers: '2',
    hiking: false,
    wildlife: false,
    beach: false,
    history: false,
    adventure: false,
    relaxation: false,
    cities: '',
    budget: 'medium',
    accommodation: 'hotel',
    additionalInfo: '',
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Trip Plan:', formData);
    // Handle form submission
  };

  const interests = [
    { id: 'hiking', label: 'Hiking & Trekking', icon: '🥾' },
    { id: 'wildlife', label: 'Wildlife Safari', icon: '🦁' },
    { id: 'beach', label: 'Beach & Water Sports', icon: '🏖️' },
    { id: 'history', label: 'History & Culture', icon: '🏛️' },
    { id: 'adventure', label: 'Adventure Activities', icon: '🪂' },
    { id: 'relaxation', label: 'Relaxation & Wellness', icon: '🧘' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF5F1F] to-[#FFC300] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Compass className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl mb-4">Plan Your Trip</h1>
          <p className="text-xl">Your journey, your way. We handle everything for you.</p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      step <= currentStep
                        ? 'bg-[#FF5F1F] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step < currentStep ? (
                      <CircleCheck className="w-6 h-6" />
                    ) : (
                      <span>{step}</span>
                    )}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        step < currentStep ? 'bg-[#FF5F1F]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Travel Info</span>
              <span>Interests</span>
              <span>Route & Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8">
            {/* Step 1: Travel Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl mb-2 text-[#333333]">Travel Information</h2>
                  <p className="text-gray-600">Tell us about your travel dates and group size</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-[#333333]">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                      <Input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({ ...formData, startDate: e.target.value })
                        }
                        className="pl-10 bg-input-background border-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-[#333333]">End Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                      <Input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) =>
                          setFormData({ ...formData, endDate: e.target.value })
                        }
                        className="pl-10 bg-input-background border-0"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">Number of Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5F1F]" />
                    <select
                      value={formData.travelers}
                      onChange={(e) =>
                        setFormData({ ...formData, travelers: e.target.value })
                      }
                      className="w-full h-10 pl-10 pr-3 rounded-md bg-input-background border-0"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Traveler' : 'Travelers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">Budget Range</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['budget', 'medium', 'luxury'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setFormData({ ...formData, budget: level })}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          formData.budget === level
                            ? 'border-[#FF5F1F] bg-[#FF5F1F]/10'
                            : 'border-gray-200 hover:border-[#FF5F1F]/50'
                        }`}
                      >
                        <p className="capitalize">{level}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Interests */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl mb-2 text-[#333333]">Your Interests</h2>
                  <p className="text-gray-600">Select activities you'd like to include in your trip</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <button
                      key={interest.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          [interest.id]: !formData[interest.id as keyof typeof formData],
                        })
                      }
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData[interest.id as keyof typeof formData]
                          ? 'border-[#FF5F1F] bg-[#FF5F1F]/10'
                          : 'border-gray-200 hover:border-[#FF5F1F]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{interest.icon}</span>
                        <div>
                          <p className="text-[#333333]">{interest.label}</p>
                        </div>
                        {formData[interest.id as keyof typeof formData] && (
                          <CircleCheck className="ml-auto w-5 h-5 text-[#FF5F1F]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">Accommodation Preference</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['hotel', 'resort', 'guesthouse'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({ ...formData, accommodation: type })}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          formData.accommodation === type
                            ? 'border-[#FF5F1F] bg-[#FF5F1F]/10'
                            : 'border-gray-200 hover:border-[#FF5F1F]/50'
                        }`}
                      >
                        <p className="capitalize">{type}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Route Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl mb-2 text-[#333333]">Route & Additional Details</h2>
                  <p className="text-gray-600">Tell us which cities or places you'd like to visit</p>
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">
                    Cities/Places to Visit
                  </label>
                  <Textarea
                    placeholder="e.g., Colombo, Sigiriya, Ella, Mirissa, Yala..."
                    value={formData.cities}
                    onChange={(e) => setFormData({ ...formData, cities: e.target.value })}
                    className="bg-input-background border-0 min-h-[100px]"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    List the places you want to visit, separated by commas
                  </p>
                </div>

                <div>
                  <label className="block mb-2 text-[#333333]">
                    Additional Information (Optional)
                  </label>
                  <Textarea
                    placeholder="Any special requests, dietary requirements, or specific activities you'd like to include..."
                    value={formData.additionalInfo}
                    onChange={(e) =>
                      setFormData({ ...formData, additionalInfo: e.target.value })
                    }
                    className="bg-input-background border-0 min-h-[120px]"
                  />
                </div>

                <div className="bg-[#FFC300]/10 border-l-4 border-[#FFC300] p-4 rounded">
                  <p className="text-sm text-[#333333]">
                    <strong>What happens next?</strong> Our travel experts will review your preferences
                    and create a personalized itinerary within 24 hours. We'll contact you to discuss
                    and refine the plan before booking.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                onClick={handlePrev}
                disabled={currentStep === 1}
                variant="outline"
                className="border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F]/10 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white px-8"
                >
                  Submit Trip Plan
                </Button>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Why Plan with Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12 text-[#333333]">Why Plan Your Trip with Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="mb-2 text-[#333333]">Fully Customized</h3>
              <p className="text-gray-600">Every detail tailored to your preferences and interests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="mb-2 text-[#333333]">Best Value</h3>
              <p className="text-gray-600">Competitive pricing with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF5F1F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="mb-2 text-[#333333]">Expert Support</h3>
              <p className="text-gray-600">24/7 assistance throughout your journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}