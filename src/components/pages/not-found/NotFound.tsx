import { Link } from "react-router-dom";
import ReturnHome from "../../UI/return-home/ReturnHome";
import styles from './notFound.module.css';

function NotFound() {
    return <main className={styles.notFound}>
        <p>Don't know what you are looking for, but it ain't here. Go <Link to='/'>home</Link></p>
        <ReturnHome />
    </main>
}

export default NotFound;