
import styles from './ViewPanel.module.css';

const ViewPanel = ({background, children}) => {
    return (
        <section className={`${styles.viewPanel} ${background ? background : ""}`} >
            {children}
        </section>
    );
};

export default ViewPanel;