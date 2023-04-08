import styles from './Category.module.css'

const Category = ({children, size}) => {
    return (
        <section className={`${styles.category} ${styles[size]}`}>
            {children}
        </section>
    );
};

export default Category;