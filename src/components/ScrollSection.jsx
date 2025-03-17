import React, { useState, useEffect } from "react";

const ScrollSection = () => {
  // Break the content into smaller sections
  const fullText = [
    
    "  Phi (1966–2012) was a visionary French street artist known for his vibrant and whimsical creations that transformed urban spaces across cities like Toulon, Marseille, and Paris. His art often featured playful characters—soaring songbirds, mischievous mice, enigmatic earthworms, and carefree cats—all part of his imaginary world, Pamparigouste. With his unique blend of humor, creativity, and imagination, Phi brought joy and wonder to city streets, turning everyday urban landscapes into magical realms.",
    "  A true pioneer of street art, Phi had a gift for creating characters that resonated with people of all ages. His work wasn’t just about the visual impact—it was about storytelling, building worlds within walls, and inviting passersby to step into his dreamlike vision. His art became a hallmark of spontaneity and imagination, offering a whimsical escape from the everyday grind.",
    "  Though Phi passed away in 2012, his artistic legacy lives on through this NFT project. We aim to preserve and celebrate his work by bringing it into the digital age, ensuring that his playful imagination and spirit of creativity continue to inspire generations to come.",
  ];

  // State to track the current section and visible words
  const [currentSection, setCurrentSection] = useState(0);
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    // Split the current section into words
    const words = fullText[currentSection].split(" ");
    setVisibleWords(new Array(words.length).fill(0.1)); // Initialize with low opacity

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < words.length) {
        setVisibleWords((prev) => {
          const newOpacities = [...prev];
          newOpacities[i] = 1; // Increase opacity of the current word
          return newOpacities;
        });
        i++;
      } else {
        // Move to the next section after a delay
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSection((prev) => (prev + 1) % fullText.length); // Loop back to the first section
        }, 1000); // Pause before starting the next section
      }
    }, 200); // Delay per word

    return () => clearInterval(typingInterval);
  }, [currentSection]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white md:px-24 items-center justify-center p-4">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-6 h-[50vh] md:h-auto flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Who Was Phi?</h1>
        <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left jura-font">
          Where Urban Legends Become Eternal: Phi's Legacy Lives On
        </h3>
        <p className="text-base md:text-lg h-[full] md:h-[250px] text-center md:text-left jura-font overflow-y-auto">
          {fullText[currentSection].split(" ").map((word, index) => (
            <span
              key={index}
              className="transition-opacity duration-500 ease-in-out"
              style={{ opacity: visibleWords[index] || 0.1 }} // Fallback opacity
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 px-4 md:px-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto md:h-1/3 object-cover rounded-lg shadow-lg"
        >
          <source src="/section2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ScrollSection;