import type { Schema, Struct } from '@strapi/strapi';

export interface NameSubservices extends Struct.ComponentSchema {
  collectionName: 'components_name_subservices';
  info: {
    displayName: 'subservices';
  };
  attributes: {};
}

export interface SubservicesSubservices extends Struct.ComponentSchema {
  collectionName: 'components_subservices_subservices';
  info: {
    displayName: 'subservices';
    icon: 'apps';
  };
  attributes: {
    examples: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'name.subservices': NameSubservices;
      'subservices.subservices': SubservicesSubservices;
    }
  }
}
