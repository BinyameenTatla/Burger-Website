
import React from 'react';

export const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Fast Delivery',
            description: 'Get your delicious meal delivered right to your doorstep within minutes.',
            image: 'zz.jpg', // Replace with actual path to image
        },
        {
            id: 2,
            title: 'Quality Ingredients',
            description: 'We use only the finest and freshest ingredients for all of our dishes.',
            image: 'zzz.jpeg', // Replace with actual path to image
        },
        {
            id: 3,
            title: '24/7 Support',
            description: 'Our customer service is available around the clock to assist you.',
            image: 'zzzz.png', // Replace with actual path to image
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Services
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="object-cover w-full h-64 group-hover:scale-110 transition-all duration-300"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <button className="bg-[#42e42d] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-[#2cbe2c]">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
