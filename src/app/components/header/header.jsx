import styles from './header.module.css'

export default function header() {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.navigation}>Home</div>
        <div className={styles.navigation}>Explore</div>
        <div className={styles.navigation}>Shopping Cart</div>
        <div className={styles.navigation}>Login</div>
        <div className={styles.navigation}>Sign Up</div>
    </div>
  )
}
