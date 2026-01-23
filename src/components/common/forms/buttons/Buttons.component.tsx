"use client";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash, LuPenLine } from "react-icons/lu";
import { IActionButtonProps, ISubmitButtonProps } from "./Buttons.types";
import { SignInButton } from "@clerk/nextjs";

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

export function ActionButton({
  className = "",
  actionType,
}: IActionButtonProps) {
  const { pending } = useFormStatus();

  function renderIcon() {
    switch (actionType) {
      case "edit":
        return <LuPenLine className="w-4! h-4!" />;
      case "delete":
        return <LuTrash className="w-4! h-4!" />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  }

  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"link"}
      className={cn("p-2 cursor-pointer", className)}
    >
      {pending ? <Spinner className="h-4! w-4! animate-spin" /> : renderIcon()}
    </Button>
  );
}

export function SignInCardButton() {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size={"icon"}
        variant={"outline"}
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
}

export function CardSubmitButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"outline"}
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <Spinner className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
}
