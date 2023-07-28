'use client'

import { ReactNode, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../../../utils/firebaseUtils/firebaseUtils";

import Hero from "./(Hero)/Hero";
import Body from "./(Body)/Body";
import styles from './RenderingPanel.module.css';

import { usePDF, PDFViewer  } from "@react-pdf/renderer";

import SchedulePDF from "../(pdfs)/(SchedulePDF)/SchedulePDF"

import {
  daysSelector, companyNameSelector, scheduleNumberSelector, venueNameSelector, venueAddressSelector, venueAddress2Selector, venueCitySelector, venueStateSelector, venueZipSelector, companySelector, scheduleDataSelector, companyInitialsSelector
} from "../../redux/selectors/scheduleSelectors";

import { useSelector } from "react-redux";
import { ScheduleData, SchedulePDFProps } from "../../types/types";

const RenderingPanel = (): ReactNode => {
  
  try {

    const [document, setDocument] = useState(null);

    const days = useSelector(daysSelector);
    const companyName = useSelector(companyNameSelector);
    const companyInitials = useSelector(companyInitialsSelector);
    const scheduleNumber = useSelector(scheduleNumberSelector);
    const scheduleData = useSelector(scheduleDataSelector);
    const venueName = useSelector(venueNameSelector);
    const venueStreet = useSelector(venueAddressSelector);
    const venueStreet2 = useSelector(venueAddress2Selector);
    const venueCity = useSelector(venueCitySelector);
    const venueState = useSelector(venueStateSelector);
    const venueZip = useSelector(venueZipSelector);

    //function to get the last two digits of the current year
    const year = new Date().getFullYear().toString().slice(-2);

    const [instance, updateInstance] =  usePDF(
      {
        document: <SchedulePDF days={days} companyName={companyName} scheduleNumber={scheduleNumber} venueName={venueName} venueStreet={venueStreet} venueStreet2={venueStreet2} venueCity={venueCity} venueState={venueState} venueZip={venueZip} />,
      }
    );
    
    useEffect(() => {
      updateInstance();
    }, [days, companyName, scheduleNumber, venueName, venueStreet, venueStreet2, venueCity, venueState, venueZip]);

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {instance.error}</div>;

    const saveScheduleToFirebaseDatabase = async (year:string, scheduleNumber:number, companyInitials:string, scheduleData:ScheduleData) => {
      try {
        const dbRef = doc(db, "schedules", `22${year}_${scheduleNumber < 10 ? `0${scheduleNumber}` : scheduleNumber}-${companyInitials}`);
        const docSnap = await getDoc(dbRef);
    
        if (!docSnap.exists()) {
          await setDoc(dbRef, scheduleData);
          alert("Schedule saved successfully!");
        } else {
          alert("Document already exists.");
        }
      } catch (error) {
        console.error("Error writing document: ", error);
        alert("Error saving schedule. Please try again.");
      }
    };    

    return (
      <section className={styles.renderingPanel}>
        <section className={styles.renderingPreview}>
          <Hero />
          <Body />
        </section>
        <section className={styles.buttons} >
          <section className={styles.downloadButton}>
            <a href={instance.url as undefined | string} download={`Schedule 2223_${scheduleNumber}`} className={styles.buttonContent} >Download</a>
          </section>
          <section className={styles.downloadButton}>
            <p onClick={e => saveScheduleToFirebaseDatabase(year, scheduleNumber, companyInitials, scheduleData)} className={styles.buttonContent} >Save</p>
          </section>
        </section>

      </section>
    )
  } catch (error) {
    console.error(error);
  }
};

export default RenderingPanel;