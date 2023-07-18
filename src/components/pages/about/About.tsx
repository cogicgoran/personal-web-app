import styles from './about.module.css'
import ReturnHome from '../../UI/return-home/ReturnHome'

function About() {
    return (
        <main className={styles.about}>
            <h1>About me</h1>
            <p>Hmm, looks like i have no inspiration, have some lorem ipsum</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis repellat necessitatibus illo molestias tempore,
                ratione similique illum maiores deleniti delectus omnis, quaerat
                vitae totam est animi doloremque! Qui, tenetur nemo.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                veritatis veniam quisquam cupiditate vel, repudiandae officiis
                labore, rem magni pariatur ratione laudantium voluptatum?
                Reprehenderit blanditiis atque soluta non labore dignissimos!
            </p>
            <ReturnHome />
        </main>
    )
}

export default About
