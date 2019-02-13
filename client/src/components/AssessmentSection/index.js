import React from "react";
import "./styles.css";

class AssessmentSection extends React.Component {
    render() {
        return (
            <div className="assessment-div">
                <h3 className="assessment-h3">How are your math skills? Take our <a href="/assessment">assessment</a> now!</h3>
            </div>
        )
    }

}

export default AssessmentSection;