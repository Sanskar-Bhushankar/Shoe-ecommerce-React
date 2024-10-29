import React, { useState } from 'react';
import Link from 'next/link';

function ShoeCard({ shoe }) {
  const [hovered, setHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
    <Link href="/shoe-detail"> {/* Provide a valid route for Next.js Link */}
      <div
        className="w-full h-[350px] flex-shrink-0 inline-block relative m-2 shadow-lg rounded-[20px] transition-transform duration-300 transform hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setHoveredImageIndex(null); }}
      >
        <div className="w-full h-[280px] bg-gray-300 object-cover rounded-t-[20px] relative overflow-hidden">
          <img
            src={hovered && hoveredImageIndex !== null ? shoe.type[hoveredImageIndex] : shoe.link}
            alt={shoe.name}
            className="object-cover w-full h-full transition-opacity duration-300"
          />
          {hovered && (
            <div className="absolute bottom-2 left-2 flex space-x-2">
              {shoe.type.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`shoe_color_${index}`}
                  onMouseEnter={() => setHoveredImageIndex(index)}
                  className={`object-cover w-[60px] h-[60px] m-1 rounded-full border-2 border-white shadow-sm transition-transform duration-200 ${hoveredImageIndex === index ? 'opacity-100' : 'opacity-40'}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="w-full p-4 h-[90px] bg-white rounded-b-[20px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{shoe.name}</h3>
            <p className="text-gray-600 text-sm">Men's Shoes</p>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{shoe.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ShoeCard;
