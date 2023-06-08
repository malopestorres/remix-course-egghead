import { FormProps } from "@remix-run/react";


export type HttpMethod = "get" | "post" | "put" | "delete";

export type Props = FormProps & {
  //method?: HttpMethod;
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
