import { Form } from '@remix-run/react'
import { Button } from '../Button';
import type { Props } from './types';



function PostForm({error, fields, method='post', 
...props
}: Props/* & { method?: HttpMethod }*/) {
  return (
    <Form replace className="flex flex-col gap-4"  method={method} {...props}>
    <div className="flex flex-col">
      <label htmlFor="title" className="mb-2 text-gray-600">
        Title
      </label>
      <input
        className="p-4"
        name="title"
        defaultValue={fields?.title}
        placeholder="Title of your post"
      />
      
      {error?.fieldErrors?.title && (
          <p className="text-red-500">{error.fieldErrors.title}</p>
        )}
  
    </div>
    <div className="mb-4 flex flex-col">
      <label htmlFor="body" className="mb-2 text-gray-600">
        Body
      </label>
      <textarea
      defaultValue={fields?.body}
        className="p-4"
        name="body"
        placeholder="Write something amazing"
      />
        {error?.fieldErrors?.body && (
          <p className="text-red-500">{error.fieldErrors.body}</p>
        )}
    </div>
    {error?.formError && <p className="text-red-500">{error.formError}</p>}
   <Button
   type="submit"
   className="transition rounded text-blue-700
   font-bold py-4 px-6 transparent hover:bg-gray-100"
   >
    Create Post
   </Button>
  </Form>
  )
}

export default PostForm