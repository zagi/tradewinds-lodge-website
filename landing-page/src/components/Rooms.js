import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fetchRooms } from '../api';
import RoomSlide from './RoomSlide';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const roomsData = await fetchRooms();
      setRooms(roomsData);
    };
    fetchData();
  }, []);

  return (
    <section id="rooms" className="container mx-auto my-16 p-4">
      <p className="text-3xl text-minimal-black pre-title mb-6 text-right">Equipped with all the necessary amenities</p>
      <h2 className="text-5xl font-semibold text-minimal-black text-right mb-10">Rooms</h2>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-8"
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index} className="py-4">
            <RoomSlide room={room} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Rooms;
