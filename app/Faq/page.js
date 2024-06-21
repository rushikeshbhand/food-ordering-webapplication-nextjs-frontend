'use client'
import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Question: How can I place an order?",
            answer: "Placing an order is simple! Browse our menu, select the items you want, add them to your cart, and proceed to checkout. You'll need to provide your delivery address and payment information to complete your order."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept a variety of payment methods including credit/debit cards, PayPal, and major mobile payment options like Apple Pay and Google Pay. We also accept cash on delivery in select locations."
        },
        {
            question: "Do you offer vegetarian or vegan options?",
            answer: "Yes, we have a variety of vegetarian and vegan options available. You can filter our menu to show only vegetarian or vegan items, ensuring you find something delicious that meets your dietary preferences."
        },
        {
            question: "Do I need a referral?",
            answer: "Once your order is placed, you'll receive a confirmation email with a tracking link. You can use this link to track the status of your order in real-time, from preparation to delivery."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is placed, you'll receive a confirmation email with a tracking link. You can use this link to track the status of your order in real-time, from preparation to delivery."
        }
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                className="flex items-center focus:outline-none w-full"
                                onClick={() => toggleFAQ(index)}
                            >
                                <svg className={`flex-shrink-0 w-6 h-6 text-blue-500 transform ${activeIndex === index ? 'rotate-45' : 'rotate-0'} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{faq.question}</h1>
                            </button>
                            {activeIndex === index && (
                                <div className="flex mt-8 md:mx-10">
                                    <span className="border border-blue-500"></span>
                                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                            <hr className="my-8 border-gray-200 dark:border-gray-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
