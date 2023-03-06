export class ProductType {
  id!: string;
  description!: string;
}

export class Product {
  id!: string;
  name!: string;
  image!: string;
  type!: ProductType;
}
