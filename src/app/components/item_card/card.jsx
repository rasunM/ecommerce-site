import styles from './card.module.css'
import { FaStar } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";


export default function card({data, widthNormalOrNot}) {
  return (
    <div className={styles.card} style={{width: widthNormalOrNot}}>
      <img src={data.image} className={styles.image}/>
      <div className={styles.textSection}>
        <div className={styles.reviesAndPrice}>
          <div className={styles.reviews}>
            reviews
            <FaStar className={styles.star}/>
            <FaStar className={styles.star}/>
            <FaStar className={styles.star}/>
            <FaStar className={styles.star}/>
            <FaStar className={styles.star}/>
          </div>
          <div className={styles.price}>
            ${data.price}
          </div>
        </div>
        <div className={styles.itemName}>
          <h1>{data.title}</h1>
        </div>
        
        <div className={styles.description}>
          {data.description}
        </div>
        <div className={styles.seeMoreButon}>see more ...</div>
      </div>
      <div className={styles.button}>
        Add to cart <FaCartArrowDown />
      </div>
    </div>
  )
}
