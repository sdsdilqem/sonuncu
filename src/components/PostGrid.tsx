import React from 'react';
import Post from './Post';
import type { Post as PostType } from '../types/post';

interface PostGridProps {
  posts: PostType[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[5px] sm:gap-4 max-w-7xl mx-auto">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}