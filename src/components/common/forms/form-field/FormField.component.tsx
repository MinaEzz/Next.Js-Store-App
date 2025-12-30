import IFormFieldProps from "./FormField.types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormField({
  name,
  type,
  defaultValue,
  label,
  placeholder,
}: IFormFieldProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
