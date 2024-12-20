import React from 'react';
import './Footer.css';

export default function Items({links, title}) {
  return (
    <ul>
      <h1 className='title-items'>{title}</h1>
      {
        links.map((link) => (
          <li key={link.name}>
            <a className='links' href={link.link}>{link.name}</a>
          </li>
        ))
      }
    </ul>
  )
}
