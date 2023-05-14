'use client'

import { useEffect, useState } from "react";

import Hero from "./(Hero)/Hero";
import Body from "./(Body)/Body";
import styles from './RenderingPanel.module.css';

import { usePDF, PDFViewer  } from "@react-pdf/renderer";

import SchedulePDF from "../(pdfs)/(SchedulePDF)/SchedulePDF"

import {
  daysSelector, companyNameSelector, scheduleNumberSelector, venueNameSelector, venueAddressSelector, venueAddress2Selector, venueCitySelector, venueStateSelector, venueZipSelector, companySelector, scheduleDataSelector
} from "../../redux/selectors/scheduleSelectors";

import { useSelector } from "react-redux";

const RenderingPanel = () => {
  
  try {

    const [document, setDocument] = useState(null);

    const days = useSelector(daysSelector);
    const companyName = useSelector(companyNameSelector);
    const scheduleNumber = useSelector(scheduleNumberSelector);
    const venueName = useSelector(venueNameSelector);
    const venueStreet = useSelector(venueAddressSelector);
    const venueStreet2 = useSelector(venueAddress2Selector);
    const venueCity = useSelector(venueCitySelector);
    const venueState = useSelector(venueStateSelector);
    const venueZip = useSelector(venueZipSelector);

    const [instance, updateInstance] =  usePDF(
      {
        document: <SchedulePDF days={days} companyName={companyName} scheduleNumber={scheduleNumber} venueName={venueName} venueStreet={venueStreet} venueStreet2={venueStreet2} venueCity={venueCity} venueState={venueState} venueZip={venueZip} />,
      }
    );
    
    useEffect(() => {
      updateInstance(<SchedulePDF days={days} companyName={companyName} scheduleNumber={scheduleNumber} venueName={venueName} venueStreet={venueStreet} venueStreet2={venueStreet2} venueCity={venueCity} venueState={venueState} venueZip={venueZip} />)
      console.count( companyName)
      setDocument(<SchedulePDF days={days} companyName={companyName} scheduleNumber={scheduleNumber} venueName={venueName} venueStreet={venueStreet} venueStreet2={venueStreet2} venueCity={venueCity} venueState={venueState} venueZip={venueZip} />)
    }, [days, companyName, scheduleNumber, venueName, venueStreet, venueStreet2, venueCity, venueState, venueZip]);

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;
    console.log(instance)

    return (
      <div>
        <Hero />
        <Body />
      </div>
    );
  } catch (error) {
    
  }
};

export default RenderingPanel;