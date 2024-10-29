import React from 'react';
import ShoeCard from './ShoeCard';
import ShoeData from './ShoeData'; // Import the shoe data array

function ShoeGrid() {
  return (
    <div className="grid grid-cols-4 gap-7 p-4"> {/* Create a grid with 4 columns and some gap */}
      {ShoeData.map((shoe, index) => ( // Use the shoeData array to create ShoeCard components
        <ShoeCard key={index} shoe={shoe} /> // Pass shoe data as props
      ))}
    </div>
  );
}

export default ShoeGrid;
