import styles from './Category.module.css'

const Category = ({children, size, bumper}) => {
    return (
        <section className={`${styles.category} ${bumper ? styles.bumper : ""} ${styles[size]}`}>
            {children}
        </section>
    );
};

export default Category;