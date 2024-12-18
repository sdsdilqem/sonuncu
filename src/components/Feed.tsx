import React from 'react';
import PostGrid from './PostGrid';
import CreatePostButton from './create-post/CreatePostButton';
import CategoriesBar from './categories/CategoriesBar';
import { samplePosts } from '../data/samplePosts';

export default function Feed() {
  return (
    <div className="mx-auto py-6 px-1 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <CategoriesBar />
        <CreatePostButton />
      </div>
      <PostGrid posts={samplePosts} />
    </div>
  );
}