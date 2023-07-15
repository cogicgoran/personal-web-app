import styles from './homepage.module.css'

function Homepage() {
    return <main className={styles.app}>
    <h1>Cogic Goran</h1>
    <h2>Software Developer</h2>
    <nav>
      <a href="/about">About</a>
      <a href="/career">Career</a>
      <a href="/technology">Technologies</a>
    </nav>
    </main>
}

export default Homepage
