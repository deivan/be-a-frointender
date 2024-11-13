import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import './ContentZone.css'

function ContentZone() {
    return (
        <div className="contentZone">
            <LeftPanel></LeftPanel>
            <RightPanel></RightPanel>
        </div>
    );
}

export default ContentZone;