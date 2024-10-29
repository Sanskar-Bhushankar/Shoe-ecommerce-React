import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import Men from '../Men/Men';

function Header() {
  const [isMenHovered, setIsMenHovered] = useState(false);
  const [isKidsHovered, setIsKidsHovered] = useState(false);

  const handleMenMouseEnter = () => {
    setIsMenHovered(true);
  };

  const handleMenMouseLeave = () => {
    setIsMenHovered(false);
  };

  return (
    <>
      {/* Scrollable Section (the bar that will scroll up) */}
      <div className="bg-customBlue flex justify-between w-full items-center pt-8">
        <h1 className="text-white text-xl">SIGNUP now and get 10% off* on First Purchase</h1>
        <div className="flex text-white text-lg pr-16 space-x-6">
          <h2 className="m-2">Track order</h2>
          <h2 className="m-2">Help</h2>
          <h2 className="m-2">Find a Store</h2>
          <img src="images/avatar.png" className="h-7 w-7" alt="Avatar" />
        </div>
      </div>

      {/* Pinned Section (this part will stay pinned) */}
      <div className="sticky top-0 bg-white z-50 shadow-md">
        <div className="pt-3 pl-11 flex justify-between w-full items-center">
        <NavLink to="/">
        <img src="https://www.asics.co.in/logo-rxE.svg" className="ml-5" alt="Logo" />
        </NavLink>
          

          {/* Navigation Links */}
          <div className="flex justify-center w-full space-x-8 relative">
            {/* MEN Link */}
            <NavLink
              to="/men"
              className="text-customBlue hover:text-blue-600 font-bold relative"
              onMouseEnter={handleMenMouseEnter}
              onMouseLeave={handleMenMouseLeave}
            >
              MEN
            </NavLink>


            <NavLink
              to={"/Women"}
              className="text-customBlue hover:text-blue-600 font-bold relative"
              onMouseEnter={handleMenMouseEnter}
              onMouseLeave={handleMenMouseLeave}
            >
              WOMEN
            </NavLink>

            {/* Other Links */}
            {/* <a href="#" className="text-customBlue hover:text-blue-600 font-bold">Women</a> */}
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">Kids</a>
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">SPORTSTYLE</a>
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">COLLECTION</a>
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">SALE</a>
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">CLOTHING</a>
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">RUNNING CLUB</a>
            <a href="#" className="text-customBlue hover:text-blue-600 font-bold">BULK ENQUIRY</a>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search"
            className="mr-5 border border-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Dropdown Menu for MEN (Initially hidden) */}
        {isMenHovered && (
          <div
            className="absolute left-0 w-full bg-white text-black shadow-md p-4 transition-all duration-300"
            style={{ top: '100%' }} // Align right below the navbar
            onMouseEnter={handleMenMouseEnter} // Keep showing when hovering over the dropdown
            onMouseLeave={handleMenMouseLeave} // Hide when leaving the dropdown
          >
            <div className="flex space-x-52 w-[1500px] text-[18px] text-customBlue mx-auto">
              {/* List 1 */}
              <ul>
                <h3 className="font-bold">FEATURED</h3>
                <li>New Arrivals</li>
                <li>Bestsellers</li>
                <li>Cricket Essentials</li>
                <li>Sale</li>
              </ul>

              {/* List 2 */}
              <ul>
                <h3 className="font-bold">FOOTWEAR</h3>
                <li>Running</li>
                <li>Sportstyle</li>
                <li>Flip Flop and Slides</li>
                <li>Indoor</li>
                <li>Cricket</li>
                <li>Tennis</li>
                <li>Track & Field</li>
                <li>Trail Running</li>
              </ul>

              {/* List 3 */}
              <ul>
                <h3 className="font-bold">CLOTHING</h3>
                <li>Tops</li>
                <li>Jackets & Vests</li>
                <li>Shorts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Pants</li>
                <li>Tights</li>
                <li>Track Suits</li>
              </ul>

              {/* List 4 */}
              <ul>
                <h3 className="font-bold">Accessories</h3>
                <li>Caps & Handbags</li>
                <li>Socks</li>
                <li>Handbags</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [isMenHovered, setIsMenHovered] = useState(false);

//   return (
//     <>
//       {/* Scrollable Section (the bar that will scroll up) */}
//       <div className="bg-customBlue flex justify-between w-full items-center pt-8">
//         <h1 className="text-white text-xl">SIGNUP now and get 10% off* on First Purchase</h1>
//         <div className="flex text-white text-lg pr-16 space-x-6">
//           <h2 className="m-2">Track order</h2>
//           <h2 className="m-2">Help</h2>
//           <h2 className="m-2">Find a Store</h2>
//           <img src="images/avatar.png" className="h-7 w-7" alt="Avatar" />
//         </div>
//       </div>

//       {/* Pinned Section (this part will stay pinned) */}
//       <div className="sticky top-0 bg-white z-50 shadow-md">
//         <div className="pt-3 pl-11 flex justify-between w-full items-center">
//           <img src="https://www.asics.co.in/logo-rxE.svg" className="ml-5" alt="Logo" />
          
//           {/* Navigation Links */}
//           <div className="flex justify-center w-full space-x-8">
//             {/* MEN Link with hover effect */}
//             <a 
//               href="#" 
//               className="text-customBlue hover:text-blue-600 font-bold relative"
//               onMouseEnter={() => setIsMenHovered(true)} // Show menu on hover
//               onMouseLeave={() => setIsMenHovered(false)} // Hide menu on leave
//             >
//               MEN
//               {isMenHovered && (
//                 <div 
//                   className="absolute top-full left-0 w-[1000px] h-auto bg-white text-black shadow-md p-4  flex justify-center" // Full width and fixed height
//                   onMouseLeave={() => setIsMenHovered(false)} // Hide on mouse leave
//                 >
//                   <div className="flex space-x-12 ">
//                     {/* List 1 */}
//                     <ul>
//                       <h3 className="font-bold">FEATURED</h3>
//                       <li>New Arrivals</li>
//                       <li>Bestsellers</li>
//                       <li>Cricket Essentials</li>
//                       <li>Sale</li>
//                     </ul>

//                     {/* List 2 */}
//                     <ul>
//                       <h3 className="font-bold">FOOTWEAR</h3>
//                       <li>Running</li>
//                       <li>Sportstyle</li>
//                       <li>Flip Flop and Slides</li>
//                       <li>Indoor</li>
//                       <li>Cricket</li>
//                       <li>Tennis</li>
//                       <li>Track & Field</li>
//                       <li>Trail Running</li>
//                     </ul>

//                     {/* List 3 */}
//                     <ul>
//                       <h3 className="font-bold">CLOTHING</h3>
//                       <li>Tops</li>
//                       <li>Jackets & Vests</li>
//                       <li>Shorts</li>
//                       <li>Hoodies & Sweatshirts</li>
//                       <li>Pants</li>
//                       <li>Tights</li>
//                       <li>Track Suits</li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">WOMEN</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">KIDS</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">SPORTSTYLE</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">COLLECTION</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">SALE</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">CLOTHING</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">RUNNING CLUB</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">BULK ENQUIRY</a>
//           </div>

//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search"
//             className="mr-5 border border-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <>
//       {/* Scrollable Section (the bar that will scroll up) */}
//       <div className="bg-customBlue flex justify-between w-full items-center pt-8">
//         <h1 className="text-white text-xl">SIGNUP now and get 10% off* on First Purchase</h1>
//         <div className="flex text-white text-lg pr-16 space-x-6">
//           <h2 className="m-2">Track order</h2>
//           <h2 className="m-2">Help</h2>
//           <h2 className="m-2">Find a Store</h2>
//           <img src="images/avatar.png" className="h-7 w-7" alt="Avatar" />
//         </div>
//       </div>

//       {/* Pinned Section (this part will stay pinned) */}
//       <div className="sticky top-0 bg-white z-50 shadow-md">
//         <div className="pt-3 pl-11 flex justify-between w-full items-center">
//           <img src="https://www.asics.co.in/logo-rxE.svg" className="ml-5" alt="Logo" />
          
//           {/* Navigation Links */}
//           <div className="flex justify-center w-full space-x-8">
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">MEN</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">WOMEN</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">KIDS</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">SPORTSTYLE</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">COLLECTION</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">SALE</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">CLOTHING</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">RUNNING CLUB</a>
//             <a href="#" className="text-customBlue hover:text-blue-600 font-bold">BULK ENQUIRY</a>
//           </div>

//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search"
//             className="mr-5 border border-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
