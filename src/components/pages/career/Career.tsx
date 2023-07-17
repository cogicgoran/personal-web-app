import { useState } from 'react';
import styles from './career.module.css';
import classNames from 'classnames';
import IconChevron from '../../icons/IconChevron';
import ReturnHome from '../../UI/return-home/ReturnHome';

function Career() {
    const [activeExtendedView, setActiveExtendedView] = useState('');

    function toggleExtendedView(cardName: string) {
        setActiveExtendedView((prevView) => {
            if (prevView === cardName) return '';
            return cardName;
        })
    }

    return <main className={styles.career}>
        <h1>Career</h1>
        <div className={styles.cardHolder}>
            <div className={styles.card}>
                <h2>Forwardslash</h2>
                <h3>Web Developer</h3>
                <img src='/forwardslash-logo.png' />
                <button className={classNames(styles.expandableAction, {
                    [styles.expandedAction]: activeExtendedView === 'fws-intern'  
                })} onClick={toggleExtendedView.bind(null, 'fws-intern')}>View my responsibilities<IconChevron /></button>
                <div className={classNames(styles.expandable, {
                    [styles.expanded]: activeExtendedView === 'fws-intern'
                })}>
                    <span>Built small react with javascript, used publicly available APIs</span>
                    <span>Built small react apps using typescript</span>
                </div>
            </div>

            <div className={styles.card}>
                <h2>Forwardslash</h2>
                <h3>Web Developer Internship</h3>
                <img src='/forwardslash-logo.png' />
                <button className={classNames(styles.expandableAction, {
                    [styles.expandedAction]: activeExtendedView === 'fws'  
                })} onClick={toggleExtendedView.bind(null, 'fws')}>View my responsibilities<IconChevron /></button>
                <div className={classNames(styles.expandable, {
                    [styles.expanded]: activeExtendedView === 'fws'
                })}>
                    <span>Built web applications(React, Typescript)</span>
                    <span>Built web applications(NextJS, Typescript)</span>
                    <span>Built APIs(node, express, nest)</span>
                    <span>Worked on internal tools(node)</span>
                    <span>Worked with Docker</span>
                    <span>Worked with cloud solution provider services(AWS, Digital Ocean)</span>
                </div>
            </div>

            <div className={styles.card}>
                <h2>Vega IT</h2>
                <h3>Front-end internship</h3>
                <img src='/vegait-logo.png' />
                <button className={classNames(styles.expandableAction, {
                    [styles.expandedAction]: activeExtendedView === 'vega'  
                })} onClick={toggleExtendedView.bind(null, 'vega')}>View my responsibilities<IconChevron /></button>
                <div className={classNames(styles.expandable, {
                    [styles.expanded]: activeExtendedView === 'vega'
                })}
                >
                    <span>Create reusable page template using raw html, css, js</span>
                </div>
            </div>

        </div>
        <ReturnHome />
    </main>
}

export default Career;