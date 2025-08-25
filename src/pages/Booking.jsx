import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getHotelById } from '../data/hotels'

const Booking = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    
    // Booking Details
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: '',
    
    // Additional Information
    specialRequests: '',
    arrivalTime: '',
    departureTime: '',
    numberOfRooms: 1,
    
    // Preferences
    smoking: 'no',
    floorPreference: '',
    accessibility: false,
    earlyCheckIn: false,
    lateCheckOut: false,
    
    // Payment
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    
    // Documents
    idDocument: null,
    passportNumber: '',
    
    // Terms
    agreeToTerms: false,
    marketingConsent: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState(null)

  const steps = [
    { id: 1, title: 'Personal Info', description: 'Basic details' },
    { id: 2, title: 'Booking Details', description: 'Dates & rooms' },
    { id: 3, title: 'Preferences', description: 'Special requests' },
    { id: 4, title: 'Payment', description: 'Payment method' },
    { id: 5, title: 'Review', description: 'Confirm booking' }
  ]

  useEffect(() => {
    const hotelId = searchParams.get('hotel')
    if (hotelId) {
      const hotel = getHotelById(hotelId)
      setSelectedHotel(hotel)
      if (hotel) {
        setFormData(prev => ({
          ...prev,
          roomType: hotel.rooms[0]?.type || ''
        }))
      }
    }
  }, [searchParams])

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }))
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateStep = (step) => {
    const newErrors = {}

    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required'
        if (!formData.lastName) newErrors.lastName = 'Last name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required'
        break

      case 2:
        if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required'
        if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required'
        if (formData.checkIn && formData.checkOut) {
          const checkIn = new Date(formData.checkIn)
          const checkOut = new Date(formData.checkOut)
          if (checkIn >= checkOut) {
            newErrors.checkOut = 'Check-out date must be after check-in date'
          }
        }
        if (!formData.roomType) newErrors.roomType = 'Room type is required'
        break

      case 3:
        // Preferences step is optional
        break

      case 4:
        if (!formData.cardholderName) newErrors.cardholderName = 'Cardholder name is required'
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required'
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required'
        if (!formData.cvv) newErrors.cvv = 'CVV is required'
        break

      case 5:
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const goToStep = (step) => {
    if (step < currentStep || validateStep(currentStep)) {
      setCurrentStep(step)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(currentStep)) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    
    // Show success message and redirect
    alert('Booking submitted successfully! You will receive a confirmation email shortly.')
    navigate('/hotels')
  }

  const calculateTotalNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const diffTime = Math.abs(checkOut - checkIn)
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const calculateTotalPrice = () => {
    if (selectedHotel && formData.roomType) {
      const room = selectedHotel.rooms.find(r => r.type === formData.roomType)
      if (room) {
        return room.price * calculateTotalNights() * formData.numberOfRooms
      }
    }
    return 0
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Number
                </label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date *
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className={`input-field ${errors.checkIn ? 'border-red-500' : ''}`}
                />
                {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
              </div>

              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out Date *
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className={`input-field ${errors.checkOut ? 'border-red-500' : ''}`}
                />
                {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
              </div>

              <div>
                <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  min="1"
                  max="10"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Children
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  max="10"
                  value={formData.children}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  id="numberOfRooms"
                  name="numberOfRooms"
                  min="1"
                  max="10"
                  value={formData.numberOfRooms}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                  Room Type *
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className={`input-field ${errors.roomType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Room Type</option>
                  {selectedHotel?.rooms.map((room, index) => (
                    <option key={index} value={room.type}>
                      {room.type} - ${room.price}/night
                    </option>
                  ))}
                </select>
                {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
              </div>

              <div>
                <label htmlFor="arrivalTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Arrival Time
                </label>
                <input
                  type="time"
                  id="arrivalTime"
                  name="arrivalTime"
                  value={formData.arrivalTime}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Departure Time
                </label>
                <input
                  type="time"
                  id="departureTime"
                  name="departureTime"
                  value={formData.departureTime}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preferences & Special Requests</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="smoking" className="block text-sm font-medium text-gray-700 mb-2">
                  Smoking Preference
                </label>
                <select
                  id="smoking"
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="no">Non-smoking</option>
                  <option value="yes">Smoking</option>
                  <option value="either">Either</option>
                </select>
              </div>

              <div>
                <label htmlFor="floorPreference" className="block text-sm font-medium text-gray-700 mb-2">
                  Floor Preference
                </label>
                <select
                  id="floorPreference"
                  name="floorPreference"
                  value={formData.floorPreference}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">No preference</option>
                  <option value="high">High floor</option>
                  <option value="low">Low floor</option>
                  <option value="middle">Middle floor</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="accessibility"
                  checked={formData.accessibility}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">Accessible room required</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="earlyCheckIn"
                  checked={formData.earlyCheckIn}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">Early check-in requested</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="lateCheckOut"
                  checked={formData.lateCheckOut}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">Late check-out requested</span>
              </label>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests or Comments
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows="4"
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Any special requests or additional information..."
              />
            </div>

            <div>
              <label htmlFor="idDocument" className="block text-sm font-medium text-gray-700 mb-2">
                ID Document (Optional)
              </label>
              <input
                type="file"
                id="idDocument"
                name="idDocument"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="input-field"
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: PDF, JPG, JPEG, PNG
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h3>
            
            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name *
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className={`input-field ${errors.cardholderName ? 'border-red-500' : ''}`}
                />
                {errors.cardholderName && <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>}
              </div>

              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number *
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={`input-field ${errors.cardNumber ? 'border-red-500' : ''}`}
                  placeholder="1234 5678 9012 3456"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>

              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className={`input-field ${errors.expiryDate ? 'border-red-500' : ''}`}
                  placeholder="MM/YY"
                />
                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
              </div>

              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={`input-field ${errors.cvv ? 'border-red-500' : ''}`}
                  placeholder="123"
                  maxLength="4"
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Review & Confirm</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h4>
              
              {selectedHotel && (
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="font-medium text-gray-900">{selectedHotel.name}</h5>
                    <p className="text-sm text-gray-600">{selectedHotel.location}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Check-in:</span>
                      <span className="ml-2 font-medium">{formData.checkIn || 'Not selected'}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Check-out:</span>
                      <span className="ml-2 font-medium">{formData.checkOut || 'Not selected'}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Room Type:</span>
                      <span className="ml-2 font-medium">{formData.roomType || 'Not selected'}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Guests:</span>
                      <span className="ml-2 font-medium">{formData.adults + formData.children}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Nights:</span>
                      <span className="ml-2 font-medium">{calculateTotalNights()}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Price:</span>
                      <span className="ml-2 font-bold text-primary-600">${calculateTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a> and{' '}
                  <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> *
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I consent to receive marketing communications about special offers and promotions
                </span>
              </label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Stay</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete the booking process step by step to secure your reservation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Stepper Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <button
                        onClick={() => goToStep(step.id)}
                        className={`flex items-center space-x-2 ${
                          step.id <= currentStep ? 'text-primary-600' : 'text-gray-400'
                        } ${step.id < currentStep ? 'cursor-pointer hover:text-primary-500' : ''}`}
                        disabled={step.id > currentStep}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step.id < currentStep 
                            ? 'bg-green-100 text-green-600' 
                            : step.id === currentStep 
                            ? 'bg-primary-100 text-primary-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {step.id < currentStep ? '✓' : step.id}
                        </div>
                        <div className="hidden sm:block text-left">
                          <div className="text-sm font-medium">{step.title}</div>
                          <div className="text-xs text-gray-500">{step.description}</div>
                        </div>
                      </button>
                      {index < steps.length - 1 && (
                        <div className={`w-8 h-1 mx-2 ${
                          step.id < currentStep ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="flex space-x-3">
                    {currentStep < steps.length ? (
                      <button
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>
              
              {selectedHotel ? (
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-900">{selectedHotel.name}</h3>
                    <p className="text-sm text-gray-600">{selectedHotel.location}</p>
                  </div>

                  {formData.roomType && (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room Type:</span>
                        <span className="font-medium">{formData.roomType}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in:</span>
                        <span className="font-medium">{formData.checkIn || 'Not selected'}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out:</span>
                        <span className="font-medium">{formData.checkOut || 'Not selected'}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nights:</span>
                        <span className="font-medium">{calculateTotalNights()}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rooms:</span>
                        <span className="font-medium">{formData.numberOfRooms}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Guests:</span>
                        <span className="font-medium">{formData.adults + formData.children}</span>
                      </div>
                    </div>
                  )}

                  {calculateTotalPrice() > 0 && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Price:</span>
                        <span className="text-primary-600">${calculateTotalPrice()}</span>
                      </div>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Includes all taxes and fees
                      </p>
                    </div>
                  )}

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Our booking team is here to assist you
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-primary-600 font-medium hover:text-primary-700 text-sm"
                    >
                      Call +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🏨</div>
                  <p className="text-gray-600">
                    Select a hotel to see booking details
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
