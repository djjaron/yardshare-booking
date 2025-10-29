# 🌿 YardShare

Book unique outdoor spaces for parties, photoshoots, gatherings, and more!

YardShare is a modern web application that connects people with beautiful outdoor spaces available for booking. Whether you're looking for a backyard for a party, a rooftop for a sunset gathering, or a garden for a photoshoot, YardShare makes it easy to find the perfect space.

## ✨ Features

- **🔍 Search & Discovery** - Search and filter outdoor spaces by name, location, price, and tags
- ⭐ **Ratings & Reviews** - Browse spaces by ratings and see what others think
- 💚 **Save Favorites** - Bookmark your favorite yards for later
- 💰 **Flexible Pricing** - Filter spaces by your budget
- 🏷️ **Smart Tags** - Filter by space type (Garden, Party, Photoshoot, Wedding, etc.)
- 📍 **Distance-Based Sorting** - Find spaces nearest to you
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/yardshare.git
cd yardshare

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
yardshare/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component styles
│   ├── index.css        # Global Tailwind imports
│   ├── main.jsx         # React entry point
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🎯 Core Features Explained

### Search & Filtering
- **Text Search**: Search by space name or location
- **Price Range**: Filter spaces within your budget
- **Tag Filtering**: Find spaces by type and purpose (Garden, Party, Wedding, etc.)
- **Smart Sorting**: Sort by rating, price, or distance

### Space Cards
Each space displays:
- High-quality image with hover zoom effect
- Space name and location
- Star rating and review count
- Hourly price
- Distance from user
- Space tags/categories
- Quick "Book Now" button
- Heart button to save favorites

### Space Details
Click on any space to see:
- Full details about the space
- Complete rating and review information
- Exact pricing
- All tags and categories
- Beautiful modal dialog with full information

## 🎨 Design Highlights

- **Gradient Background**: Soothing green-blue gradient
- **Smooth Animations**: Hover effects and transitions throughout
- **Responsive Grid**: Automatically adjusts from 1 to 3 columns based on screen size
- **Modern Cards**: Clean card design with shadows and scale effects
- **Accessible Colors**: Tailwind's green color palette for outdoor/nature vibes

## 📝 Sample Data

The app comes with 6 sample spaces including:
- Sunlit Backyard Paradise (Brooklyn)
- Modern Rooftop Lounge (Manhattan)
- Cozy Garden Space (Queens)
- Luxury Patio Estate (Upper East Side)
- Minimalist Urban Garden (Williamsburg)
- Rustic Barn Venue (Long Island)

Each space has realistic ratings, reviews, and pricing.

## 🔄 Future Enhancements

- User authentication & profiles
- Booking system with calendar
- Payment integration
- User reviews & ratings
- Messaging between users
- Search by availability/date
- Advanced filtering options
- Map view
- Wishlist/saved searches
- Mobile app

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.x.x"
}
```

Dev dependencies:
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## 🚀 Deployment

### Deploy to Netlify

```bash
# Option 1: Using Netlify CLI
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod

# Option 2: Using GitHub (auto-deployment)
# Push to GitHub and connect repository to Netlify
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📧 Questions?

For questions or support, please open an issue on GitHub.

---

Made with 💚 by YardShare team
