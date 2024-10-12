import styles from './sorting_bar.module.css'
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
import { MdGridView } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function sortingBar(){
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
                            <FcAlphabeticalSortingAz className={styles.sortIcon}/>
                            <FcAlphabeticalSortingZa className={styles.sortIcon}/>
                        </div> 
                        
                    <div className={styles.price}>
                        <div className={styles.filterHeading}>
                            Filter by Price:
                        </div>
                        <input type='range'/>
                    </div>
                </div>
            </div>
        </div>
    )
}