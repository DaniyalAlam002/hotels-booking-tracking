import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({ hotel }) => {
  const { id, name, location, price, rating, image, amenities } = hotel

  return (
    <div className="card overflow-hidden">
      {/* Hotel Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${price}/night
          </span>
        </div>
      </div>

      {/* Hotel Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{name}</h3>
          <div className="flex items-center space-x-1 ml-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {amenity}
            </span>
          ))}
          {amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
              +{amenities.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/hotels/${id}`}
            className="flex-1 btn-outline text-center"
          >
            View Details
          </Link>
          <Link
            to={`/booking?hotel=${id}`}
            className="flex-1 btn-primary text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
