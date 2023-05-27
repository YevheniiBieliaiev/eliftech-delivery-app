export interface IProductModel {
  id: string;
  productName: string;
  image: string;
  description: string;
  price: number;
  shopId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProdProto {
  productName: string;
  image: string;
  description: string;
  price: number;
}
