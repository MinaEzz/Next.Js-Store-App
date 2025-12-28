import { Button } from "@/components/ui/button";
import IAddToCartButtonProps from "./AddToCartButton.types";

export default function AddToCartButton({ productId }: IAddToCartButtonProps) {
  return (
    <Button
      variant={"default"}
      size={"lg"}
      className="mt-8 capitalize cursor-pointer"
    >
      Add to Cart
    </Button>
  );
}
