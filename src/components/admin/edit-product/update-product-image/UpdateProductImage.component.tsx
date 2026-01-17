"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/common/forms/file-input/FileInput.component";
import FormContainer from "@/components/common/forms/form-container/FormContainer.component";
import { SubmitButton } from "@/components/common/forms/buttons/Buttons.component";
import IUpdateProductImageProps from "./UpdateProductImage.types";

export default function UpdateProductImage({
  action,
  children,
  image,
  name,
  text,
}: IUpdateProductImageProps) {
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded object-cover mb-4 w-50 h-50"
        priority
      />
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => setIsUpdateVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateVisible && (
        <div className="max-w-md mt-4 ">
          <FormContainer action={action}>
            {children}
            <FileInput name="image" />
            <SubmitButton size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
