import { Link } from 'react-router-dom'
import IconHome from '../../icons/IconHome'
import styles from './returnHome.module.css'

function ReturnHome() {
    return (
        <div className={styles.returnHome}>
            <Link to="/">
                <IconHome />
            </Link>
        </div>
    )
}

export default ReturnHome
