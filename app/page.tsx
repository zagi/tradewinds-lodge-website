import PropertyLandingPage from "@/components/PropertyLandingPage";
import {
  getAllMarkdownData,
  getMarkdownDataBySlug,
  getAllGalleryImages,
} from "@/lib/markdown";
import {
  Room,
  Amenity,
  Testimonial,
  GalleryImage,
  HeroData,
  ContactData,
} from "@/types";

export default async function Home() {
  // Get all content data
  const rooms = await getAllMarkdownData<Room>("rooms");
  const amenities = await getAllMarkdownData<Amenity>("amenities");
  const testimonials = await getAllMarkdownData<Testimonial>("testimonials");
  const galleryImages: GalleryImage[] = getAllGalleryImages();

  // Get hero and contact data
  const heroData = await getMarkdownDataBySlug<HeroData>("site", "hero");
  const contactData = await getMarkdownDataBySlug<ContactData>(
    "site",
    "contact",
  );

  // Handle case where data might be missing
  if (!heroData || !contactData) {
    throw new Error(
      "Required content is missing. Make sure you have hero and contact markdown files.",
    );
  }

  return (
    <PropertyLandingPage
      rooms={rooms}
      amenities={amenities}
      testimonials={testimonials}
      galleryImages={galleryImages}
      heroData={heroData}
      contactData={contactData}
    />
  );
}
