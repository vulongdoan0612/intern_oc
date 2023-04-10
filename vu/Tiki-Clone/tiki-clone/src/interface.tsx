export interface Product {
  id: number;
  master_id: number;
  sku: string;
  name: string;
  url_key: string;
  url_path: string;
  type: string;
  short_description: string;
  price: number;
  list_price: number;
  original_price: number;
  price_prefix: string;
  discount: number;
  discount_rate: number;
  rating_average: number;
  review_count: number;
  favourite_count: number;
  thumbnail_url: string;
  has_ebook: boolean;
  inventory_status: string;
  inventory_type: string;
  productset_group_name: string;
  is_flower: boolean;
  is_fresh: boolean;
  is_gift_card: boolean;
  seller_product_id: number;
  delivery_info_text: string;
}

export interface Datum {
  progress: any;
  thumbnail_url: string | undefined;
  deal_id: number;
  name: string;
  deal_status: string;
  status: number;
  url: string;
  tags: string;
  discount_percent: number;
  special_price: number;
  special_from_date: number;
  from_date: string;
  special_to_date: number;
  score: number;
  store_id: number;
  store_name: string;
  store_logo: string;
  product: Product;
}
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
