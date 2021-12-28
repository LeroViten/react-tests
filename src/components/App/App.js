import React from 'react';
import FetchedPosts from '../FetchedPosts/FetchedPosts';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';

export default function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts posts={[]} />
        </div>
        <div className="col">
          <h2>Async posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}
