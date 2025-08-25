export const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel & Spa",
    location: "Downtown Manhattan, New York",
    price: 299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    amenities: ["Free WiFi", "Spa", "Pool", "Restaurant", "Gym", "Concierge"],
    description: "Luxury 5-star hotel in the heart of Manhattan featuring world-class amenities, stunning city views, and exceptional service.",
    features: [
      "24/7 Room Service",
      "Valet Parking",
      "Business Center",
      "Meeting Rooms",
      "Rooftop Bar",
      "Fitness Center"
    ],
    rooms: [
      { type: "Standard Room", price: 299, capacity: 2 },
      { type: "Deluxe Room", price: 399, capacity: 2 },
      { type: "Executive Suite", price: 599, capacity: 3 },
      { type: "Presidential Suite", price: 1299, capacity: 4 }
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 2,
    name: "Oceanview Resort & Marina",
    location: "Miami Beach, Florida",
    price: 249,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    amenities: ["Beach Access", "Marina", "Pool", "Restaurant", "Water Sports", "Spa"],
    description: "Beachfront resort offering stunning ocean views, private beach access, and a full-service marina for yacht enthusiasts.",
    features: [
      "Private Beach Access",
      "Marina Services",
      "Water Sports Equipment",
      "Poolside Bar",
      "Kids Club",
      "Beach Cabanas"
    ],
    rooms: [
      { type: "Ocean View Room", price: 249, capacity: 2 },
      { type: "Beachfront Suite", price: 449, capacity: 3 },
      { type: "Marina Villa", price: 699, capacity: 4 },
      { type: "Penthouse Suite", price: 999, capacity: 6 }
    ],
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 3,
    name: "Mountain Lodge & Golf Club",
    location: "Aspen, Colorado",
    price: 399,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    amenities: ["Golf Course", "Skiing", "Spa", "Restaurant", "Fitness Center", "Hiking Trails"],
    description: "Luxury mountain resort featuring a championship golf course, world-class skiing, and breathtaking mountain views.",
    features: [
      "18-Hole Golf Course",
      "Ski-in/Ski-out Access",
      "Mountain Biking",
      "Hiking Guides",
      "Après-Ski Lounge",
      "Equipment Rental"
    ],
    rooms: [
      { type: "Mountain View Room", price: 399, capacity: 2 },
      { type: "Golf Course Suite", price: 549, capacity: 3 },
      { type: "Ski Chalet", price: 799, capacity: 4 },
      { type: "Mountain Villa", price: 1199, capacity: 6 }
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
    ]
  },
  {
    id: 4,
    name: "Historic Grand Hotel",
    location: "French Quarter, New Orleans",
    price: 199,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    amenities: ["Historic Building", "Jazz Club", "Restaurant", "Bar", "Concierge", "Valet Parking"],
    description: "Beautifully restored historic hotel in the heart of the French Quarter, featuring authentic New Orleans charm and jazz music.",
    features: [
      "Live Jazz Music",
      "Historic Tours",
      "French Quarter Access",
      "Courtyard Garden",
      "Antique Furnishings",
      "Ghost Tours"
    ],
    rooms: [
      { type: "Historic Room", price: 199, capacity: 2 },
      { type: "Jazz Suite", price: 299, capacity: 2 },
      { type: "Garden Suite", price: 399, capacity: 3 },
      { type: "Presidential Suite", price: 699, capacity: 4 }
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 5,
    name: "Desert Oasis Resort",
    location: "Palm Springs, California",
    price: 179,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
    amenities: ["Pool", "Spa", "Golf", "Restaurant", "Tennis", "Hiking"],
    description: "Peaceful desert resort surrounded by palm trees and mountains, offering relaxation and outdoor activities in a serene setting.",
    features: [
      "Multiple Pools",
      "Desert Hiking",
      "Tennis Courts",
      "Golf Course",
      "Spa Services",
      "Mountain Views"
    ],
    rooms: [
      { type: "Desert View Room", price: 179, capacity: 2 },
      { type: "Poolside Suite", price: 279, capacity: 3 },
      { type: "Mountain Villa", price: 479, capacity: 4 },
      { type: "Luxury Suite", price: 799, capacity: 6 }
    ],
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 6,
    name: "Urban Boutique Hotel",
    location: "West Hollywood, Los Angeles",
    price: 229,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    amenities: ["Rooftop Bar", "Restaurant", "Gym", "Concierge", "Valet Parking", "Free WiFi"],
    description: "Modern boutique hotel in the trendy West Hollywood area, featuring a rooftop bar with city views and contemporary design.",
    features: [
      "Rooftop Bar & Lounge",
      "City Views",
      "Art Gallery",
      "Fitness Center",
      "Concierge Service",
      "Pet Friendly"
    ],
    rooms: [
      { type: "Boutique Room", price: 229, capacity: 2 },
      { type: "City View Suite", price: 329, capacity: 2 },
      { type: "Rooftop Suite", price: 529, capacity: 3 },
      { type: "Penthouse", price: 899, capacity: 4 }
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
    ]
  }
]

export const getHotelById = (id) => {
  return hotels.find(hotel => hotel.id === parseInt(id))
}
