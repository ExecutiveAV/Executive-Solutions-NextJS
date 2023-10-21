import styles from './SideBar.module.css';

const SideBar = () => {
    const initials = "AB";
    return (
        <aside className={styles.sideBar} >
            <header className={styles.header} >
                <h1 className={styles.initials} >{initials}</h1>
            </header>
        </aside>
    )
}

export default SideBar;