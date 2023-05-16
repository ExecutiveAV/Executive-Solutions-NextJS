'use client'

import Providers from "../../../(components)/(Provider)/Provider";

import ViewPanel from "../../../(components)/(ViewPanel)/ViewPanel";
import CreatorPanel from "../../../(components)/(CreatorPanel)/CreatorPanel"
import RenderingPanel from "../../../(components)/(RenderingPanel)/RenderingPanel";
import Title from '../../../(components)/(Title)/Title'

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseUtils/firebaseUtils";
import { setScheduleData } from "../../../redux/slices/scheduleSlice";

const New = ({ params }) => {

    const dispatch = useDispatch();
    const scheduleNumber = params.schedule;


    const fetchSchedule = async (scheduleNumber) => {
        try {
            const schedule = doc(db, "schedules", scheduleNumber);
            const scheduleSnap = await getDoc(schedule);
            console.log(scheduleSnap.data());
            if (scheduleSnap.exists()) {
                dispatch(setScheduleData(scheduleSnap.data()));
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error(error);
        };
        
    };

    useEffect(() => {
        fetchSchedule(scheduleNumber);
    }, [scheduleNumber]);


    return (
        <main style={{"display": "flex"}}>
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <CreatorPanel />
            </ViewPanel>
            <ViewPanel secondary >
                <RenderingPanel />
            </ViewPanel>
        </main>
            
    )
}

export default New;