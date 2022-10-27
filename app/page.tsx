import Link from 'next/link';
import { use } from 'react';

async function getPosts() {
  let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  return posts.json();
}

export default function Home() {
  let posts = use(getPosts());
  return (
    <>
      <div className='flex flex-col p-4 gap-6 mx-auto'>
        <h1 className='text-3xl lg:text-4xl font-medium font-mono text-center'>
          Posts With NextJS 13
        </h1>
        <div className='grid grid-cols-1  lg:grid-cols-3 mx-auto items-center border-2 border-black p-4 rounded-lg gap-4'>
          {posts.map((post: any) => (
            <div
              className='flex flex-col border-2 border-blue-500 rounded-lg p-4 bg-gray-100'
              key={post.id}
            >
              <Link
                href={`/post/${post.id}`}
                className='text-3xl lg:text-4xl font-mono'
              >
                {post.title} - {post.id}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
