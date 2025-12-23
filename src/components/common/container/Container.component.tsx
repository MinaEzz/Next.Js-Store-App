import { cn } from "@/lib/utils";
import IContainerProps from "./Container.types";

export default function Container({ children, className }: IContainerProps) {
  return (
    <div className={cn("max-w-6xl xl:max-w-7xl px-8 mx-auto", className)}>
      {children}
    </div>
  );
}
