"use client";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash, LuPenLine } from "react-icons/lu";
import { ISubmitButtonProps } from "./Buttons.types";

export function SubmitButton({
  className = "",
  text = "Submit",
  size = "lg",
}: ISubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={size}
      disabled={pending}
      className={cn("capitalize", className)}
    >
      {pending ? (
        <>
          <Spinner className="mr-2 h-4! w-4! animate-spin" />
          please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
