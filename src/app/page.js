'use client'

import SearchBar from './components/searchbar/search_bar'
import styles from './page.module.css'
import Card from './components/item_card/card'
import { useState, useEffect } from 'react'

export default function Home() {

  const [dataSet, setDataSet] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [userText, setUserText] = useState('');


  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((data)=>data.json()).then((json)=>{
    setDataSet(json) 
    setFilteredData(json)
  });
    
  },[])

  const getValueFromSearchBar = (value) => {
    setUserText(value);
  }

  useEffect(()=>{
    const filter = dataSet.filter((e) => e.title.toLowerCase().includes(userText.toLowerCase()));
    setFilteredData(filter);   
  },[userText])

  return (
    <div className={styles.mainDiv}>
      <SearchBar setUserText={getValueFromSearchBar}/>
      <div className={styles.cardGrid}>
        {
          filteredData.map((data) => (
            <Card key={data.id} data={data} />
          ))
        }
      </div>
    </div>
  );
}
