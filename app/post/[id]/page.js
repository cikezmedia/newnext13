import Link from 'next/link';
import { use } from 'react';
async function getPost(id) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return post.json();
}

export default function Page({ params }) {
  const id = params.id;
  const post = use(getPost(id));

  return (
    <>
      <div className='flex flex-col p-6 gap-6'>
        <Link href='../'>
          <div className='flex flex-row items-center font-bold gap-2 text-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>
            <span>Go back</span>
          </div>
        </Link>
        <div className='flex flex-col p-6 gap-10 mx-auto pt-10 border-2 border-blue-500 rounded-lg'>
          <h1 className='text-4xl font-medium font-mono text-center'>
            {post.title}
          </h1>
          <div className='flex flex-col gap-2'>
            <div className='w-full bg-blue-500 h-0.5'></div>
            <span className='text-blue-500 font-bold text-lg'>
              POST ID: <span>{post.id}</span>
            </span>
            <div className='w-full bg-blue-500 h-0.5'></div>
          </div>
          <p className='text-lg'>{post.body}</p>
        </div>
      </div>
    </>
  );
}
