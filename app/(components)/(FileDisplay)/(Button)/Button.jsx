import styles from './Button.module.css';

const Button = ({ children, className, customStyle }) => {
    return (
        <section className={`${styles.button} ${customStyle ? styles[customStyle] : ""} ${className ? className : ""}`} >
            <section >{children}</section>
        </section>
    );
};

export default Button;