"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const initialEmailData = {
    email: '',
    subject: '',
    message: '',
  };

  const [emailData, setEmailData] = useState(initialEmailData);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailText = 'emilianomachado967@gmail.com';
    navigator.clipboard.writeText(emailText).then(function () {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://formspree.io/f/mbjvykrv', emailData);

      if (response.status === 200) {
        console.log('Correo electrónico enviado con éxito');
        setEmailData(initialEmailData);
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };

  const handleChange = (e: any) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ToastContainer />
    <div>
      <div className="bg-transparent text-gray-900 dark:text-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 capitalize">Get in touch</h2>
          <p className="mt-2 text-lg mb-2">And let me be your partner in excellence</p>
          <p onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
            {copied ? 'Copied' : 'emilianomachado967@gmail.com'}
          </p>
        </div>
      </div>

        <div className="container mx-auto py-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center capitalize">Contact me</h1>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-[#ffbe0b] text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={emailData.subject}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-[#ffbe0b] text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={emailData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-[#ffbe0b] text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-[#ffbe0b] text-white rounded-md hover:bg-[#ffbe0b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffbe0b]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}


