import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdcntp459e8dVjk7Q0VbUMOFDqtIpQ9NCpm5VUCXtz8ETkrq4" alt="" />
      https://i.pinimg.com/originals/61/8b/58/618b583088656035bedd9b8b8021df79.jpg
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>

  );
}

export default Post;