import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';
import '../../styles/Blog.scss';

const Blog = () => {
  return (
    <div className="blog-page">
      <Header />
      <main>
        <h1>Latest Blog Posts</h1>
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
