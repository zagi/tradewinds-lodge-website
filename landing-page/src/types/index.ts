export interface ImageChild {
    id: number,
    attributes: {
      name: string,
      alternativeText: string,
      url: string
    }
}

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
  content: {
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }[];
  image?: {
    data: ImageChild
  }
}

export interface FooterData {
  content: string;
}

export interface HeroData {
  preTitle: string;
  title: string;
  subtitle: string;
  backgroundImage?: {
    data: ImageChild
  }
}

export interface Room {
  id: number
  attributes: {
    title: string;
    description: string;
    amenities: string;
    images: {
      data: ImageChild[]
    }
  }
}

export interface Service {
  id: number
  attributes: {
    icon: any;
    title: string;
    description: string;
  }
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
