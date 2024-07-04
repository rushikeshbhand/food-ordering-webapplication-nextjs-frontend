// pages/refund-policy.js

import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Cancellation/Refund Policy</h1>
        <p className="text-lg">
          At FastFoodsIndia, we strive to ensure customer satisfaction. If you are not satisfied with your order, please contact us within 24 hours of delivery.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Cancellation Policy</h2>
        <p className="text-lg">
          Orders can be cancelled up to 1 hour before the scheduled delivery time. After this period, cancellations may not be accepted.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Refund Policy</h2>
        <p className="text-lg">
          If you are eligible for a refund, it will be processed within 7 business days. Refunds will be credited back to the original payment method.
        </p>
      </div>
    </div>
  );
}
