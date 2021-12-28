import React from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">No posts yet! Go create one! 😉</p>;
  }
  return syncPosts.map(post => <Post post={post} key={post.id} />);
};

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
