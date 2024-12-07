import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Post from '../components/post/Post'; 


type PostType = {
  _id: string;
  content: string;
  image?: string;
  userId: {
    _id: string;
    username: string;
    image: string;
  };
};

const HomePage = () => {
  const [posts, setPosts] = useState<PostType[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

 
  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log("here");
        const response = await fetch('/api/posts/getPosts', {
          method: 'GET',
          credentials: 'include', 
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data.posts); 
      } catch (err) {
        console.error(err);
        setError('Could not load posts.');
      } finally {
        setLoading(false); 
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Welcome to the HomePage</h1>
        {loading && <p>Loading posts...</p>} 
        {error && <p>{error}</p>} 
        <div>
          {posts.map((post) => (
            <Post key={post._id} post={post} /> 
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
