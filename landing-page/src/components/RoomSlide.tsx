import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Room } from '../types';

interface RoomSlideProps {
  room: Room;
}

const RoomSlide: React.FC<RoomSlideProps> = ({ room }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-md transition-transform duration-300 hover:shadow-lg">
      <Swiper loop={true} className="rounded-t-lg overflow-hidden">
        {room.attributes.images.data.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={`http://localhost:1337${image.attributes.url}`} alt={`${room.attributes.title} ${i + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-6">
        <div className="mb-2 text-minimal-black">{room.attributes.amenities}</div>
        <h3 className="text-xl font-semibold mb-4">{room.attributes.title}</h3>
        <p className="text-gray-600 mb-0">{room.attributes.description}</p>
      </div>
    </div>
  );
};

export default RoomSlide;
