# Luxury Hotels - Hotel Booking Website

A modern, responsive hotel booking website built with React.js, Vite, React Router, and TailwindCSS.

## 🚀 Features

### Pages
- **Home Page** - Hero section with multiple CTAs, special offers modal, and hotel branding
- **Hotels Page** - Grid layout of hotels with search and filter functionality
- **Hotel Detail Page** - Comprehensive hotel information with gallery, amenities, and booking CTAs
- **Booking Page** - Complete booking form with all input types and real-time summary
- **Login Page** - User authentication with social login options
- **Signup Page** - User registration with validation
- **Contact Page** - Contact form and multiple contact methods
- **Query Page** - General query submission and live chat support

### Components
- **Header** - Responsive navigation with phone number display
- **Footer** - Contact information and quick links
- **Modal** - Reusable modal component with smooth animations
- **HotelCard** - Hotel information display with CTAs

### Key Features
- **Multiple CTA Types** - Modals, page navigation, and direct actions
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Smooth Animations** - Framer Motion integration for enhanced UX
- **Form Validation** - Comprehensive client-side validation
- **Mock Data** - Realistic hotel data for demonstration
- **Phone Number Display** - Consistent phone number across all pages

## 🛠️ Technology Stack

- **Frontend Framework** - React.js 18
- **Build Tool** - Vite
- **Routing** - React Router v6
- **Styling** - TailwindCSS
- **Animations** - Framer Motion
- **Icons** - Heroicons (SVG)
- **Fonts** - Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hotelbookingreact
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Design System

### Colors
- **Primary** - Blue (#3B82F6)
- **Secondary** - Gray (#64748B)
- **Accent** - Yellow (#F59E0B)

### Typography
- **Font Family** - Inter
- **Headings** - Bold weights (600, 700)
- **Body** - Regular weight (400)

### Components
- **Buttons** - Primary, Secondary, Outline variants
- **Cards** - Consistent shadow and hover effects
- **Forms** - Unified input styling and validation
- **Modals** - Smooth animations and backdrop blur

## 🔧 Customization

### Adding New Hotels
Edit `src/data/hotels.js` to add new hotel entries with the required fields:
- `id`, `name`, `location`, `price`, `rating`
- `image`, `amenities`, `description`, `features`
- `rooms`, `images`

### Styling Changes
Modify `src/index.css` and `tailwind.config.js` for:
- Color schemes
- Component styles
- Animation configurations

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 📁 Project Structure

```
hotelbookingreact/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   └── HotelCard.jsx
│   ├── data/
│   │   └── hotels.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Hotels.jsx
│   │   ├── HotelDetail.jsx
│   │   ├── Booking.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Contact.jsx
│   │   └── Query.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🌟 Key Features Implementation

### CTA Types
- **Modal Triggers** - Special offers, hotel info, support chat
- **Page Navigation** - Hotel listings, booking forms, user accounts
- **Direct Actions** - Phone calls, email links, form submissions

### Form Input Types
The booking form includes all required input types:
- Text, Email, Password, Tel, Number
- Date, Time, File Upload, Textarea
- Select, Checkboxes, Radio Buttons

### Phone Number Display
Phone number (+1 (555) 123-4567) is prominently displayed in:
- Header navigation
- Hero section
- Footer
- Contact pages
- Support sections

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag `dist` folder to Netlify dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:
- **Phone**: +1 (555) 123-4567
- **Email**: info@luxuryhotels.com
- **Live Chat**: Available on the Query page

---

Built with ❤️ using React.js and TailwindCSS

