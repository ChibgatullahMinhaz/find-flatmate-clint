import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { slides } from "../Utilities/utilities";



export default function BannerSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto  px-4 py-6 lg:py-12 relative">
      {/* Slide Background */}
      <div className="relative h-[480px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${slides[activeStep].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a023a]/70 to-transparent z-10" />
        </div>

        {/* Slide Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            {slides[activeStep].title}
          </h2>
          <p className="text-sm sm:text-base mb-6 max-w-xl">
            {slides[activeStep].description}
          </p>
          <a
            href={slides[activeStep].buttonLink}
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-semibold transition"
          >
            {slides[activeStep].buttonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Nav Buttons */}
        <button
          onClick={handleBack}
          className="absolute top-1/2 left-3 z-30 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 z-30 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow transition"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Slide Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full transition-all ${
              activeStep === i ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
