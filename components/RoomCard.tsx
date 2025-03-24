import React, { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Warehouse,
  Star,
  ExternalLink,
  Search,
} from "lucide-react";
import { Room } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import Image from 'next/image';
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Carousel from "./Carousel";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookingClick = () => {
    if (room.url) {
      window.open(room.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <Card className="overflow-hidden group flex flex-col justify-between">
        <div className="relative h-64 overflow-hidden">
          <Carousel
            images={room.images}
            alt={room.title}
            className="h-full w-full"
            imageClassName="transition-transform duration-500 group-hover:scale-110"
          />

          {room.badge && (
            <Badge className="absolute top-3 right-3 bg-teal-500 text-white hover:text-black dark:hover:text-white z-30">
              {room.badge}
            </Badge>
          )}

          <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center ">
            <Button
              className="scale-0 group-hover:scale-100 transition-transform duration-300"
              onClick={() => setIsOpen(true)}
            >
              View Details
            </Button>
          </div>
          <div className="absolute bottom-3 right-3 md:hidden bg-white/80 text-teal-600 rounded-full p-2 z-20">
            <Search onClick={() => setIsOpen(true)} className="h-4 w-4" />
          </div>
        </div>

        <CardHeader className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-semibold">
                {room.title}
              </CardTitle>
              <CardDescription className="flex items-center mt-1">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                {room.location}
              </CardDescription>
            </div>
            {(room.price && (
              <div className="text-xl font-bold text-teal-600">
                ${room.price}/{room.priceUnit}
              </div>
            )) ?? (
              <div className="text-xs font-bold text-teal-600">
                {/* Ask for price */}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-100 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>
                {room.beds} {room.beds === 1 ? "Bed" : "Beds"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{room.baths == 0 ? `Shared` : room.baths}</span>
            </div>
            <div className="flex items-center gap-1">
              <Warehouse className="h-4 w-4" />
              <span>
                {room.size} {room.sizeUnit}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center text-sm text-amber-500">
            <Star className="fill-amber-500 h-4 w-4 mr-1" />
            <span>{room.rating}</span>
          </div>
          <Badge
            className={`${room.status === "Available Now" ? "bg-green-600" : "bg-red-600"} text-white hover:text-black dark:hover:text-white`}
          >
            {room.status}
          </Badge>
        </CardFooter>
      </Card>

      {/* Room Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <VisuallyHidden>
          <DialogTitle>Details</DialogTitle>
        </VisuallyHidden>
        <DialogContent className="max-w-4xl p-0">
          <div className="grid md:grid-cols-2 h-full">
            {/* Carousel in Dialog - full height */}
            <div className="h-64 md:h-auto">
              <Carousel
                images={room.images}
                alt={room.title}
                className="h-full w-full"
                autoPlay={false}
              />
            </div>

            {/* Room Details */}
            <div className="p-6 flex flex-col">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">{room.title}</h2>
                <p className="text-gray-500 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {room.location}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-teal-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Beds</p>
                    <p className="font-medium">{room.beds}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-teal-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Baths</p>
                    <p className="font-medium">{room.baths}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Warehouse className="h-5 w-5 text-teal-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium">
                      {room.size} {room.sizeUnit}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-medium">{room.rating}/5</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <h3 className="font-medium mb-2">Description</h3>
                <div
                  className="text-gray-600 dark:text-gray-100 prose-sm"
                  dangerouslySetInnerHTML={{ __html: room.content }}
                />
              </div>

              <div className="mt-auto flex items-center justify-between">
                {(room.price && (
                  <div className="text-xl font-bold text-teal-600">
                    ${room.price}/{room.priceUnit}
                  </div>
                )) ?? (
                  <div className="text-xs font-bold text-teal-600">
                    {/* Ask for price */}
                  </div>
                )}
                {room.url && (
                  <Button
                    size="lg"
                    onClick={handleBookingClick}
                    className="flex gap-1 items-center"
                  >
                    Book a Viewing
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoomCard;
