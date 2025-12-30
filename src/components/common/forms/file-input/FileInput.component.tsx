import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import IFileInputProps from "./FileInput.types";

export default function FileInput({ name, label }: IFileInputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input id={name} name={name} type="file" accept="image/*" required />
    </div>
  );
}
