// api.js
import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Strapi API URL

export const fetchHeader = async () => {
  const response = await axios.get(`${API_URL}/header`);
  return response.data;
};

export const fetchHero = async () => {
  const response = await axios.get(`${API_URL}/hero`);
  return response.data;
};

export const fetchAbout = async () => {
  const response = await axios.get(`${API_URL}/about`);
  return response.data;
};

export const fetchFooter = async () => {
  const response = await axios.get(`${API_URL}/footer`);
  return response.data;
};

export const fetchMenu = async () => {
  const response = await axios.get(`${API_URL}/menu`);
  return response.data;
};

export const fetchRooms = async () => {
  const response = await axios.get(`${API_URL}/rooms`);
  return response.data;
};

export const fetchServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

// Mock function for Booking.com testimonials
export const fetchTestimonials = async () => {
  // In real implementation, this would fetch from Booking.com API
  return [
    {
      title: 'The Best Tiny Home Vacation',
      rating: 5,
      review: '"When you are designing with Lorem Ipsum, you diminish the importance of the copy..."',
      name: 'Caleb Zanzer',
    },
    {
      title: 'The Best Tiny Home Vacation',
      rating: 5,
      review: '"When you are designing with Lorem Ipsum, you diminish the importance of the copy..."',
      name: 'Marii Brown',
    },
    {
      title: 'The Best Tiny Home Vacation',
      rating: 4,
      review: '"When you are designing with Lorem Ipsum, you diminish the importance of the copy..."',
      name: 'Michael Brown',
    },
  ];
};

export const fetchGalleryImages = async () => {
  const response = await axios.get(`${API_URL}/gallery`);
  return response.data;
};
