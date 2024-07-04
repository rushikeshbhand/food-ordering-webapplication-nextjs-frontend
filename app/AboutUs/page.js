// pages/about.js

import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to FastFoodsIndia! We are committed to delivering the best food to your doorstep with the fastest service possible. Our journey began with a passion for food and a vision to make delicious meals accessible to everyone.
        </p>
        <p className="mt-4 text-lg">
          Our mission is to bring a variety of cuisines from different parts of India to your home. We pride ourselves on our quick delivery times and the quality of our food.
        </p>
        <p className="mt-4 text-lg">
          Thank you for choosing FastFoodsIndia. We hope you enjoy our food as much as we enjoy making it for you.
        </p>
      </div>
    </div>
  );
}
