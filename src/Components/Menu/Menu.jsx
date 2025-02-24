import React from 'react';

export const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Cheeseburger',
      description: 'A delicious cheeseburger with fresh lettuce, tomatoes, and cheese.',
      image: 'kkk.jpg', // Replace with actual path to your image
      price: '$8.99',
    },
    {
      id: 2,
      name: 'Chicken Nuggets',
      description: 'Golden, crispy chicken nuggets served with your choice of dipping sauce.',
      image: 'kkkk.jpg', // Replace with actual path to your image
      price: '$5.99',
    },
    {
      id: 3,
      name: 'Fries',
      description: 'Crispy, hot fries with a pinch of salt, perfect as a side dish.',
      image: 'kkkkk.webp', // Replace with actual path to your image
      price: '$2.99',
    },
    {
      id: 4,
      name: 'Milkshake',
      description: 'Creamy milkshake made with premium ice cream and your favorite flavor.',
      image: 'kl.jpg', // Replace with actual path to your image
      price: '$4.99',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1c1a1a] to-[#5fbe3c] py-12"> {/* Gradient background */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Menu</h2>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-64 group-hover:scale-110 transition-all duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-xl font-bold text-gray-800">{item.price}</p>
                <button className="bg-[#42e42d] text-white px-6 py-2 rounded-lg mt-4 transition-all duration-300 hover:bg-[#2cbe2c]">
                Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
