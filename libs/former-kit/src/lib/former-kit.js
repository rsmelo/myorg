import React from 'react';
import style from './former-kit.module.css';
console.log('style', style)
export function FormerKit(props) {
  return (
    <div>
      <h1 className={style.title}>Welcome to former-kit!{style.title}</h1>
    </div>
  );
}
export default FormerKit;
