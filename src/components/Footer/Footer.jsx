import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className='flex justify-between text-white bg-customBlue p-6 '>

        {/* Corporate Info Section */}
        <ul className='space-y-3'>
          <h3 className="font-bold">CORPORATE INFO</h3>
          <li>About ASICS</li>
          <li>Terms & Conditions</li>
          <li>Disclaimer</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Security</li>
          <li>Sustainability</li>
        </ul>

        {/* Customer Service Section */}
        <ul className='space-y-3'>
          <h3 className="font-bold">CUSTOMER SERVICE</h3>
          <li>Contact Us</li>
          <li>Returns Policy</li>
          <li>Shipping Information</li>
          <li>FAQ</li>
          <li>Store Locator</li>
          <li>Order Tracking</li>
        </ul>

        {/* Sizing Guides & Resources Section */}
        <ul className='space-y-3'>
          <h3 className="font-bold">SIZING GUIDES & RESOURCES</h3>
          <li>Shoe Size Guide</li>
          <li>Shoe Width Guide</li>
          <li>Pronation Guide</li>
          <li>Clothing Size Guide</li>
        </ul>

        {/* Sign Up to Newsletter Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">SIGN UP TO OUR NEWSLETTER</h3>
          <p>Be the first to hear about new products, exclusive events, and online offers.</p>
          <p>Sign up and Get 10% off on your first Order. T&C applied.</p>

          {/* Email Input with Button */}
          <div className="relative w-full max-w-sm">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full p-3  rounded-full text-black"
            />
            <button className="absolute top-0 right-0 h-full px-6 bg-customBlue text-white rounded-full hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Contact Info */}
          <div className='space-y-3'>
            <p className="font-bold">Let’s Talk</p>
            <p>0124-6289100</p>
            <p>customer-service-india@asics.com</p>
          </div>
          <p className="font-bold">Connect With Us</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-customBlue bg-white hover:text-gray-400" size={28} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-customBlue rounded-md bg-white hover:text-gray-400" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className=' flex w-full text-white bg-customBlue pt-4 pb-4 justify-between text-[15px]'>
          <h3>© 2024 ASICS India Pvt. Ltd. All Rights Reserved.</h3>
          <h3>The stripe design featured on the sides of the ASICS® shoes is a registered trademark of ASICS Corporation.</h3>
        </div>
    </>
  );
}

export default Footer;
