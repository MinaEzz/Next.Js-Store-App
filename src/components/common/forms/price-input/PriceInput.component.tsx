import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import IPriceInputProps from "./PriceInput.types";

export default function PriceInput({
  name = "price",
  defaultValue,
}: IPriceInputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
