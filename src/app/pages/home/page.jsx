import styles from './home.module.css'
import Header from '../../components/header/header'

export default function Home() {
  return (
    <div className={styles.mainDiv}>
        <Header/>
        Home Page
    </div>
  )
}
