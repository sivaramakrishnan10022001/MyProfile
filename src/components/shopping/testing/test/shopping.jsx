import React from "react";
import "./shopping.css";
// import CountdownTimer from "./countdowntimer";
import TimerTwo from "./TimerTwo";
class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="shopping" className="shopping_wapper">
                <h1>Shopping Coming Soon</h1>
                {/* <CountdownTimer className="sample" interval="10:3:0:10" /> */}
                <TimerTwo className="sample" interval="4 20 2023" />
            </div>
        )
    }
}

export default Shopping;