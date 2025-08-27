export type ProductCategory =
  | "Exterior"
  | "Interior"
  | "Electronics"
  | "Maintenance"
  | "Performance"
  | "Safety";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in smallest currency unit (e.g., cents)
  currency: string; // e.g., "USD", "INR"
  category: ProductCategory;
  brand: string;
  imageUrl: string;
  inStock: boolean;
  rating?: number; // 0-5
  tags?: string[];
}

export interface ProductInput {
  name: string;
  description: string;
  price: number;
  currency: string;
  category: ProductCategory;
  brand: string;
  imageUrl: string;
  inStock: boolean;
  rating?: number;
  tags?: string[];
}

export interface ApiError {
  error: string;
}


