'use client'

import ViewPanel from "../../(components)/(ViewPanel)/ViewPanel";
import CreatorPanel from "../../(components)/(CreatorPanel)/CreatorPanel"
import Title from '../../(components)/(Title)/Title'

const New = () => {
    return (
        <main style={{"display": "flex"}}>
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <CreatorPanel />
            </ViewPanel>
            <ViewPanel secondary >

            </ViewPanel>
        </main>
    )
}

export default New;