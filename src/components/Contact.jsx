import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded p-4 shadow-md">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="mb-2">Address: 61 Av.Lamarche Verte Ouislane</p>
          <p className="mb-2">Meknes, Maroc</p>
          <p className="mb-2">Phone: 06 61 61 69 05</p>
          <p className="mb-2">Email: noroelectro@outlook.fr</p>
        </div>

        <div className="bg-white rounded p-4 shadow-md">
          <h2 className="text-xl font-bold mb-2">Opening Hours</h2>
          <p className="mb-2">Monday-Thursday: 9am - 10pm</p>
          <p className="mb-2">Friday: 6pm - 10pm</p>
          <p className="mb-2">Saturday-Sunday: 9am-10pm</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Contact Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
