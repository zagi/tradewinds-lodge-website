import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container mx-auto my-16 p-4">
      <h2 className="text-5xl font-semibold text-minimal-black text-center mb-10">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows={4} className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="bg-minimal-black text-white py-2 px-4 rounded-sm transition-colors duration-300 hover:bg-minimal-white hover:text-minimal-black">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
