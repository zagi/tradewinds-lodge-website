import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RoomSlide = ({ room }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-md transition-transform duration-300 hover:shadow-lg">
      <Swiper loop={true} className="rounded-t-lg overflow-hidden">
        {room.images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt={`${room.title} image ${i + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-6">
        <div className="mb-2 text-minimal-black">{room.amenities}</div>
        <h3 className="text-xl font-semibold mb-4">{room.title}</h3>
        <p className="text-gray-600 mb-0">{room.description}</p>
      </div>
    </div>
  );
};

export default RoomSlide;
