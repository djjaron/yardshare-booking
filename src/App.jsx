import { useState } from 'react'
import { MapPin, Star, Heart, Search, Filter, ChevronDown, X } from 'lucide-react'
import './App.css'

const sampleSpaces = [
  {
    id: 1,
    name: 'Sunlit Backyard Paradise',
    location: 'Brooklyn, NY',
    price: 75,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1552680634-71fdc6ff93fe?w=400&h=300&fit=crop',
    distance: 2.3,
    tags: ['Garden', 'Party', 'Photoshoot'],
  },
  {
    id: 2,
    name: 'Modern Rooftop Lounge',
    location: 'Manhattan, NY',
    price: 120,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    distance: 5.1,
    tags: ['Rooftop', 'Events', 'Sunset'],
  },
  {
    id: 3,
    name: 'Cozy Garden Space',
    location: 'Queens, NY',
    price: 50,
    rating: 4.6,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    distance: 3.8,
    tags: ['Garden', 'Intimate', 'Calm'],
  },
  {
    id: 4,
    name: 'Luxury Patio Estate',
    location: 'Upper East Side, NY',
    price: 200,
    rating: 5.0,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1600572196128-e6dd2bd45f74?w=400&h=300&fit=crop',
    distance: 6.2,
    tags: ['Luxury', 'Wedding', 'Premium'],
  },
  {
    id: 5,
    name: 'Minimalist Urban Garden',
    location: 'Williamsburg, NY',
    price: 85,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e9e8c0?w=400&h=300&fit=crop',
    distance: 4.5,
    tags: ['Modern', 'Events', 'Creative'],
  },
  {
    id: 6,
    name: 'Rustic Barn Venue',
    location: 'Long Island, NY',
    price: 150,
    rating: 4.9,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1591900261980-91078f1a0f29?w=400&h=300&fit=crop',
    distance: 12.3,
    tags: ['Rustic', 'Wedding', 'Gathering'],
  },
]

function App() {
  const [favorites, setFavorites] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedSpace, setSelectedSpace] = useState(null)

  const allTags = ['Garden', 'Party', 'Photoshoot', 'Rooftop', 'Events', 'Sunset', 'Intimate', 'Calm', 'Luxury', 'Wedding', 'Premium', 'Modern', 'Creative', 'Rustic', 'Gathering']

  const filteredSpaces = sampleSpaces
    .filter(space => {
      const matchesSearch = space.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          space.location.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = space.price >= priceRange[0] && space.price <= priceRange[1]
      const matchesTags = selectedTags.length === 0 ||
                         selectedTags.some(tag => space.tags.includes(tag))
      return matchesSearch && matchesPrice && matchesTags
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'distance') return a.distance - b.distance
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const toggleFavorite = (id) => {
    setFavorites(favorites.includes(id) ? favorites.filter(fav => fav !== id) : [...favorites, id])
  }

  const toggleTag = (tag) => {
    setSelectedTags(selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🌿</div>
              <h1 className="text-2xl font-bold text-gray-900">YardShare</h1>
              <p className="text-sm text-gray-600 ml-2">Book unique outdoor spaces</p>
            </div>
            <div className="text-sm text-gray-600">
              {filteredSpaces.length} spaces available
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search spaces, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="rating">Highest Rated</option>
              <option value="price">Price: Low to High</option>
              <option value="distance">Nearest First</option>
            </select>
          </div>

          {/* Filter Panel */}
          {filterOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-green-500 text-white'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-green-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {filteredSpaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpaces.map(space => (
              <div
                key={space.id}
                onClick={() => setSelectedSpace(space)}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer transform hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(space.id)
                    }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(space.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${space.price}/hr
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                    {space.name}
                  </h3>

                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {space.location}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(space.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {space.rating}
                    </span>
                    <span className="text-sm text-gray-600">
                      ({space.reviews})
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Distance */}
                  <div className="text-sm text-gray-600 mb-4">
                    📍 {space.distance} km away
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No spaces found. Try adjusting your filters.</p>
          </div>
        )}
      </main>

      {/* Space Detail Modal */}
      {selectedSpace && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedSpace.name}</h2>
              <button
                onClick={() => setSelectedSpace(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedSpace.image}
                alt={selectedSpace.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedSpace.location}</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Rating</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">{selectedSpace.rating}</span>
                      <span className="text-gray-600">({selectedSpace.reviews} reviews)</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="text-2xl font-bold text-gray-900">${selectedSpace.price}/hr</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Distance</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedSpace.distance} km</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpace.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-colors mt-6">
                  Book This Space
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Favorites Indicator */}
      {favorites.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white rounded-full shadow-lg p-4 flex items-center gap-2">
          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
          <span className="font-semibold text-gray-900">{favorites.length} saved</span>
        </div>
      )}
    </div>
  )
}

export default App
