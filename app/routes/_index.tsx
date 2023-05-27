import { LoaderFunction, V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/services/post.server";
import type { Post} from '../services/post.server'
import { Post as PostComponent } from '../components/Post'

type LoaderData = {
  posts: Post[]
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader : LoaderFunction = async () => {
  const data: LoaderData = {posts: await getPosts()}
  return json(data)
}




export default function Index() {

  const { posts } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
      {posts.map(post => (
        <li key={post.title}>

        <PostComponent header={post.title}>
          {post.body}
        </PostComponent>
        </li>
      ))}
      </ul>
    </div>
  );
}
