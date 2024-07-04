// pages/privacy-policy.js

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg">
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from FastFoodsIndia.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Personal Information We Collect</h2>
        <p className="text-lg">
          We collect Device Information and Order Information. Device Information includes data about your web browser, IP address, and some of the cookies installed on your device. Order Information includes your name, billing address, shipping address, payment information, and email address.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Do We Use Your Personal Information?</h2>
        <p className="text-lg">
          We use the Order Information to fulfill orders, communicate with you, and screen for potential fraud. Device Information is used to help us improve our website and optimize your experience.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Your Personal Information</h2>
        <p className="text-lg">
          We do not share your Personal Information with third parties except as required to fulfill orders or comply with laws.
        </p>
      </div>
    </div>
  );
}
