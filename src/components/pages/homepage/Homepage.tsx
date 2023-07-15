import { Link } from 'react-router-dom'
import styles from './homepage.module.css'

function Homepage() {
    return <main className={styles.homepage}>
    <h1>Cogic Goran</h1>
    <h2>Software Developer</h2>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/career">Career</Link>
      <Link to="/technology">Technologies</Link>
    </nav>
    </main>
}

export default Homepage
