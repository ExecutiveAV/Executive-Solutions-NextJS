import styles from './Headers.module.css';

const Headers = ( { content, gray } ) => {
    return (
        <p className={`${styles.headers} ${gray ? styles.gray : ""}`} >{content}</p>
    );
};

export default Headers;