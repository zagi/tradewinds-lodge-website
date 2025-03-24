import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a localized date format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

/**
 * Normalizes a filename to a slug
 */
export function filenameToSlug(filename: string): string {
  // Remove file extension and convert to lowercase
  return filename.replace(/\.[^/.]+$/, "").toLowerCase();
}

/**
 * Converts a slug to a display name
 */
export function slugToDisplayName(slug: string): string {
  // Replace hyphens with spaces and capitalize each word
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}