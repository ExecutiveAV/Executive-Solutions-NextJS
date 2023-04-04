'use client'
import { useCallback } from 'react';
import { useSelector } from "react-redux";

const Hero = () => {

    const invoiceNumber = useSelector((state) => state.schedule.scheduleData.invoiceNumber);\
    const venue = useSelector((state) => state.schedule.scheduleData.venue);

    const getVenueAddress = useCallback(async venue => {
        try {
            const data = await getDoc(doc(db, "venue", venue.replace(" ", "_")));
            return data.data();
        } catch (error) {
            console.error('Error fetching venue address:', error);
            return null;
        }
    }, []);

    useEffect(() => {
        const fetchVenueAddress = async () => {
            const data = await getVenueAddress(venue);
            setLocationInfo(data);
        };
    
        fetchVenueAddress();
    }, [getVenueAddress, venue]);

    return (
        <>
            <HeaderTitle />
            <Headers content={`22${(new Date().getFullYear().toString()).slice(2, 4)}_${invoiceNumber}`} />
            <Headers content={venue} />
            <Headers content={venueAddress} gray />
            <Headers content={venueCity} gray />
        </>
    );
};

export default Hero;