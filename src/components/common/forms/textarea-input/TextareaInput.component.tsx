import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ITextareaInputProps from "./TextareaInput.types";

export default function TextareaInput({
  name,
  defaultValue,
  label,
}: ITextareaInputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}
