import React from 'react';
import { FaPhoneAlt, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl w-full mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Details */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Toll Free: <strong>8688815001</strong></p>
            </div>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Pune Office: <strong>9767105569</strong>, <strong>9324464949</strong></p>
            </div>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Delhi Office: <strong>9540515001</strong></p>
            </div>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Kolkata Office: <strong>9331005001</strong>, <strong>9051226562</strong></p>
            </div>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Gurgaon Office: <strong>08930468427</strong></p>
            </div>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Bangalore: <strong>9632433261</strong>, <strong>8688815001</strong></p>
            </div>
            <div className="flex items-start mb-4">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <p className="text-gray-600">Hyderabad, Mumbai, Chennai: <strong>8688815001</strong></p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
                <FaUser className="text-blue-500 mx-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-12 px-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
                <FaEnvelope className="text-blue-500 mx-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full h-12 px-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
                <FaPhone className="text-blue-500 mx-2" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full h-12 px-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
                <FaMapMarkerAlt className="text-blue-500 mx-2" />
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  className="w-full h-12 px-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
                <FaCommentDots className="text-blue-500 mx-2" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full h-24 px-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
