import styles from './SearchBar.module.css'
// import { useState } from "react";
import MagGlass from "./(MagGlass)/MagGlass";

const SearchBar = () => {
    // const [searchBarValue, setSearchBarValue] = useState("");
    // console.log(searchBarValue);
    const searchBarValue = "";

    return (
        <section className={styles.searchbar} >
           <input className={styles.bar} type="text" placeholder='Search' />
           {searchBarValue === "" ? <MagGlass className={styles.magGlass} /> : null }
        </section>
    );
};

export default SearchBar;