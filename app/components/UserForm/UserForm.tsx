import { Form } from '@remix-run/react';
import { useNavigation } from "@remix-run/react";
import { Button } from '../Button';
import type { Props } from './types';



function UserForm({error, fields, children, method = 'post', ...props}: Props) {

  const navigation = useNavigation();


  return (
    <Form method="post" className="flex flex-col gap-4" {...props}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="mb-2 text-slate-600">
          Email
        </label>
        <input
          defaultValue={fields?.email}
          type="email"
          name="email"
          className="p-4 border border-gray-200 rounded"
          autoComplete="user-name"
        />
        {error?.fieldErrors?.email && (
          <p className="text-red-500">{error?.fieldErrors?.email}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="mb-2 text-slate-600">
          Password
        </label>
        <input
          defaultValue={fields?.password}
          type="password"
          name="password"
          className="p-4 border border-gray-200 rounded"
          autoComplete="current-password"
        />
        {error?.fieldErrors?.password && (
          <p className="text-red-500">{error?.fieldErrors?.password}</p>
        )}
      </div>
    <Button
    type="submit"
    disabled={navigation.state !== "idle"}
    >
{  navigation.state === "submitting"
      ? "Login in..."
    : "Login"
    }
    </Button>
      {error?.formError && <p className="text-red-500">{error?.formError}</p>}
    </Form>
  )
}

export default UserForm
