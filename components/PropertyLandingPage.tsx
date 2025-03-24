"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp, Home, Menu } from 'lucide-react';
import RoomCard from './RoomCard';
import AmenityCard from './AmenityCard';
import GalleryImage from './GalleryImage';
import TestimonialCard from './TestimonialCard';
import {ThemeToggle} from './theme/theme-toggle';
import { Button } from './ui/button';
import { Room, Amenity, Testimonial, GalleryImage as GalleryImageType, HeroData, ContactData } from '@/types';

interface PropertyLandingPageProps {
  rooms: Room[];
  amenities: Amenity[];
  testimonials: Testimonial[];
  galleryImages: GalleryImageType[];
  heroData: HeroData;
  contactData: ContactData;
}

const PropertyLandingPage: React.FC<PropertyLandingPageProps> = ({ 
  rooms, 
  amenities, 
  testimonials, 
  galleryImages, 
  heroData, 
  contactData 
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // For back to top button visibility
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-teal-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-xl font-bold">Tradewinds Lodge</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              onClick={() => scrollToSection('home')} 
              className="text-sm font-medium hover:text-teal-500 transition-colors cursor-pointer relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              onClick={() => scrollToSection('rooms')} 
              className="text-sm font-medium hover:text-teal-500 transition-colors cursor-pointer relative group"
            >
              Rooms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              onClick={() => scrollToSection('amenities')} 
              className="text-sm font-medium hover:text-teal-500 transition-colors cursor-pointer relative group"
            >
              Amenities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              onClick={() => scrollToSection('gallery')} 
              className="text-sm font-medium hover:text-teal-500 transition-colors cursor-pointer relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium hover:text-teal-500 transition-colors cursor-pointer relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className="hidden md:flex bg-teal-500 hover:bg-teal-600 text-white transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md">
            <div className="flex flex-col space-y-3">
              <a 
                onClick={() => {
                  scrollToSection('home');
                  setMenuOpen(false);
                }} 
                className="text-sm font-medium hover:text-teal-600 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                onClick={() => {
                  scrollToSection('rooms');
                  setMenuOpen(false);
                }} 
                className="text-sm font-medium hover:text-teal-600 transition-colors cursor-pointer"
              >
                Rooms
              </a>
              <a 
                onClick={() => {
                  scrollToSection('amenities');
                  setMenuOpen(false);
                }} 
                className="text-sm font-medium hover:text-teal-600 transition-colors cursor-pointer"
              >
                Amenities
              </a>
              <a 
                onClick={() => {
                  scrollToSection('gallery');
                  setMenuOpen(false);
                }} 
                className="text-sm font-medium hover:text-teal-600 transition-colors cursor-pointer"
              >
                Gallery
              </a>
              <a 
                onClick={() => {
                  scrollToSection('contact');
                  setMenuOpen(false);
                }} 
                className="text-sm font-medium hover:text-teal-600 transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-20 z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp delay-200">
              {heroData.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp delay-400">
              {heroData.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white transition-transform duration-300 hover:scale-105 animate-fadeInUp delay-600"
              onClick={() => scrollToSection('rooms')}
            >
              {heroData.buttonText}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Rooms</h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Discover our selection of beautifully designed rooms perfect for your stay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section id="amenities" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Amenities</h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              All our properties come with exceptional amenities to make your stay comfortable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.slug} amenity={amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Take a visual tour of our beautiful property and rooms
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage key={image.slug || index} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Residents Say</h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our happy residents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.slug} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{contactData.title}</h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {contactData.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xs">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-100 mb-6">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full transition-transform duration-300 hover:scale-105 bg-teal-600 hover:bg-teal-700 text-white animate-fadeInUp delay-600">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full mr-4">
                      <Home className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Our Location</h4>
                      <p className="text-gray-600 dark:text-gray-100">{contactData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full mr-4">
                      <Home className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-100">{contactData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full mr-4">
                      <Home className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600 dark:text-gray-100">{contactData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-100 bg-slate-200 rounded-lg overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-teal-50 dark:bg-teal-900">
                  <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.747563544157!2d39.579165585914055!3d-4.30479139495123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184048b9edb29ca5%3A0x623d60967e6a724a!2s43%20Diani%20Beach%20Road%2C%20Diani%20Beach%2C%20Kenia!5e0!3m2!1spl!2spl!4v1742835139993!5m2!1spl!2spl"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold text-white">Tradewinds Lodge</span>
              </div>
              <p className="text-sm">
                Premium properties and rooms for rent in the most desirable locations.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    onClick={() => scrollToSection('home')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('rooms')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Rooms
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('amenities')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('gallery')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            
            
            <div>
              <h3 className="text-white font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>{contactData.address.split(',')[0]}</li>
                <li>{contactData.address.split(',')[1]}</li>
                <li>{contactData.email}</li>
                <li>{contactData.phone}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Tradewinds Lodge. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-teal-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-teal-700 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default PropertyLandingPage;