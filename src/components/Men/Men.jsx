import React from 'react'
import ShoeDataMen from './ShoeDataMen'

function Men() {
    return (
        <>
            <div>
                <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/nature_bathing_women_1920x800_1_.jpg?auto=webp&format=pjpg&quality=85"

                ></img>
            </div>
            <h1 className='text-center text-2xl text-customBlue pt-10 pb-5'>Mens Accessories</h1>
            <div className='flex justify-between'>
                <button className="bg-customBlue text-white text-xl rounded-full px-6 py-2">
                    Footwear
                </button>
                <button className="bg-customBlue text-white text-xl rounded-full px-6 py-2">
                    Clothing
                </button>
                <button className="bg-customBlue text-white text-xl rounded-full px-6 py-2">
                    Sportstyle
                </button>
                <button className="bg-customBlue text-white text-xl rounded-full px-6 py-2">
                    Online Exclusive
                </button>
                <button className="bg-customBlue text-white text-xl rounded-full px-6 py-2">
                    Sale Outlet
                </button>
            </div>
            <h1 className='text-center text-2xl text-customBlue pt-10 pb-5'>New Launch</h1>
            <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/GEL-KAYANO_SLIDE_28_-_WEB.jpg?auto=webp&format=pjpg&quality=85"></img>
            <h1 className='text-center text-2xl text-customBlue pt-10 pb-5'>Top Sellers</h1>
            <div className='flex'>
                <ShoeDataMen/>
            </div>

            <h1 className='text-center text-2xl text-customBlue pt-10 pb-5'>Running Collection</h1>
            <div>
                <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/NIMBUS-26-NEW_COLOUR_men_web_.jpg?auto=webp&format=pjpg&quality=85"></img>
            </div>

            <div>
                <ShoeDataMen/>
            
            </div>



            <div className='my-20'>
            <h1 className='text-center text-2xl text-customBlue pt-10 pb-5'>Top Sellers</h1>
            <div 
                className="grid-container" 
                style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
                    gap: '16px', // Space between images
                    maxWidth: '1350px', // Max width for the grid
                    margin: 'auto' // Center the grid
                }}
            >
                <div>
                    <img 
                        src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_1_-_Novablast_4_675x380__1.jpg?auto=webp&format=pjpg&quality=85" 
                        alt="Novablast 4" 
                        className="grid-item" 
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </div>
                <div>
                    <img 
                        src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_2_-_Nimbus_26_TR_675x380__1.jpg?auto=webp&format=pjpg&quality=85" 
                        alt="Nimbus 26 TR" 
                        className="grid-item" 
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </div>
                <div>
                    <img 
                        src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_3_-_GT_2000_13_675x380_.jpg?auto=webp&format=pjpg&quality=85" 
                        alt="GT 2000 13" 
                        className="grid-item" 
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </div>
                <div>
                    <img 
                        src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_4_-_GT_1000_13_675x380__1.jpg?auto=webp&format=pjpg&quality=85" 
                        alt="GT 1000 13" 
                        className="grid-item" 
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </div>
            </div>
        </div>
        

        </>
    )
}

export default Men