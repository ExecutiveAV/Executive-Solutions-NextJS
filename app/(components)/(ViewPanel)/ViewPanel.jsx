import styles from './ViewPanel.module.css';

const ViewPanel = ({secondary, children}) => {
    return (
        <section className={`${styles.viewPanel} ${secondary ? styles.secondary : ""}`} >
            {children}
        </section>
    );
};

export default ViewPanel;