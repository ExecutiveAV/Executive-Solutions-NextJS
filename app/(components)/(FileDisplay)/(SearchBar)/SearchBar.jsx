
// import { useState } from "react";
import MagGlass from "./(MagGlass)/MagGlass";

const SearchBar = () => {
    // const [searchBarValue, setSearchBarValue] = useState("");
    // console.log(searchBarValue);
    const searchBarValue = "";

    return (
        <section className='searchbar' >
           <input className='searchbar__bar' type="text" placeholder='Search' />
           {searchBarValue === "" ? <MagGlass className='searchbar__magGlass' /> : null }
        </section>
    );
};

export default SearchBar;