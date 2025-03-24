import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { GalleryImage as GalleryImageType } from "@/types";
import { Search } from "lucide-react";

interface GalleryImageProps {
  image: GalleryImageType;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-lg aspect-square group">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            className="bg-white text-teal-600 hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            View Larger
          </Button>
        </div>
        <div className="absolute bottom-3 right-3 md:hidden bg-white/80 text-teal-600 rounded-full p-2 z-20">
          <Search onClick={() => setIsOpen(true)} className="h-4 w-4" />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
            <Button
              className="absolute top-2 right-2 bg-white dark:bg-transparent text-gray-800 rounded-full w-8 h-8 p-0 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;
