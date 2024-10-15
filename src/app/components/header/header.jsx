import styles from './header.module.css'
import Link from 'next/link'

export default function header() {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.navigation}><Link href={'/pages/home'} className={styles.link}>Home</Link></div>
        <div className={styles.navigation}><Link href={'/pages/explore'} className={styles.link}>Explore</Link></div>
        <div className={styles.navigation}>Shopping Cart</div>
        <div className={styles.navigation}>Login</div>
        <div className={styles.navigation}>Sign Up</div>
    </div>
  )
}
