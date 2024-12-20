import React from 'react';
import Items from './Items';
import './Footer.css';
import {PRODUCTS, RESOURCES, COMPANY, SUPPORT} from "./Menus";

export default function ItemsContainer() {
  return (
      <div className='items-container'>
          <Items links={PRODUCTS} title="PRODUCTS" />
          <Items links={RESOURCES} title="RESOURCES" />
          <Items links={COMPANY} title="COMPANY" />
          <Items links={SUPPORT} title="SUPPORT" />
    </div>
  )
}
