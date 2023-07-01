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
    </div>
  );
};

export default ContactPage;
