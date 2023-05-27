import type { ComponentPropsWithoutRef } from "react";

export type HttpMethod = "get" | "post" | "put" | "delete";

export type Props = ComponentPropsWithoutRef<"form"> & {
  method?: HttpMethod;
  error?: {
    formError?: string[];
    fieldErrors?: {
      title?: string[];
      body?: string[];
    };
  };
  fields?: {
    title?: string;
    body?: string;
  };
};
