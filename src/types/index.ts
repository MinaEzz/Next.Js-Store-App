export type TActionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type TCartItem = {
  productId: number;
  image: string;
  title: string;
  price: string;
  quantity: number;
  company: string;
};

export type TCartState = {
  cartItems: TCartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
