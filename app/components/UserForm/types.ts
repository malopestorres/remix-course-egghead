import type { ComponentPropsWithoutRef } from "react";

export type HttpMethod = "get" | "post" | "put" | "delete";

export type Props = ComponentPropsWithoutRef<"form"> & {
  method?: HttpMethod;
  error?: {
    formError?: string[];
    fieldErrors?: {
      email?: string[];
      password?: string[];
    };
  };
  fields?: {
    email?: string;
    password?: string;
  };
};
