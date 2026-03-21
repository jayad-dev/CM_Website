import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutCardComponent extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_components';
  info: {
    displayName: 'CardComponent';
  };
  attributes: {
    description: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LinkText: Schema.Attribute.String;
  };
}

export interface LayoutImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_layout_image_carousels';
  info: {
    displayName: 'ImageCarousel';
  };
  attributes: {
    backgroundImge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    carouselImage1: Schema.Attribute.Component<'layout.card-component', false>;
    carouselImage2: Schema.Attribute.Component<'layout.card-component', true>;
    carouselImage3: Schema.Attribute.Component<'layout.card-component', false>;
    carouselImage4: Schema.Attribute.Component<'layout.card-component', false>;
  };
}

export interface LayoutImages extends Struct.ComponentSchema {
  collectionName: 'components_layout_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    carouselImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    Platform: Schema.Attribute.Enumeration<
      ['Facebook', ' Twitter', ' Instagram', 'YouTube']
    >;
    url: Schema.Attribute.String;
  };
}

export interface StripBannerStripBaneer extends Struct.ComponentSchema {
  collectionName: 'components_strip_banner_strip_baneers';
  info: {
    displayName: 'stripBanner';
  };
  attributes: {
    EventButton: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subheading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.card-component': LayoutCardComponent;
      'layout.image-carousel': LayoutImageCarousel;
      'layout.images': LayoutImages;
      'shared.link': SharedLink;
      'shared.social-link': SharedSocialLink;
      'strip-banner.strip-baneer': StripBannerStripBaneer;
    }
  }
}
