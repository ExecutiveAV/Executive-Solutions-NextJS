import Hero from "./(Hero)/Hero";
import Body from "./(Body)/Body";
import styles from './RenderingPanel.module.css';

const RenderingPanel = () => {
    return (
        <section className={styles.renderingPreview}>
            <Hero ></Hero>
            <Body ></Body>
        </section>
    );
};

export default RenderingPanel;