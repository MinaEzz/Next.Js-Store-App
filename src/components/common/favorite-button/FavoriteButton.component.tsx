import IFavoriteButtonProps from "./FavoriteButton.types";
import { auth } from "@clerk/nextjs/server";
import { SignInCardButton } from "../forms/buttons/Buttons.component";
import { getFavoriteProductId } from "@/utils/actions";
import FavoriteToggleForm from "./favorite-toggle-form/FavoriteToggleForm.component";

export default async function FavoriteButton({
  productId,
}: IFavoriteButtonProps) {
  const { userId } = await auth();
  if (!userId) return <SignInCardButton />;
  const favoriteId = await getFavoriteProductId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
