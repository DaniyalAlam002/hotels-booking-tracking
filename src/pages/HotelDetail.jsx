import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { getHotelById } from '../data/hotels'

const HotelDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  
  const hotel = getHotelById(id)

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Hotel not found</h1>
          <Link to="/hotels" className="btn-primary">
            Back to Hotels
          </Link>
        </div>
      </div>
    )
  }

  const handleBooking = () => {
    navigate(`/booking?hotel=${hotel.id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={hotel.images[selectedImage]}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link
            to="/hotels"
            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Hotels</span>
          </Link>
        </div>

        {/* Hotel Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
          <div className="container-custom">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              {hotel.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4 text-white"
            >
              <div className="flex items-center space-x-1">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">{hotel.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{hotel.location}</span>
              </div>
              <div className="text-2xl font-bold text-primary-300">
                ${hotel.price}/night
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Hotel</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{hotel.description}</p>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {hotel.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                        selectedImage === index ? 'ring-4 ring-primary-500' : 'hover:scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${hotel.name} - Image ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Amenities & Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg sticky top-24"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Stay</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Starting from</span>
                    <span className="text-3xl font-bold text-primary-600">${hotel.price}</span>
                  </div>
                  <div className="text-sm text-gray-500">per night</div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleBooking}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Book This Hotel
                  </button>
                  <button
                    onClick={() => setIsInfoModalOpen(true)}
                    className="w-full btn-outline text-lg py-4"
                  >
                    Get More Info
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Need assistance?</p>
                    <a
                      href="tel:+15551234567"
                      className="text-primary-600 font-medium hover:text-primary-700"
                    >
                      Call +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Room Types */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Room Types</h3>
                <div className="space-y-3">
                  {hotel.rooms.map((room, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-gray-900">{room.type}</div>
                        <div className="text-sm text-gray-500">Up to {room.capacity} guests</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary-600">${room.price}</div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Modal */}
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title={`More Information - ${hotel.name}`}
        size="lg"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Location Details</h3>
            <p className="text-gray-600">{hotel.location}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">All Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Room Options</h3>
            <div className="space-y-3">
              {hotel.rooms.map((room, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">{room.type}</h4>
                    <span className="font-bold text-primary-600">${room.price}/night</span>
                  </div>
                  <p className="text-sm text-gray-600">Maximum capacity: {room.capacity} guests</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setIsInfoModalOpen(false)
                handleBooking()
              }}
              className="btn-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default HotelDetail
