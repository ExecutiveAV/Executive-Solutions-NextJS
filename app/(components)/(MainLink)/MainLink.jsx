import styles from './MainLink.module.css';
import Link from 'next/link';

const MainLink = ({children, pathTo}) => {
    return (
        <Link href={pathTo} className={styles.mainLink} >
            <p>{children}</p>
        </Link>
    );
};

export default MainLink;