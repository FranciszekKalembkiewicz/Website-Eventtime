import galleryJson from './gallery.json';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  tags?: string[];
};

export const galleryImages = galleryJson.images as GalleryImage[];

export function filterGallery(...tags: string[]): GalleryImage[] {
  if (tags.length === 0) return galleryImages;
  return galleryImages.filter((img) => img.tags?.some((t) => tags.includes(t)));
}

export function filterByDecoCategory(categoryId: string): GalleryImage[] {
  return filterGallery(`deco-${categoryId}`);
}
