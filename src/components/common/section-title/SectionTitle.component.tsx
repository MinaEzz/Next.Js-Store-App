import { Separator } from "@/components/ui/separator";
import ISectionTitleProps from "./SectionTitle.types";

export default function SectionTitle({ title }: ISectionTitleProps) {
  return (
    <>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {title}
      </h2>
      <Separator />
    </>
  );
}
