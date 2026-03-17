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

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
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
      'layout.footer': LayoutFooter;
      'layout.image-carousel': LayoutImageCarousel;
      'strip-banner.strip-baneer': StripBannerStripBaneer;
    }
  }
}
