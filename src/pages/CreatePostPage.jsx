import React from 'react';
import Header from '../components/Header';

const CreatePostPage = () => {
  


  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <article className="post">
          <h1>Create post</h1>
          <form action="#">
            <label htmlFor="form-title">Post title</label>
            <input id="form-title" type="text" placeholder="Post title" />
            <br />
            <label htmlFor="form-description">Post description</label>
            <textarea id="form-description" placeholder="Post description"></textarea>
            <br />
            <label htmlFor="form-content">Post content</label>
            <textarea id="form-content" placeholder="Post content"></textarea>
            <br />
            <label htmlFor="form-image">Post image</label>
            <input id="form-image" type="file" />
            <br />
            <br />
            <input type="submit" value="Create" />
          </form>
        </article>
      </div>
    </div>
  );
};

export default CreatePostPage;
