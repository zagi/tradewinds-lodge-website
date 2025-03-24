// Base content type that all content types extend
export interface BaseContent {
  slug: string;
  content: string;
  order?: number;
}

// Room content type
export interface Room extends BaseContent {
  title: string;
  location: string;
  price?: number;
  priceUnit: string;
  beds: number | string;
  baths: number | string;
  size: number;
  sizeUnit: string;
  rating: number;
  status: string;
  featured: boolean;
  badge?: string;
  images: string[]; // Array of image paths
  order: number;
  url?: string;
}

// Amenity content type
export interface Amenity extends BaseContent {
  title: string;
  description: string;
  icon: string;
  order: number;
}

// Testimonial content type
export interface Testimonial extends BaseContent {
  name: string;
  image: string;
  rating: number;
  order: number;
  desc?: string;
}

// Gallery image type
export interface GalleryImage {
  src: string;
  alt: string;
  slug: string;
}

// Hero section content type
export interface HeroData extends BaseContent {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
}

// Contact section content type
export interface ContactData extends BaseContent {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
}
