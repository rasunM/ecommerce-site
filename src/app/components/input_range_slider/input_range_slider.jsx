'use client'

import styles from './input_range_slider.module.css'
import {useEffect, useState } from 'react';

export default function input_range_slider({setFilteredPrice}) {

  const [inputRanger1, setInputRanger1] = useState(0);
  const [inputRanger2, setInputRanger2] =  useState(1000);


  useEffect(()=>{
    setFilteredPrice([inputRanger1, inputRanger2])
  },[inputRanger1, inputRanger2])

  return (
    <div className={styles.mainDiv}>
      <div className={styles.display}>
        ${inputRanger1} - ${inputRanger2}
      </div>
      
      <div className={styles.range}>
        <input type='range' min={0} max={1000} step={1} value={inputRanger1} onChange={(e)=>{
          if (e.target.value<inputRanger2){
            setInputRanger1(e.target.value) 
          }           
        }} className={styles.inputPriceRanger1} />

        <hr style={{height:'8px', width:`${2*((inputRanger2-inputRanger1)/10)}px`, marginBottom: '-3px', marginTop:'-3px', position:'absolute', left:`${2*(inputRanger1/10)}px`, zIndex:100, outline:'none', backgroundColor: 'black', border:'none', borderRadius:'6px'}}/>

        <input type='range' min={0} max={1000} step={1} className={styles.inputPriceRanger2} value={1000-inputRanger2} onChange={(e) => {
          if (1000-e.target.value>inputRanger1){
            setInputRanger2(1000-e.target.value);           
          }
        }}/>
      </div>
       
    </div>
  )
}
