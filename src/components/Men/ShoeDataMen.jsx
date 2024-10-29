import React, { useState } from 'react'

const shoeData = [
    {
        id: 1,
        name: "Nike Cortez",
        description: "Men's running shoes",
        price: "Rs 12,500",
        mainImage: "https://www.asics.co.in/media/catalog/product/1/0/1011b693_022_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
        smallImages: [
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_021_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
            "https://www.asics.co.in/media/catalog/product/1/0/1011b928_750_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg"
        ]
    },

    {
        id: 2,
        name: "ASICS Gel-Nimbus 25",
        description: "Men's running shoes",
        price: "Rs 13,500",
        mainImage: "https://www.asics.co.in/media/catalog/product/1/0/1011b867_003_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
        smallImages: [
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_002_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_001_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg"
        ]
    },
    {
        id: 3,
        name: "ASICS Gel-Quantum 360",
        description: "Men's running shoes",
        price: "Rs 14,999",
        mainImage: "https://www.asics.co.in/media/catalog/product/1/0/1011b867_003_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
        smallImages: [
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_002_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_001_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg"
        ]
    },
    {
        id: 4,
        name: "ASICS Gel-Venture 8",
        description: "Men's trail running shoes",
        price: "Rs 8,999",
        mainImage: "https://www.asics.co.in/media/catalog/product/1/0/1011b867_001_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
        smallImages: [
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_002_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg",
            "https://www.asics.co.in/media/catalog/product/1/0/1011b867_003_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=800&width=640&auto=webp&format=pjpg"
        ]
    }
];
function ShoeDataMen() {
    const [hoveredId, setHoveredId] = useState(null); // Store the ID of the hovered card

    return (
        <>
            <div className="flex flex-wrap space-x-10 pl-5 mb-5 justify-around">
                {shoeData.map((shoe) => {
                    const [mainImage, setMainImage] = useState(shoe.mainImage);

                    return (
                        <div
                            key={shoe.id}
                            className='w-[300px] m-2'
                            onMouseEnter={() => setHoveredId(shoe.id)} // Set hovered ID
                            onMouseLeave={() => setHoveredId(null)} // Reset hovered ID
                        >
                            <div className='relative'>
                                <img
                                    src={mainImage}
                                    alt={shoe.name}
                                    className=''
                                />
                                {/* Show small images only if the card is hovered */}
                                {hoveredId === shoe.id && (
                                    <div className='absolute left-2 bottom-1 flex space-x-2'>
                                        {shoe.smallImages.map((smallImage, index) => (
                                            <img
                                                key={index}
                                                src={smallImage}
                                                alt={`Small Shoe ${index + 1}`}
                                                className='w-[60px] h-[50px] cursor-pointer'
                                                onMouseEnter={() => setMainImage(smallImage)} // Change main image on hover
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className='text-center text-xl text-customBlue'>
                                <h1>{shoe.name}</h1>
                                <h1>{shoe.description}</h1>
                                <h1>{shoe.price}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ShoeDataMen;