"use client";
import { usePathname } from "next/navigation";
import FormContainer from "../../forms/form-container/FormContainer.component";
import { toggleFavorite } from "@/utils/actions";
import { CardSubmitButton } from "../../forms/buttons/Buttons.component";
import IFavoriteToggleFormProps from "./FavoriteToggleForm.types";

export default function FavoriteToggleForm({
  favoriteId,
  productId,
}: IFavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleFavoriteAction = toggleFavorite.bind(null, {
    productId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleFavoriteAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
}
