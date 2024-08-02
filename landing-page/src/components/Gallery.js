import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fetchGalleryImages } from '../api';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const galleryImagesData = await fetchGalleryImages();
      setGalleryImages(galleryImagesData);
    };
    fetchData();
  }, []);

  return (
    <section id="gallery" className="my-16 p-4 px-0">
      <p className="text-3xl text-minimal-black pre-title mb-6 text-center">Lorem ipsum lorem lorem</p>
      <h2 className="text-5xl font-semibold text-minimal-black text-center">Gallery</h2>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-8 text-white"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index} className="py-4">
            <img src={image.url} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover shadow-md transition-transform duration-300 hover:shadow-lg rounded-md hover:rounded-lg overflow-hidden" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
