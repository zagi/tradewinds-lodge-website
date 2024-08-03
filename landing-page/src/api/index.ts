import Strapi, { StrapiResponse } from 'strapi-sdk-js';
import { AboutData, FooterData, HeroData, MenuItem, Room, Service, Testimonial, HeaderData } from '../types';
import { config } from '../config';

const strapi = new Strapi({
  url: config.apiUrl,
  prefix: '/api',
  store: {
    key: config.strapiToken,
    useLocalStorage: false,
    cookieOptions: { path: '/' },
  },
});

export const fetchHeader = async (): Promise<HeaderData> => {
  const response = await strapi.find('header') as StrapiResponse<HeaderData>;
  return response.data;
};

export const fetchHero = async (): Promise<HeroData> => {
  const response = await strapi.find('hero') as StrapiResponse<HeroData>;
  return response.data;
};

export const fetchAbout = async (): Promise<AboutData> => {
  const response = await strapi.find('about') as StrapiResponse<AboutData>;
  return response.data;
};

export const fetchFooter = async (): Promise<FooterData> => {
  const response = await strapi.find('footer') as StrapiResponse<FooterData>;
  return response.data;
};

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await strapi.find('menu') as StrapiResponse<MenuItem[]>;
  return response.data;
};

export const fetchRooms = async (): Promise<Room[]> => {
  const response = await strapi.find('rooms') as StrapiResponse<Room[]>;
  return response.data;
};

export const fetchServices = async (): Promise<Service[]> => {
  const response = await strapi.find('services') as StrapiResponse<Service[]>;
  return response.data;
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
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

export const fetchGalleryImages = async (): Promise<any> => {
  const response = await strapi.find('gallery') as StrapiResponse<any>;
  return response.data;
};
