import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'

const Home = () => {
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false)

  const offers = [
    {
      title: "Early Bird Special",
      description: "Book 30 days in advance and save up to 25% on your stay",
      validUntil: "December 31, 2024"
    },
    {
      title: "Weekend Getaway",
      description: "Special rates for weekend stays with complimentary breakfast",
      validUntil: "Ongoing"
    },
    {
      title: "Loyalty Program",
      description: "Join our rewards program and earn points on every booking",
      validUntil: "Always Available"
    },
    {
      title: "Group Discounts",
      description: "Book 5+ rooms and receive up to 20% group discount",
      validUntil: "Year-round"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "The service at Luxury Hotels is absolutely exceptional. Every detail was perfect from check-in to check-out.",
      rating: 5,
      hotel: "Grand Plaza Hotel & Spa"
    },
    {
      name: "Michael Chen",
      role: "Family Vacationer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "We had an amazing family vacation. The kids loved the pool and the staff went above and beyond.",
      rating: 5,
      hotel: "Oceanview Resort & Marina"
    },
    {
      name: "Emily Rodriguez",
      role: "Honeymooner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Our honeymoon was perfect thanks to Luxury Hotels. The romantic suite and amenities exceeded our expectations.",
      rating: 5,
      hotel: "Mountain Lodge & Golf Club"
    }
  ]

  const statistics = [
    { number: "50+", label: "Luxury Hotels", icon: "🏨" },
    { number: "100K+", label: "Happy Guests", icon: "😊" },
    { number: "25+", label: "Countries", icon: "🌍" },
    { number: "99%", label: "Satisfaction", icon: "⭐" }
  ]

  const featuredDestinations = [
    {
      name: "New York City",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The city that never sleeps",
      hotels: 12,
      startingPrice: 299
    },
    {
      name: "Miami Beach",
      image: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sun, sand, and luxury",
      hotels: 8,
      startingPrice: 249
    },
    {
      name: "Aspen, Colorado",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Mountain paradise",
      hotels: 6,
      startingPrice: 399
    },
    {
      name: "New Orleans",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Jazz and culture",
      hotels: 5,
      startingPrice: 199
    }
  ]

  const amenities = [
    {
      icon: "🏊‍♂️",
      title: "Infinity Pools",
      description: "Stunning pools with panoramic views"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Award-winning restaurants and bars"
    },
    {
      icon: "💆‍♀️",
      title: "Luxury Spa",
      description: "Rejuvenating treatments and wellness"
    },
    {
      icon: "🏋️‍♂️",
      title: "Fitness Centers",
      description: "State-of-the-art equipment and classes"
    },
    {
      icon: "🚗",
      title: "Valet Service",
      description: "Convenient parking and transportation"
    },
    {
      icon: "👶",
      title: "Kids Club",
      description: "Entertainment and activities for children"
    }
  ]

  const latestNews = [
    {
      title: "New Hotel Opening in Tokyo",
      excerpt: "Experience Japanese luxury and hospitality in our newest property opening this spring.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "News"
    },
    {
      title: "Sustainable Luxury Initiative",
      excerpt: "We're committed to reducing our environmental impact while maintaining luxury standards.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Sustainability"
    },
    {
      title: "Michelin-Starred Chef Partnership",
      excerpt: "Exclusive dining experiences with world-renowned chefs at select properties.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Dining"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Experience Luxury
            <span className="block text-primary-400">Like Never Before</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Discover world-class accommodations and exceptional service at our premium hotels worldwide
          </motion.p>

          {/* Phone Number Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-xl font-semibold">+1 (555) 123-4567</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsOffersModalOpen(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              View Special Offers
            </button>
            <Link to="/hotels" className="btn-outline text-lg px-8 py-4 bg-white text-primary-600 border-white hover:bg-gray-100">
              Browse Hotels
            </Link>
            <Link to="/booking" className="btn-secondary text-lg px-8 py-4">
              Book Now
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Luxury Hotels?</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We've been delivering exceptional experiences for over three decades
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unparalleled Luxury</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail is crafted to exceed your expectations and create unforgettable memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏨",
                title: "Premium Locations",
                description: "Our hotels are strategically located in the most desirable destinations worldwide"
              },
              {
                icon: "⭐",
                title: "5-Star Service",
                description: "Experience world-class hospitality with our dedicated staff and personalized service"
              },
              {
                icon: "💰",
                title: "Best Rates",
                description: "Guaranteed best prices with exclusive deals and special offers for our guests"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after locations and start planning your next adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{destination.hotels} luxury hotels</p>
                  <p className="text-lg font-semibold text-primary-600">From ${destination.startingPrice}/night</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/hotels" className="btn-primary text-lg px-8 py-4">
              Explore All Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">World-Class Amenities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every property features exceptional facilities designed for your comfort and enjoyment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{amenity.title}</h3>
                <p className="text-gray-300">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                <p className="text-sm text-primary-600 font-medium">{testimonial.hotel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest developments, new properties, and exclusive offers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-600 font-medium">{news.category}</span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Book Your Dream Stay?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't wait! Secure your preferred dates and room type before they're gone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/hotels" className="btn-secondary text-lg px-8 py-4">
                Explore Hotels
              </Link>
              <Link to="/booking" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-all duration-200 text-lg">
                Start Booking
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Need Personalized Assistance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our travel experts are here to help you plan the perfect luxury getaway
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+15551234567"
                className="btn-primary text-lg px-8 py-4"
              >
                Call Us: +1 (555) 123-4567
              </a>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                Send Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offers Modal */}
      <Modal
        isOpen={isOffersModalOpen}
        onClose={() => setIsOffersModalOpen(false)}
        title="Special Offers & Deals"
        size="lg"
      >
        <div className="space-y-6">
          <p className="text-gray-600 text-center mb-6">
            Take advantage of our exclusive offers and save on your next luxury hotel experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-3">{offer.description}</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Valid until:</span> {offer.validUntil}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-4">
            <Link
              to="/booking"
              onClick={() => setIsOffersModalOpen(false)}
              className="btn-primary"
            >
              Book with Special Offer
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Home
