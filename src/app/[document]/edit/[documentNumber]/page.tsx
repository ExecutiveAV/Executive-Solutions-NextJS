'use client'

import ViewPanel from "../../../(components)/(ViewPanel)/ViewPanel";
import CreatorPanel from "../../../(components)/(CreatorPanel)/CreatorPanel"
import RenderingPanel from "../../../(components)/(RenderingPanel)/RenderingPanel";
import Title from '../../../(components)/(Title)/Title'

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseUtils/firebaseUtils";
import { setScheduleData } from "../../../redux/slices/scheduleSlice";

import { ScheduleData } from "../../../types/types"

const New = ({ params }: {params: {documentNumber: string, document: string}}) => {

    const dispatch = useDispatch();

    const { documentNumber, document } = params;

    const fetchSchedule = async (documentNumber) => {
        try {
            const documents = doc(db, document, documentNumber);
            const documentSnap = await getDoc(documents);
            console.log(documentSnap.data());
            if (documentSnap.exists()) {
                dispatch(setScheduleData(documentSnap.data() as ScheduleData));
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error(error);
        };
        
    };

    useEffect(() => {
        fetchSchedule(documentNumber);
    }, [documentNumber]);


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