'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';
import { useTranslations } from 'next-intl';
import 'swiper/css/navigation';
import us from "@/public/flag/us.svg"




export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const t = useTranslations('Home.testimonial');
  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Freelance Designer',
      feedback:
        "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
      rating: 5,
      image: '/services/image.png',
      
      countryCode: "id"
    },
    {
      name: 'Sheila Monica',
      role: 'Software Developer',
      feedback:
        'Tim mereka responsif dan profesional. Website kami sekarang jauh lebih cepat dan modern.',
      rating: 5,
      image: '/services/image.png',
       language: "us",
          countryCode: "us"
    },
    {
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      feedback:
        'Harga bersahabat tapi kualitas premium! Sangat cocok untuk UMKM yang mau naik kelas.',
      rating: 4,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
    },
    {
      name: 'Citra Lestari',
      role: 'Digital Marketer',
      feedback:
        'UI/UX-nya clean dan intuitif banget. Proses revisi juga fleksibel dan lancar.',
      rating: 5,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
    },
    {
      name: 'Rizky Dwi',
      role: 'Startup Founder',
      feedback:
        'Saya nggak nyangka bisa dapet hasil sebagus ini dalam waktu singkat. Highly recommended!',
      rating: 5,
      image: '/services/image.png',
       language: "en",
          countryCode: "us"
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
    <div className="flex flex-col items-center py-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">{t('title')}</h2>
          <p className="text-gray-600 mt-2 max-w-md">
            {t('subtitle')}
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
                    <div className="relative bg-gray-50 w-80 p-6 rounded-lg shadow-md h-full flex flex-col justify-between group transition-all duration-300">
    
    {/* Flag di pojok kanan atas */}
    <div className="absolute top-4 right-4 w-6 h-4 rounded-sm overflow-hidden shadow-md">
      <img
        src={`/flags/${t.language}.svg`} // Contoh: en.svg, id.svg, jp.svg
        alt={t.language}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Feedback message */}
    <p className="text-gray-700 text-center text-base leading-6 mb-4 group-hover:line-clamp-none transition-all duration-300">
      {t.feedback}
    </p>

    {/* Rating stars */}
    <div className="flex mb-4  text-xl">
      {[...Array(t.rating)].map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
      {[...Array(5 - t.rating)].map((_, i) => (
        <span key={i} className="text-gray-300">★</span>
      ))}
    </div>

    {/* Avatar & identity */}
    <div className="flex items-start mt-auto pt-4 border-t">
      <img
        src={t.image}
        alt={t.name}
        className="w-10 h-10 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="text-sm font-semibold">{t.name}</h4>
        <p className="text-xs text-gray-500">{t.role}</p>
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
