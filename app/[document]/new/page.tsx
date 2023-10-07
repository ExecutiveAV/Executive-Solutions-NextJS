// @ts-ignore
'use client'
import dynamic from "next/dynamic";
import { FC } from 'react';

import ViewPanel from "../../(components)/(ViewPanel)/ViewPanel";
import CreatorPanel from "../../(components)/(CreatorPanel)/CreatorPanel"
import Title from '../../(components)/(Title)/Title'
const RenderingPanelNoSSR = dynamic<FC>(
  () => import("../../(components)/(RenderingPanel)/RenderingPanel"),
  { ssr: false }
);

const New = ({ params }) => {
    const document:string = params.document;
    console.log(document);
    return (
        <main style={{"display": "flex"}}>
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <CreatorPanel kind={document} />
            </ViewPanel>
            <ViewPanel secondary >
                <RenderingPanelNoSSR kind={document} />
            </ViewPanel>
            
        </main>
    )
}

export default New;