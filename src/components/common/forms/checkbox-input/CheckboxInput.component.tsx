import { Checkbox } from "@/components/ui/checkbox";
import ICheckboxInputProps from "./CheckboxInput.types";

export default function CheckboxInput({
  name,
  defaultChecked,
  label,
}: ICheckboxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label || name}
      </label>
    </div>
  );
}
