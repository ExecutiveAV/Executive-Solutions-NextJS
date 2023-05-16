'use client'

import Providers from "../../(components)/(Provider)/Provider";

import ViewPanel from "../../(components)/(ViewPanel)/ViewPanel";
import CreatorPanel from "../../(components)/(CreatorPanel)/CreatorPanel"
import RenderingPanel from "../../(components)/(RenderingPanel)/RenderingPanel";
import Title from '../../(components)/(Title)/Title'

const New = () => {
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