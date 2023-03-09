'use client'
const Dots = ({ customClass }) => {
    console.log("customClass: ", customClass)
    return(
        <div className={customClass} >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="32" height="16" fill="#737272" color="#737272" stroke="#737272" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <circle cx="-3.5" cy="8" r="3.4"/>
            <circle cx="8" cy="8" r="3.4"/> <circle cx="19.5" cy="8" r="3.4"/>
            </svg>
        </div>
    );
};

export default Dots;