
const Button = ({ children, customStyle, onClick }) => {
    return (
        <section className={`button ${customStyle}`} >
            <section >{children}</section>
        </section>
    );
};

export default Button;