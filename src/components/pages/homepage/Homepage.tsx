import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import styles from './homepage.module.css'

function Homepage() {
    return (
        <Layout title="Cogic Goran" subtitle="Software Developer">
            <nav className={styles.nav}>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
                <Link to="/technology">Technologies</Link>
            </nav>
        </Layout>
    )
}

export default Homepage
