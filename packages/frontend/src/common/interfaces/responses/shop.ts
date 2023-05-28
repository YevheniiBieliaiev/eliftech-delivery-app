export interface IShopResponse {
  id: string;
  shopName: string;
  products: IProductResponse[];
}

export interface IProductResponse {
  id: string;
  productName: string;
  image: string;
  description: string;
  price: number;
}
