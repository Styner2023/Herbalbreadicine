// src/components/TestimonialSection.tsx

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'ANNE SEYMOUR',
    role: 'Founder & CEO of Canticle Farm',
    image: '/images/1.clients.png',
    quote: "The attention to detail and organic menu options exceeded our expectations. Every corporate event we've hosted with Herbalbreadicine has been a tremendous success. Their commitment to quality and service is unmatched."
  },
  {
    id: 2,
    name: 'Canticle Farm Community Family & Friends',
    role: 'Extremely Satisfied Repeated Dinner Guest',
    image: '/images/2.clients.png',
    quote: "Their wedding catering service is simply magical. The organic dishes are not only beautiful but incredibly delicious. Every couple I've worked with has been amazed by their creativity and professionalism."
  },
  {
    id: 3,
    name: 'FRANCISCO & CHRISTINA',
    role: 'Founders & Co-Owners of Caminante Cultural Foundation',
    image: '/images/3.clients.png',
    quote: "Finding a catering service that understands the importance of organic, wholesome ingredients was crucial for our retreats. Herbalbreadicine delivers exceptional quality while honoring our commitment to health."
  }
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center relative">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={previous}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              What Our Clients Say
            </h2>

            <blockquote className="text-lg md:text-xl text-gray-300 mb-6">
              “{testimonials[currentIndex].quote}”
            </blockquote>

            <div>
              <p className="text-xl md:text-2xl font-semibold text-yellow-400">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-md md:text-lg text-gray-400">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
