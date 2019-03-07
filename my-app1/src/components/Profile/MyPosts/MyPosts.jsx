import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.content}>
      
      <div>
        My post
          <div>
          <textarea></textarea>
          <button>Add post</button>
          </div>
        <div className={s.posts}>
          <Post message='Name' likesCount='23' />
          <Post message='Hie' likesCount='3' />
          <Post message='OIIe' likesCount='234' />
          <Post message='fUUUUUck' likesCount='2' />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;