'use client'

import SearchBar from './components/searchbar/search_bar'
import styles from './page.module.css'
import Card from './components/item_card/card'
import { useState } from 'react';

export default async function Home() {



  const res = await fetch("https://fakestoreapi.com/products");
  const dataSet = await res.json();



  return (
    <div className={styles.mainDiv}>
      <SearchBar/>
      <div className={styles.cardGrid}>
        {
          dataSet.map((data)=>(<Card key={data.id} data={data}/>))
        }
      </div>
    </div>
  );
}
