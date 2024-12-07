import React from 'react';

type PostProps = {
  post: {
    _id: string;
    content: string;
    image?: string;
    userId: {
      _id: string;
      username: string;
      image: string;
    };
  };
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <div
        className="post-header"
        data-user-id={post.userId._id}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={post.userId.image}
          alt={`${post.userId.username}'s profile picture`}
          className="author-image"
        />
        <span className="author-name">{post.userId.username}</span>
      </div>
      <p className="post-content">{post.content}</p>
      {post.image && <img src={post.image} alt="Post image" className="post-image" />}
      <div className="post-footer">
        <button>Like</button>
        <button>Comments</button>
      </div>
    </div>
  );
};

export default Post;
