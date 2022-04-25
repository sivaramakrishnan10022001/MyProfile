import React from "react";
import "./Timer.css";

class TimerTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            date: this.props.interval
        };
    }
    componentDidMount() {
        this.getTimeDifference(this.state.date);
        setInterval(() => this.getTimeDifference(this.state.date), 1000);
    }
    leadingZero(num) {
        return (num < 10 && num > 0) ? "0" + num : num;
    }
    getTimeDifference(eventDate) {
        const time = Date.parse(eventDate) - Date.parse(new Date());
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        this.setState({ days, hours, minutes, seconds });
    }
    render() {
        return (
            <div className={"timer-wapper " + this.props.className}>
                <div className="timer-container">
                    <div className="clock">
                        {this.leadingZero(this.state.days)}
                    </div>
                    <div className="clock">
                        {this.leadingZero(this.state.hours)}
                    </div>
                    <div className="clock">
                        {this.leadingZero(this.state.minutes)}
                    </div>
                    <div className="clock">
                        {this.leadingZero(this.state.seconds)}
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerTwo;