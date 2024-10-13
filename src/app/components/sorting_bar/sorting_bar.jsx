'use client'

import styles from './sorting_bar.module.css'
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
import InputRangeSlider from '../../components/input_range_slider/input_range_slider'
import { MdGridView } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useState } from 'react';

export default function sortingBar({sortingFunctionAZ, sortingFunctionZA}){

    const [priceValueMin, setPriceValueMin] = useState(50);
    const [priceValueMax, setPriceValueMax] = useState(50);

    const priceValueSetterMin = (value) => {
        setPriceValueMin(value);
    }

    const priceValueSetterMax = (value) => {
        setPriceValueMax(value)
    }


    return (
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
                <h3>Show Results</h3>
            </div>
            <div className={styles.icons}>
                <div className={styles.viewChanger}>
                    <MdGridView className={styles.gridIcon}/>
                    <BsFillGrid3X3GapFill className={styles.gridIcon}/>
                </div>
                <div className={styles.sortingChanger}>
                        <div className={styles.sortingHeading}>
                            Sort by:
                        </div>
                        <div className={styles.sortingIcons}>
                            <FcAlphabeticalSortingAz className={styles.sortIcon} onClick={sortingFunctionAZ}/>
                            <FcAlphabeticalSortingZa className={styles.sortIcon} onClick={sortingFunctionZA}/>
                        </div> 
                        
                    <div className={styles.price}>
                        <div className={styles.filterHeading}>
                            Filter by Price:
                        </div>
                        <div className={styles.filterSection}>
                            {priceValueMin}$
                            <InputRangeSlider priceValueSetterMin={priceValueSetterMin} priceValueSetterMax={priceValueSetterMax}/>
                            {priceValueMax}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}