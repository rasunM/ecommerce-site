'use client'

import SearchBar from '../../components/searchbar/search_bar'
import Header from '../../components/header/header'
import SortingBar from '../../components/sorting_bar/sorting_bar'
import styles from './explore.module.css'
import Card from '../../components/item_card/card'
import { useState, useEffect } from 'react'

export default function Home() {

  const [dataSet, setDataSet] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [userText, setUserText] = useState('');
  const [priceRange, setPriceRange] = useState([0,1000]);
  const [isWidthOfTheCardNormal, setIsWidthOfTheCardNormal] = useState(true);

  // check whether the width is normal or not
  const widthFinder = (value) => {
    setIsWidthOfTheCardNormal(value);
  }



  // filter according to the price
  const priceFilter = (value) => {
    setPriceRange(value)
  }

  // sort in acceding order
  const sortingFunctionAZ = () => {
    const sortedData = [...dataSet].sort((a, b) => a.title.localeCompare(b.title));
    setFilteredData(sortedData);
  }

  // sort in descending order
  const sortingFuctionZA = () => {
    const sortedData = [...dataSet].sort((a, b) => b.title.localeCompare(a.title));
    setFilteredData(sortedData);
  }
  


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

  // filter the data according the set price 
  useEffect(() => {
    const filter = dataSet.filter((e) => e.price>=priceRange[0] & e.price<priceRange[1])
    setFilteredData(filter)
  }, [priceRange])

  return (
    <div className={styles.mainDiv}>
      <Header/>
      <h1 className={styles.heading}>E-Commerce Application</h1>
      <SearchBar setUserText={getValueFromSearchBar}/>
      <SortingBar sortingFunctionAZ={sortingFunctionAZ} sortingFunctionZA={sortingFuctionZA} trackFilteredPrice={priceFilter} sizeGenerator={widthFinder}/>
      <div className={styles.cardGrid}>
        {
          filteredData.map((data) => (
            <Card key={data.id} data={data} widthNormalOrNot={isWidthOfTheCardNormal?'290px':'390px'}/>
          ))
        }
      </div>
    </div>
  );
}
