import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import Font Awesome icons
import TestimonialCard from '../../Card/TestimonialCard'; // Adjust the import path as needed
import { useSelector } from 'react-redux';

const TestimonialsCarousel = () => {
  const productReviews = useSelector((state) => state.productReviews.productReviews);
  const themeMode = useSelector((state) => state.theme.mode);

  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (productReviews.length > 0) {
      const transformedTestimonials = productReviews
        .filter(product => product.hasReviews)
        .flatMap(product =>
          product.reviews.map(review => ({
            imageUrl: review.userpic,
            customerName: review.name,
            productName: product.name,
            rating: review.ratings,
            reviewMessage: review.review,
          }))
        );
      setTestimonials(transformedTestimonials);
    }
  }, [productReviews]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const noReviews = testimonials.length === 0;

  return (
    <div className={`w-full h-full rounded-lg relative overflow-hidden ${themeMode === 'theme-mode-dark' ? 'gradient-bg-dark' : 'gradient-bg-light'} flex items-center justify-center`}>
      {noReviews ? (
        <div className="w-full h-full flex justify-center items-center">
          <p className={`text-xl font-bold ${themeMode === 'theme-mode-dark' ? 'text-txt-white' : 'text-txt-color'}`}>
            No product reviews yet
          </p>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-between relative">
            <button
              className={`absolute z-50 left-0 top-1/2 transform -translate-y-1/2 text-xl ${themeMode === 'theme-mode-dark' ? "text-txt-white" : "text-black"}`}
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>

            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <div key={index} className="w-1/3 p-3">
                  <TestimonialCard
                    imageUrl={testimonial.imageUrl}
                    customerName={testimonial.customerName}
                    productName={testimonial.productName}
                    rating={testimonial.rating}
                    reviewMessage={testimonial.reviewMessage}
                  />
                </div>
              ))}
            </div>

            <button
              className={`absolute z-50 right-0 top-1/2 transform -translate-y-1/2 text-xl ${themeMode === 'theme-mode-dark' ? "text-txt-white" : "text-black"} `}
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;
