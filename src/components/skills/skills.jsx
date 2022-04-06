import React from "react";
import "./skills.css";
import work from "../download/webpic.png";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="work_content">
                <div id="work" className="work_img">
                    <img src={work} alt="work" />
                </div>

                <div id="skills" className="skills_container">
                    <div className="skill-bars">

                        <div className="bar">
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <span>javascript</span>
                            </div>
                            <div className="progress-line javascript">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <span>Reactjs</span>
                            </div>
                            <div className="progress-line Reactjs">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <span>c</span>
                            </div>
                            <div className="progress-line mysql">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <span>c++</span>
                            </div>
                            <div className="progress-line mysql">
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Skills;