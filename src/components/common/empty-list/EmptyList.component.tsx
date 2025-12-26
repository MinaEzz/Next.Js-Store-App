import { cn } from "@/lib/utils";
import IEmptyListProps from "./EmptyList.types";

export default function EmptyList({
  heading = "No Items Found!",
  className = "",
}: IEmptyListProps) {
  return (
    <h2
      className={cn(
        "text-xl text-muted-foreground text-center capitalize mt-8",
        className
      )}
    >
      {heading}
    </h2>
  );
}
