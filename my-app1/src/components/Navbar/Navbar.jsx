import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a >Profile</a>
      </div>
      <div className={s.item}>
        <a>Meassages</a>
      </div>
      <div className={s.item}>
        <a href='#s'>News</a>
      </div>
      <div className={s.item}>
        <a href='#s'>Music</a>
      </div>
      <div className={s.item}>
        <a href='#s'>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;