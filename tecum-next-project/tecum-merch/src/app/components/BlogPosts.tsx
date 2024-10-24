import React from 'react';
import '../../styles/BlogPost.scss';

type BlogPostProps = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

const BlogPost = ({ id, title, excerpt, image, date }: BlogPostProps) => {
  return (
    <article className="blog-post">
      <img src={image} alt={title} className="blog-post__image" />
      <div className="blog-post__content">
        <h3>{title}</h3>
        <p className="blog-post__date">{date}</p>
        <p>{excerpt}</p>
        <a href={`/blog/${id}`} className="blog-post__button">Read More</a>
      </div>
    </article>
  );
};

export default BlogPost;
