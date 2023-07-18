import styles from './layout.module.css'

interface Props {
    title: string
    subtitle?: string
    children: React.ReactNode
}

function Layout({ title, subtitle, children }: Props) {
    return (
        <>
            {title ? <h1 className={styles.title}>{title}</h1> : null}
            {subtitle ? <h2 className={styles.subtitle}>{subtitle}</h2> : null}
            <main className={styles.main}>{children}</main>
        </>
    )
}

export default Layout
