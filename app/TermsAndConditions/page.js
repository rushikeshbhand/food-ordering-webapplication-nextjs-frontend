// pages/terms.js

import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-lg">
          Welcome to FastFoodsIndia. By using our services, you agree to the following terms and conditions.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Accounts</h2>
        <p className="text-lg">
          When you create an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your account and password.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Orders</h2>
        <p className="text-lg">
          By placing an order, you agree to pay the listed price. We reserve the right to cancel orders if we suspect fraud or other issues.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
        <p className="text-lg">
          We may update these terms from time to time. Your continued use of our services constitutes acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}
