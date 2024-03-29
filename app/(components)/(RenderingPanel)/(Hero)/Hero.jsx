'use client'
import HeaderTitle from './(HeaderTitle)/HeaderTitle';
import Headers from './(Headers)/Headers';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { scheduleNumberSelector, venueSelector, companySelector } from '../../../redux/selectors/scheduleSelectors';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../../utils/firebaseUtils/firebaseUtils';

const Hero = () => {
    const scheduleNumber = useSelector(scheduleNumberSelector);
    const venue = useSelector(venueSelector);
    const client = useSelector(companySelector);

    const [venueAddress, setVenueAddress] = useState('');
    const [venueCity, setVenueCity] = useState('');

    const currentYear = (new Date().getFullYear().toString()).slice(2, 4);

    const validateVenueData = (data) => {
        if (!data) {
        return false;
        }

        const requiredFields = ['state', 'city', 'street', 'zipCode'];
        for (const field of requiredFields) {
        if (!data.hasOwnProperty(field) || data[field] === null || data[field] === '') {
            return false;
        }
        }

        return true;
    };

    const getVenueAddress = useCallback(async venue => {
        if (!venue || typeof venue !== 'string') {
        console.error('Invalid venue:', venue);
        return null;
        }

        try {
        const data = await getDoc(doc(db, "venue", venue.replace(" ", "_")));
        if (!data.exists) {
            console.error('Venue document not found:', venue);
            return null;
        }

        const venueData = data.data();
        if (!validateVenueData(venueData)) {
            console.error('Invalid venue data:', venueData);
            return null;
        }

        return venueData.venueAddress;
        } catch (error) {
        console.error('Error fetching venue address:', error);
        return null;
        }
    }, []);

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        const fetchVenueAddress = async () => {
            const data = await getVenueAddress(venue.venueName);
            if (isMounted.current && data) {
                setVenueAddress(`${data.street}`);
                setVenueCity(`${data.city}, ${data.state} ${data.zipCode}`);
            }
        };

        fetchVenueAddress();

        return () => {
        isMounted.current = false;
        };
    }, [getVenueAddress, venue]);

    return (
        <>
            <HeaderTitle client={client.companyName} />
            <Headers content={`22${currentYear}_${scheduleNumber < 10 ? `0${scheduleNumber}` : scheduleNumber}`} />
            {venue.venueName ? <Headers content={venue.venueName} /> : <Headers content={"Venue"} />}
            {venue.venueAddress ? <Headers content={venue.venueAddress} gray /> : <Headers content={"Address"} gray />}
            {venue.venueCity ? <Headers content={venue.venueCity} gray /> : <Headers content={"City, State Zip"} gray />}
        </>
    );
};

export default Hero;