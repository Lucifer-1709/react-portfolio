import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, we'll contact you at ${email}`);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-6 text-center">
        <input
          type="email"
          className="p-2 w-64 border border-gray-300 rounded-md"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
