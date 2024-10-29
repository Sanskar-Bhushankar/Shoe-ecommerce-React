import React, { useState, useEffect } from 'react';
import ShoeDataMen from '../Men/ShoeDataMen';

const Home = () => {
    const images = [
        'https://www.asics.co.in/media//wysiwyg/homepage/nature_bathing_hp_1920x800.jpg',
        'https://www.asics.co.in/media/wysiwyg/homepage/1920x800_7.jpg',
        'https://www.asics.co.in/media/wysiwyg/homepage/website_banner_2.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000); // 2000ms = 2 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]); // Depend on currentIndex to trigger re-rendering for slide change

    return (
        <>
            <div className="home w-100">
                <div className="relative w-full">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
            <h1 className='text-center text-3xl my-5 text-customBlue'>Shop By Category</h1>
            <div className='flex space-x-4 p-2'>
                <div className=' flex flex-col items-center'>
                    <img src='https://www.asics.co.in/media/wysiwyg/men_collection_.jpg?auto=webp&format=pjpg&quality=85'></img>
                    <button className='bg-customBlue text-center  text-white rounded-full text-xl px-6 py-3 mt-2'>Mens Collection</button>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src='https://www.asics.co.in/media/wysiwyg/women_collection_.jpg?auto=webp&format=pjpg&quality=85'></img>
                    <button className='bg-customBlue text-center  text-white rounded-full text-xl px-6 py-3 mt-2'>Womens Collection</button>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src='https://www.asics.co.in/media/.renditions/wysiwyg/homepage/Kids-DESKTOP.jpg?auto=webp&format=pjpg&quality=85'></img>
                    <button className='bg-customBlue text-center text-white rounded-full text-xl px-6 py-3 mt-2'>Kids Collection</button>
                </div>
            </div>

            <p className='text-center text-3xl mt-20 mb-5 text-customBlue'>Nature Bathing Collection</p>
            <div className="relative w-full  pb-[44.25%] mt-0"> {/* 16:9 Aspect Ratio */}
                <iframe
                    src="https://player.vimeo.com/video/1017397796?title=0&byline=0&portrait=0&autoplay=1&autopause=0&muted=1&loop=1&controls=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Vimeo Video"
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>

            {/* <div className='grid grid-cols-2 space-x-3 space-y-3 m-3 text-center items-center'>
                <div className='bg-slate-700 w-[680px] h-[390px]'>
                    <img src='https://www.asics.co.in/media/.renditions/wysiwyg/homepage/top_pick_banner_2_.jpg?auto=webp&format=pjpg&quality=85'></img>
                </div>
                <div className='bg-slate-700 w-[680px] h-[390px]'>
                    <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_3_-_GEL-NYC_2055_675x380_.jpg?auto=webp&format=pjpg&quality=85"></img>
                </div>
                <div className='bg-slate-700 w-[680px] h-[390px]'>
                    <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_2_-_EX89_675x380_.jpg?auto=webp&format=pjpg&quality=85"></img>
                </div>
                <div className='bg-slate-700 w-[680px] h-[360px]'>
                    <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_4_-_Gel-lyte_675x380_.jpg?auto=webp&format=pjpg&quality=85"></img>
                </div>
            </div> */}
            <h1 className='text-center text-3xl mt-20 mb-5 text-customBlue'>Top Pics for you</h1>
            <div className='grid grid-cols-2 gap-4 m-4'>
                <div className='bg-slate-700 w-full h-[380px]'>
                    <img
                        src='https://www.asics.co.in/media/.renditions/wysiwyg/homepage/top_pick_banner_2_.jpg?auto=webp&format=pjpg&quality=85'
                        className='object-cover w-full h-full'
                        alt='Top pick'
                    />
                </div>

                <div className='bg-slate-700 w-full h-[380px]'>
                    <img
                        src='https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_3_-_GEL-NYC_2055_675x380_.jpg?auto=webp&format=pjpg&quality=85'
                        className='object-cover w-full h-full'
                        alt='Gel-NYC'
                    />
                </div>

                <div className='bg-slate-700 w-full h-[380px]'>
                    <img
                        src='https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_2_-_EX89_675x380_.jpg?auto=webp&format=pjpg&quality=85'
                        className='object-cover w-full h-full'
                        alt='EX89'
                    />
                </div>

                <div className='bg-slate-700 w-full h-[380px]'>
                    <img
                        src='https://www.asics.co.in/media/.renditions/wysiwyg/homepage/grid_4_-_Gel-lyte_675x380_.jpg?auto=webp&format=pjpg&quality=85'
                        className='object-cover w-full h-full'
                        alt='Gel-Lyte'
                    />
                </div>

                
            </div>
            <h1 className='text-center text-3xl mt-20 mb-5 text-customBlue'>New Drops</h1>
            <img src="https://www.asics.co.in/media/.renditions/wysiwyg/homepage/KAYANO_EXPLORE_NA_-_WEB.jpg?auto=webp&format=pjpg&quality=85"></img>

            <h1 className='text-center text-3xl my-5 text-customBlue'>Latest Arrivals</h1>
            <div className='pb-[50px] '>
            <ShoeDataMen/>
            </div>
            


        </>
    );
};

export default Home;
