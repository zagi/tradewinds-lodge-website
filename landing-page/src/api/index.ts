import Strapi, { StrapiResponse } from 'strapi-sdk-js';
import {
  AboutData,
  FooterData,
  HeroData,
  MenuItem,
  Room,
  Service,
  Testimonial,
  HeaderData,
} from '../types';
// import { config } from '../config';

const strapi = new Strapi({
  url: 'http://localhost:1337',
  prefix: '/api',
  store: {
    key: '9a6fbc56ede90abf660fa5eac5a093f6b152003b6bd7088ece5c43a314aa7695e3eaddf2360ba0c370aafa8ad8741698c38ada5d1d3f3b9bdd37b5a07ca7f1608b18ee29713733344818218865cb6d0c4ab35b476a32554cf3e0d4f688b924c3bb7f0913a026e74d0b6adbbaec89b2cc4721d5d424364534866886f721c33ba6',
    useLocalStorage: false,
    cookieOptions: { path: '/' },
  },
});

export const fetchHeader = async (): Promise<HeaderData> => {
  const response = (await strapi.find('header')) as StrapiResponse<{ attributes: HeaderData }>;
  return response.data.attributes;
};

export const fetchHero = async (): Promise<HeroData> => {
  const response = (await strapi.find('hero', {
    populate: '*'
  })) as StrapiResponse<{attributes:HeroData}>;
  return response.data.attributes;
};

export const fetchAbout = async (): Promise<AboutData> => {
  const response = (await strapi.find('about')) as StrapiResponse<{attributes:AboutData}>;
  return response.data.attributes;
};

export const fetchFooter = async (): Promise<FooterData> => {
  const response = (await strapi.find('footer')) as StrapiResponse<{attributes:FooterData}>;
  return response.data.attributes;
};

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = (await strapi.find('menus')) as StrapiResponse<MenuItem[]>;
  return response.data;
};

export const fetchRooms = async (): Promise<Room[]> => {
  const response = (await strapi.find('rooms')) as StrapiResponse<Room[]>;
  return response.data;
};

export const fetchServices = async (): Promise<Service[]> => {
  const response = (await strapi.find('services')) as StrapiResponse<Service[]>;
  return response.data;
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  return [
    {
      title: 'The Best Tiny Home Vacation',
      rating: 5,
      review:
        '"When you are designing with Lorem Ipsum, you diminish the importance of the copy..."',
      name: 'Caleb Zanzer',
    },
    {
      title: 'The Best Tiny Home Vacation',
      rating: 5,
      review:
        '"When you are designing with Lorem Ipsum, you diminish the importance of the copy..."',
      name: 'Marii Brown',
    },
    {
      title: 'The Best Tiny Home Vacation',
      rating: 4,
      review:
        '"When you are designing with Lorem Ipsum, you diminish the importance of the copy..."',
      name: 'Michael Brown',
    },
  ];
};

export const fetchGalleryImages = async (): Promise<any> => {
  const response = (await strapi.find('gallery')) as StrapiResponse<any>;
  return response.data;
};
