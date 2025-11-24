import React, { useState } from 'react';

export default function Doodle() {
  const artworks = [
    {
      id: 1,
      title: "Abstract Mind",
      style: "Abstract",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop",
      description: "Exploring consciousness through patterns"
    },
    {
      id: 2,
      title: "Nature's Symphony",
      style: "Botanical",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=800&fit=crop",
      description: "Organic forms and natural elements"
    },
    {
      id: 3,
      title: "Urban Chaos",
      style: "Street Art",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=800&fit=crop",
      description: "City life in chaotic harmony"
    },
    {
      id: 4,
      title: "Dream Sequence",
      style: "Surreal",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=800&fit=crop",
      description: "Subconscious visual narratives"
    },
    {
      id: 5,
      title: "Geometric Flow",
      style: "Geometric",
      image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=800&h=800&fit=crop",
      description: "Mathematical beauty in motion"
    },
    {
      id: 6,
      title: "Character Studies",
      style: "Character Design",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&h=800&fit=crop",
      description: "Expressive personality sketches"
    },
    {
      id: 7,
      title: "Mandala Magic",
      style: "Mandala",
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=800&fit=crop",
      description: "Meditative circular patterns"
    },
    {
      id: 8,
      title: "Pop Culture",
      style: "Pop Art",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=800&fit=crop",
      description: "Modern icons reimagined"
    },
    {
      id: 9,
      title: "Zen Garden",
      style: "Minimalist",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=800&fit=crop",
      description: "Less is more philosophy"
    }
  ];

  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState('All');

  const styles = ['All', 'Abstract', 'Botanical', 'Geometric', 'Surreal', 'Character Design'];

  const filteredArtworks = filter === 'All' 
    ? artworks 
    : artworks.filter(art => art.style === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-8">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-cyan-400">Doodle</span> Art
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mb-12">
          Free-flowing creativity expressed through spontaneous illustrations and intricate doodles. 
          Where imagination meets pen and paper, creating unique visual stories.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setFilter(style)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === style
                  ? 'bg-cyan-400 text-black font-semibold'
                  : 'border border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-900">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                  hoveredId === artwork.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-cyan-400 text-sm font-semibold mb-3 uppercase tracking-widest">
                  {artwork.style}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-center">{artwork.title}</h3>
                <p className="text-gray-300 text-sm text-center">{artwork.description}</p>
                <button className="mt-6 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  View Details
                </button>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                #{artwork.id}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles Section */}
      <div className="px-8 pb-20">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">Art Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Line Art', emoji: '✏️' },
            { name: 'Stippling', emoji: '⚫' },
            { name: 'Zentangle', emoji: '🌀' },
            { name: 'Typography', emoji: '🔤' },
            { name: 'Cartoon', emoji: '🎨' },
            { name: 'Sketch', emoji: '✍️' },
            { name: 'Pattern', emoji: '🔲' },
            { name: 'Digital', emoji: '💻' }
          ].map((style) => (
            <div 
              key={style.name} 
              className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-cyan-400 hover:scale-105"
            >
              <div className="text-4xl mb-3">{style.emoji}</div>
              <p className="text-lg font-semibold">{style.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 pb-20">
        <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-12 text-center border border-cyan-400/30">
          <h2 className="text-3xl font-bold mb-4">Commission Custom Artwork</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Looking for unique doodle art for your project? Let's collaborate and bring your ideas to life!
          </p>
          <button className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}