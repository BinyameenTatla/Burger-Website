import React, { useState, useEffect } from "react";

// Background image for the hero section
const Vector = "lp.jpg";  // Replace with your image path

const bgImage = {
    backgroundImage: `url(${Vector})`,  // Corrected image URL embedding
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
};

const ImageList = [
    { id: 1, img: "kj.jpg" }, // Replace with actual image paths
    { id: 2, img: "bbb.avif" },
    { id: 3, img: "bbbb.jpg" },
    
];

export const Hero = () => {
    const [selectedImage, setSelectedImage] = useState(ImageList[0].img);  // Default to the first image
    const [currentIndex, setCurrentIndex] = useState(0);  // Index to track current image
    
    // Function to go to the next image in the list
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length); // Cycle through images
    };

    // Automatically change images every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 1000); // Change every 3 seconds

        // Cleanup interval when component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    // Update the selected image when the current index changes
    useEffect(() => {
        setSelectedImage(ImageList[currentIndex].img); 
    }, [currentIndex]);

    return (
        <div style={bgImage} className="min-h-[650px]">
            <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5 max-w-6xl mx-auto">
                    
                    {/* Left Section with Text */}
                    <div className="text-center sm:text-left flex justify-center items-center sm:block">
                        <div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                                Welcome to <span className="text-[#e73131]">Burger</span> King
                            </h1>
                            <p className="text-sm sm:text-base py-5 text-white opacity-80">
                            Welcome to Burger King, where flame-grilled goodness meets unbeatable taste. Indulge in our signature Whopper and a variety of mouthwatering options. Every bite is a burst of flavor, made just for you!
                            </p><br></br>
                            <button className="bg-[hsl(0,65%,50%)] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#de37ba] transition-all duration-300">
                                Order Now
                            </button><br></br><br></br><br></br>
                        </div>
                    </div>

                    {/* Right Section with Rotating Image */}
                    <div className="min-h-[400px] flex justify-center items-center">
                        <div className="relative w-full h-full group">
                            {/* Extra-large circular image with hover effect */}
                            <img
                                src={selectedImage}  // Show the selected image from the ImageList
                                alt="Selected"
                                className="object-cover w-[350px] h-[350px] rounded-full shadow-xl hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
