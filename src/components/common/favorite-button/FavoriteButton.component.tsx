import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import IFavoriteButtonProps from "./FavoriteButton.types";

export default function FavoriteButton({ prodcutId }: IFavoriteButtonProps) {
  return (
    <Button size={"icon"} variant={"outline"} className="p-4 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
