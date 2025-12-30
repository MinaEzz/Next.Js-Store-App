"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import type { TActionFunction } from "@/types";

const InitialState = {
  message: "",
};

export default function FormContainer({
  action,
  children,
}: {
  action: TActionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, InitialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state.message]);

  return <form action={formAction}>{children}</form>;
}
