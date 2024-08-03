export interface MenuItem {
  id: number;
  attributes: {
    targetId: string;
    label: string;
    componentType: string;
  }
}

export interface AboutData {
  preTitle: string;
  title: string;
  content: string;
  image?: {
    url: string;
  };
}

export interface FooterData {
  content: string;
}

export interface HeroData {
  preTitle: string;
  title: string;
  subtitle: string;
  backgroundImage?: {
    data: {
      id: number,
      attributes: {
        name: string,
        alternativeText: string,
        url: string
      }
    }
    
  };
}

export interface Room {
  title: string;
  description: string;
  amenities: string[];
  images: string[];
}

export interface Service {
  icon: any;
  title: string;
  description: string;
}

export interface Testimonial {
  title: string;
  rating: number;
  review: string;
  name: string;
}

export interface HeaderData {
  title: string;
  facebookUrl: string;
  instagramUrl: string;
}
