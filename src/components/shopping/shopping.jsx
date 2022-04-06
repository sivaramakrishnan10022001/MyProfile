import React from "react";
import "./shopping.css";
import CountdownTimer from "./countdowntimer";

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="shopping_wapper">
                <h1>Coming Soon</h1>
                <CountdownTimer className="sample" interval="10:3:0:10" />
            </div>

            

        )
    }
}

export default Shopping;