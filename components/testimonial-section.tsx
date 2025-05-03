'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';





export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Freelance Designer',
      feedback:
        "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Sheila Monica',
      role: 'Software Developer',
      feedback:
        'Tim mereka responsif dan profesional. Website kami sekarang jauh lebih cepat dan modern.',
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      feedback:
        'Harga bersahabat tapi kualitas premium! Sangat cocok untuk UMKM yang mau naik kelas.',
      rating: 4,
      image: '/services/image.png',
    },
    {
      name: 'Citra Lestari',
      role: 'Digital Marketer',
      feedback:
        'UI/UX-nya clean dan intuitif banget. Proses revisi juga fleksibel dan lancar.',
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + visibleCards < testimonials.length)
      setStartIndex(startIndex + 1);
  };
  
  const swiperRef = useRef(null);
  return (
    <div className="flex flex-col items-center min-h-screen py-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Testimonial</h2>
          <p className="text-gray-600 mt-2 max-w-md">
            Don't just take our word for it – see what actual users of our service have to say about their experience.
          </p>
        </div>
        <div className="flex gap-2">
        <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            <ChevronRight />
          </button>

        </div>
      </div>

      <div className="w-full  px-4 flex justify-center">
      <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  effect="coverflow"
  grabCursor
  centeredSlides
  slidesPerView={1.5} // manual control, atau ganti via JS
  modules={[EffectCoverflow]}
  coverflowEffect={{
    rotate: 20,
    stretch: 50, // ini jaraknya
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            480: { slidesPerView: 1.5, spaceBetween: 24 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 },
            1280: { slidesPerView: 3, spaceBetween: 50 },
            1440: { slidesPerView: 4, spaceBetween: 60 },
          }}
          
          
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 w-80 p-6 rounded-md align-center items-center shadow-md h-full flex flex-col justify-center group transition-all duration-300">
                <p className={`font-source text-gray-700 mb-4 text-base leading-6 line-clamp- group-hover:line-clamp-none transition-all duration-300`}>
                  {t.feedback}
                </p>
                <div className="flex mb-4 text-2xl">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                      {[...Array(5 - t.rating)].map((_, i) => (
                        <span key={i} className="text-gray-300">★</span>
                      ))}
                </div>
                <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                <div className="flex items-center mt-6">
                  
                  <div>
                    <h4 className="text-lg font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
