/* eslint-disable @typescript-eslint/no-explicit-any */

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
export interface HeaderLink {
  id?: number;
  label?: string;
  url?: string;
}
export interface HeaderData {
  id?: number;
  documentId?: string;
  logo?: MediaData | any;
  menuitems?: HeaderLink[];
}
export interface CarouselImage {
  id?: number;
  image?: MediaData | any;
}

export interface BannerImagesBlock {
  id?: number;
  carouselImages?: CarouselImage[];
}

export interface HomePageBannerData {
  id?: number;
  documentId?: string;
  Heading?: string;
  subheading?: string;
  aboutText?: string;
  buttonText?: string;
  bannerImages?: BannerImagesBlock[];
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

export interface HomePageCardBlock {
  id?: number;
  Heading: string;
  description: string;
  LinkText: string;
  image?: MediaData | any;
}

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
  LinkText?: string;
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
export interface FooterLink {
  id?: number;
  label?: string;
  url?: string;
}
export interface SocialLink {
  id?: number;
  Platform?: string;
  url?: string;
}
export interface FooterData {
  id?: number;
  documentId?: string;
  Logo?: MediaData | any;
  description?: string;
  ContactTitle?: string;
  Address?: string;
  Email?: string;
  NewsletterTitle?: string;
  QuickLinks?: FooterLink[];
  Resources?: FooterLink[];
  SocialLink?: SocialLink[];
  copyrightText?: string;
  badgeText?: string;
  vectorImage?: MediaData | any;


}
export interface FeaturedImageItem {
  id?: number;
  carouselImages?: MediaData | any;
}
export interface FeaturedImagesData {
  id?: number;
  Heading?: string;
  images?: {
    id?: number;
    carouselImages?: MediaData | any;
  }[];
  backgroundImage?: MediaData | any;
}
export interface UpcomingEventItem {
  id?: number;
  Title?: string;
  DateText?: string;
  Time?: string;
  Location?: string;
  Capacity?: string;
  Label?: string;
  Icon?: MediaData | any;
}

export interface UpcomingEventsData {
  id?: number;
  Heading?: string;
  Subheading?: string;
  EventItems?: UpcomingEventItem[];
}

// LatestNews Types

export interface CategoryItem {
  id: number;
  name: string;
  url?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  slug?: string;
  image?: MediaData | any;
  category?: CategoryItem;
}

export interface LatestNewsData {
  id: number;
  Heading: string;
  Subheading: string;
  FeaturedArticle: NewsItem | null;
  NewsList: NewsItem[];
  // Backend stores categories per news card (`CategoryList` inside the card),
  // not a top-level category list.
  CategoryList?: CategoryItem[];
  ViewAllButton?: {
    id?: number;
    label?: string;
    url?: string;
  };
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
