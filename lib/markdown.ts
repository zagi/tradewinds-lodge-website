import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BaseContent, GalleryImage } from '@/types';

// Base directory for content
const contentDirectory = path.join(process.cwd(), 'content');

// Function to get all markdown files from a directory
export function getAllMarkdownFilesInDirectory(directoryPath: string): string[] {
  const fullPath = path.join(contentDirectory, directoryPath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`Directory not found: ${fullPath}`);
    return [];
  }
  
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.filter(fileName => fileName.endsWith('.md'));
}

// Function to get content from a markdown file
export async function getMarkdownContent<T>(directoryPath: string, fileName: string): Promise<{
  frontMatter: T;
  content: string;
  slug: string;
}> {
  const fullPath = path.join(contentDirectory, directoryPath, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data: frontMatter, content } = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  const contentHtml = processedContent.toString();
  
  // Return frontMatter and content
  return {
    frontMatter: frontMatter as T,
    content: contentHtml,
    slug: fileName.replace(/\.md$/, '')
  };
}

// Function to get data from all markdown files in a directory
export async function getAllMarkdownData<T extends BaseContent>(directoryPath: string): Promise<T[]> {
  const files = getAllMarkdownFilesInDirectory(directoryPath);
  
  const allMarkdownData = await Promise.all(
    files.map(async (fileName) => {
      const { frontMatter, content, slug } = await getMarkdownContent<Omit<T, 'slug' | 'content'>>(directoryPath, fileName);
      
      return {
        slug,
        ...frontMatter,
        content
      } as T;
    })
  );
  
  // Sort by order field if available
  return allMarkdownData.sort((a, b) => {
    if ('order' in a && 'order' in b) {
      return ((a as BaseContent).order ?? 0) - ((b as BaseContent).order ?? 0);
    }
    return 0;
  });
}

// Function to get a specific file by its slug
export async function getMarkdownDataBySlug<T extends BaseContent>(directoryPath: string, slug: string): Promise<T | null> {
  const files = getAllMarkdownFilesInDirectory(directoryPath);
  const fileName = files.find(file => file.replace(/\.md$/, '') === slug);
  
  if (!fileName) {
    return null;
  }
  
  const { frontMatter, content } = await getMarkdownContent<Omit<T, 'slug' | 'content'>>(directoryPath, fileName);
  
  return {
    slug,
    ...frontMatter,
    content
  } as T;
}

// Function to get all gallery images
export function getAllGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  
  // Return empty array if directory doesn't exist
  if (!fs.existsSync(galleryDir)) {
    console.warn(`Gallery directory not found: ${galleryDir}`);
    return [];
  }
  
  const fileNames = fs.readdirSync(galleryDir);
  
  // Filter for image files only
  const imageFiles = fileNames.filter(fileName => 
    /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName)
  );
  
  return imageFiles.map(fileName => ({
    src: `/images/gallery/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
    slug: fileName.replace(/\.[^/.]+$/, "").toLowerCase()
  }));
}