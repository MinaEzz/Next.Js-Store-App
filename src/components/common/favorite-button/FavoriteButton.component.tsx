import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";

export default function FavoriteButton({ prodcutId }: { prodcutId: string }) {
  return (
    <Button size={"icon"} variant={"outline"} className="p- cursor-pointer">
      <FaHeart />
    </Button>
  );
}
