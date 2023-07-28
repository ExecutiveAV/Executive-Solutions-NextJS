import styles from './ViewPanel.module.css';

interface ViewPanelProps {
    secondary?: boolean;
    children: React.ReactNode;
}

const ViewPanel = ({secondary, children}:ViewPanelProps) => {
    return (
        <section className={`${styles.viewPanel} ${secondary ? styles.secondary : ""}`} >
            {children}
        </section>
    );
};

export default ViewPanel;