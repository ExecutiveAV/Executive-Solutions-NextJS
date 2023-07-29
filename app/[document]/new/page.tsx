// @ts-ignore
'use client'

import ViewPanel from "../../(components)/(ViewPanel)/ViewPanel";
import CreatorPanel from "../../(components)/(CreatorPanel)/CreatorPanel"
import RenderingPanel from "../../(components)/(RenderingPanel)/RenderingPanel";
import Title from '../../(components)/(Title)/Title'

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
                <RenderingPanel kind={document} />
            </ViewPanel>
            
        </main>
    )
}

export default New;