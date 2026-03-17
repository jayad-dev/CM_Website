/* eslint-disable @typescript-eslint/no-explicit-any */

// Strapi Media Types
export interface StrapiMedia {
  id?: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: any;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string | null;
}

export interface MediaData {
  data?: StrapiMedia | StrapiMedia[];
  attributes?: StrapiMedia;
  url?: string;
}

// Header Data from Strapi
export interface HeaderData {
  id?: number;
  documentId?: string;
  logo?: MediaData | any;
  YourPath?: string;
  FreeClasses?: string;
  Events?: string;
  SevaVolunteering?: string;
  About?: string;
  CM75Events?: string;
  yourPathLink?: string;
  CM75EventsLink?: string;
  sevavolunteeringLink?: string;
  freeClassesLink?: string;
  eventsLink?: string;
  aboutLink?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string | null;
}

// Home Page Banner Data
export interface HomePageBannerData {
  id?: number;
  documentId?: string;
  Heading?: string;
  subheading?: string;
  aboutText?: string;
  buttonText?: string;
  banner?: MediaData | any;
  stripBanner?: StripBannerData;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string | null;
}

export interface StripBannerData {
  id?: number;
  documentId?: string;
  EventButton?: string;
  Heading?: string;
  Subheading?: string;
  image?: MediaData | any;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string | null;
}

// Home Page Card Block
export interface HomePageCardBlock {
  id?: number;
  Heading: string;
  description: string;
  LinkText: string;
  image?: MediaData | any;
}

// Home Page Card Section
export interface HomePageCardData {
  id?: number;
  Heading: string;
  Subheading: string;
  Block1?: HomePageCardBlock;
  Block2?: HomePageCardBlock;
  Block3?: HomePageCardBlock;
  Block4?: HomePageCardBlock;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}


export interface FeaturedInitiativeBlock {
  id?: number;
  Heading: string;
  description: string;
  // LinkText?: string;
  image?: MediaData | any;
}

export interface FeaturedInitiativeData {
  id?: number;
  Heading: string;
  subheading: string;
  imageGrid1?: FeaturedInitiativeBlock;
  imageGrid2?: FeaturedInitiativeBlock;
  imageGrid3?: FeaturedInitiativeBlock;
  imageGrid4?: FeaturedInitiativeBlock;
  imageGrid5?: FeaturedInitiativeBlock;
  imageGrid6?: FeaturedInitiativeBlock;
  imageGrid7?: FeaturedInitiativeBlock;

}
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
