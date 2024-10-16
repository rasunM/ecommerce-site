import styles from './sorting_bar.module.css'
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
import InputRangeSlider from '../../components/input_range_slider/input_range_slider'
import { MdGridView } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useEffect, useState } from 'react';

export default function sortingBar({sortingFunctionAZ, sortingFunctionZA, trackFilteredPrice, sizeGenerator}){

    const [normalWidth, setNormalWidth] = useState(false);

    useEffect(()=>{
        sizeGenerator(normalWidth)
        console.log(normalWidth, 'fjdskfjl')
    },[normalWidth])

    return (
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
                <h3>Show Results</h3>
            </div>
            <div className={styles.icons}>
                <div className={styles.viewChanger}>
                    <MdGridView className={styles.gridIcon} onClick={()=>{setNormalWidth(false)}}/>
                    <BsFillGrid3X3GapFill className={styles.gridIcon} onClick={()=>{setNormalWidth(true)}}/>
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
                        <InputRangeSlider className={styles.filterSection} setFilteredPrice={trackFilteredPrice}/>
                    </div>
                </div>
            </div>
        </div>
    )
}