// pages/pricing.js

import React from 'react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Low Pricing Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lowPricingFoods.map((food, index) => (
              <div key={index} className="p-6 border rounded-lg bg-yellow-200 dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2">{food.name}</h3>
                <p className="text-lg mb-4">₹{food.price}</p>
                <p className="text-lg">{food.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Medium Pricing Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediumPricingFoods.map((food, index) => (
              <div key={index} className="p-6 border rounded-lg bg-orange-200 dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2">{food.name}</h3>
                <p className="text-lg mb-4">₹{food.price}</p>
                <p className="text-lg">{food.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">High Pricing Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highPricingFoods.map((food, index) => (
              <div key={index} className="p-6 border rounded-lg bg-red-200 dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2">{food.name}</h3>
                <p className="text-lg mb-4">₹{food.price}</p>
                <p className="text-lg">{food.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const lowPricingFoods = [
  { name: "Vada Pav", price: 20, description: "A spicy potato filling sandwiched between a bread bun." },
  { name: "Samosa", price: 15, description: "Crispy pastry filled with spiced potatoes and peas." },
  { name: "Chole Bhature", price: 40, description: "Spicy chickpeas served with fried bread." },
  { name: "Idli", price: 30, description: "Steamed rice cakes served with chutney and sambar." },
  { name: "Dosa", price: 50, description: "Crispy rice pancake filled with spicy potato mixture." },
  { name: "Aloo Paratha", price: 25, description: "Flatbread stuffed with spiced mashed potatoes." },
  { name: "Pani Puri", price: 30, description: "Crispy puris filled with tangy water and spicy fillings." },
  { name: "Pav Bhaji", price: 40, description: "Mashed vegetable curry served with buttered bread rolls." },
  { name: "Veg Sandwich", price: 35, description: "Fresh vegetables and chutney between slices of bread." },
  { name: "Misal Pav", price: 45, description: "Spicy curry made of sprouted lentils served with bread." }
];

const mediumPricingFoods = [
  { name: "Butter Chicken", price: 150, description: "Tender chicken cooked in a creamy tomato sauce." },
  { name: "Paneer Tikka", price: 120, description: "Grilled paneer cubes marinated in spices." },
  { name: "Chicken Biryani", price: 200, description: "Aromatic rice dish with spiced chicken." },
  { name: "Mutton Curry", price: 250, description: "Spicy mutton cooked in a rich gravy." },
  { name: "Fish Fry", price: 180, description: "Crispy fried fish served with chutney." },
  { name: "Kadhai Paneer", price: 140, description: "Paneer cooked with bell peppers in a spicy sauce." },
  { name: "Dal Makhani", price: 110, description: "Creamy lentils cooked with butter and spices." },
  { name: "Chicken Tikka", price: 160, description: "Marinated chicken pieces grilled to perfection." },
  { name: "Veg Pulao", price: 90, description: "Fragrant rice cooked with mixed vegetables." },
  { name: "Rajma Chawal", price: 80, description: "Kidney beans cooked in a spicy gravy served with rice." }
];

const highPricingFoods = [
  { name: "Lobster Thermidor", price: 1200, description: "Lobster meat cooked in a creamy wine sauce." },
  { name: "Grilled Salmon", price: 1000, description: "Fresh salmon fillet grilled to perfection." },
  { name: "Lamb Chops", price: 950, description: "Juicy lamb chops marinated and grilled." },
  { name: "Beef Steak", price: 1100, description: "Tender beef steak cooked to your liking." },
  { name: "Prawn Cocktail", price: 850, description: "Fresh prawns served with a tangy cocktail sauce." },
  { name: "Duck Confit", price: 1300, description: "Duck leg slow-cooked in its own fat." },
  { name: "Foie Gras", price: 1500, description: "Rich and buttery foie gras served with accompaniments." },
  { name: "Truffle Pasta", price: 900, description: "Pasta tossed with truffle oil and mushrooms." },
  { name: "Rack of Lamb", price: 1250, description: "Herb-crusted rack of lamb cooked to perfection." },
  { name: "Seafood Platter", price: 1400, description: "A variety of fresh seafood served with dipping sauces." }
];
