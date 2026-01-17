import type { TActionFunction } from "@/types";

export default interface IUpdateProductImageProps {
  image: string;
  name: string;
  action: TActionFunction;
  children?: React.ReactNode;
  text: string;
}
