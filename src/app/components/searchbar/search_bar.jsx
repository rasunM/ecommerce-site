'use client'

import styles from './search_bar.module.css'
import { useState } from 'react'

export default function search_bar() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearch = () => {
    console.log(inputValue);
  }

  return (
    <div className={styles.mainDiv}>
        <div className={styles.inputField}>
            <input className={styles.input} placeholder='Type Something ..' onChange={handleInputChange}/>           
        </div>
        <div className={styles.searchField} onClick={handleSearch}>
            Search
        </div>
    </div>
  )
}
