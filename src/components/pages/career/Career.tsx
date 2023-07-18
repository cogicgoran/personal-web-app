import { useState } from 'react'
import styles from './career.module.css'
import classNames from 'classnames'
import IconChevron from '../../icons/IconChevron'
import ReturnHome from '../../UI/return-home/ReturnHome'
import Layout from '../../layout/Layout'
import { careerData } from '../../../data/career'

function Career() {
    const [activeExtendedView, setActiveExtendedView] = useState('')

    function toggleExtendedView(cardName: string) {
        setActiveExtendedView((prevView) => {
            if (prevView === cardName) return ''
            return cardName
        })
    }

    return (
        <Layout title="Career">
            <div className={styles.cardHolder}>
                {careerData.map((careerJobData) => (
                    <CareerCard
                        {...careerJobData}
                        onViewToggle={toggleExtendedView}
                        activeExtendedView={activeExtendedView}
                    />
                ))}
            </div>
            <ReturnHome />
        </Layout>
    )
}

interface CareerCardProps {
    id: string
    title: string
    subtitle: string
    imgSource: string
    onViewToggle: Function
    activeExtendedView: string
    responsibilities: Array<string>
}

function CareerCard({
    id,
    title,
    subtitle,
    imgSource,
    responsibilities,
    onViewToggle,
    activeExtendedView,
}: CareerCardProps) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <img src={imgSource} />
            <button
                className={classNames(styles.expandableAction, {
                    [styles.expandedAction]: activeExtendedView === id,
                })}
                onClick={onViewToggle.bind(null, id)}
            >
                {activeExtendedView !== id ? 'View' : 'Hide'} my
                responsibilities
                <IconChevron />
            </button>
            <div
                className={classNames(styles.expandable, {
                    [styles.expanded]: activeExtendedView === id,
                })}
            >
                {responsibilities.map((responsibility) => (
                    <span>{responsibility}</span>
                ))}
            </div>
        </div>
    )
}

export default Career
