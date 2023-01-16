import Button from "../(Button)/Button";
import Arrow from './(Arrow)/Arrow';

const FilterButton = () => {
    return (
        <Button >
            <section className='filterButton' >
                <section className='filterButton__content' >
                    <p className='filterButton__content__text' >Filter</p>
                    <Arrow className='filterButton__content__arrow' />
                </section>
            </section>
        </Button>
        
    );
};

export default FilterButton;