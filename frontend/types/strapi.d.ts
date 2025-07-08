// shared strapi types
// strapi response structure
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

// portfolio item type
export interface PortfolioItem {
  id: number;
  attributes: {
    title: string;
    description: string;
    images: {
      data: Array<{
        id: number;
        attributes: {
          url: string;
          alternativeText?: string;
        };
      }>;
    };
  };
}
