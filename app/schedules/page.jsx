import Title from "../(components)/(Title)/Title";
import ViewPanel from "../(components)/(ViewPanel)/ViewPanel";
import FileDisplay from "../(components)/(FileDisplay)/FileDisplay";

const Schedules = () => {
    return (
        <main>
            {/* Action Side */}
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <FileDisplay kind="schedules" ></FileDisplay>
            </ViewPanel>
        </main>
    );
};

export default Schedules;