import styles from './input_range_slider.module.css'
import { useState } from 'react';

export default function input_range_slider({priceValueSetterMin, priceValueSetterMax}) {

  const [inputRanger1, setInputRanger1] = useState(50);
  const [inputRanger2, setInputRanger2] =  useState(100);

  const valueSetterMin = () => {
    priceValueSetterMin(inputRanger1)
  }

  const valueSetterMax = () => {
    priceValueSetterMax(inputRanger2);
  }

  return (
    <div className={styles.range}>
        <hr style={{width:inputRanger1-2, height:'8px', backgroundColor:'red', borderRadius:'3px', border:'1px solid grey', marginRight:-inputRanger1+3, marginLeft:'10px', zIndex:'100'}}/>
        <input type='range' min={0} max={100} step={1} onChange={(e)=>{
          setInputRanger1(e.target.value)
          valueSetterMin()
        
        }} className={styles.inputPriceRanger1}/>
        <hr style={{width:'10px', height:'8px', backgroundColor:'red', borderRadius:'3px', border:'1px solid grey', zIndex:'100'}}/>
        <input type='range' min={100} max={200} step={1} className={styles.inputPriceRanger2} onChange={(e) => {
          setInputRanger2(e.target.value);
          valueSetterMax();
        }}/>
        <hr style={{width:inputRanger2-2, height:'8px', backgroundColor:'red', borderRadius:'3px', border:'1px solid grey', marginRight:-inputRanger1+3, marginLeft:'10px', zIndex:'100'}}/>
    </div>
  )
}
