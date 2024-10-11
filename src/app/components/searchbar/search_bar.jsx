'use client'

import styles from './search_bar.module.css'
import { useState } from 'react'

export default function SearchBar({setUserText}) {

  const [textData, setTextData] = useState('');

  const setData = () => {
    setUserText(textData)
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputField}>
        <input 
          className={styles.input} 
          placeholder='Type Something ..' 
          onChange={(e)=>setTextData(e.target.value)}
        />           
      </div>
      <div className={styles.searchField} onClick={setData}>
        Search
      </div>
    </div>
  )
}
