import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://bigmemes.funnyjunk.com/thumbnails/comments/I+love+costume+swap+fan+art+also+does+anyone+know+_05237975413996d621b80afc9dac6cda.png" alt="" />
      </div>
      <div>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/972104754098756379/449AB80F0762EB5DFFFAF5E9AC7BC3E6E64016B9/" alt="" />
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;