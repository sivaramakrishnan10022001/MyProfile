import React from "react";
import "./countdowntimer.css";

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            hours: 0,
            minute: 0,
            seconds: 0,
        }
    }
    componentDidMount() {
        this.timerFun(this.props.interval);
    }
    timerFun = (data) => {
        let splitData = data.split(':');
        let splitData_day = splitData.length > 3 ? splitData[0] : 0;
        let splitData_hours = splitData.length > 2 ? splitData[1] : 0;
        let splitData_minute = splitData.length > 1 ? splitData[2] : 0;
        let splitData_seconds = splitData.length > 0 ? splitData[3] : 0;
        this.setState({
            day: splitData_day,
            hours: splitData_hours,
            minute: splitData_minute,
            seconds: splitData_seconds,
            DataLength: splitData.length
        }, () => {
            if (this.state.hours < 24 && this.state.minute < 60 && this.state.seconds < 60) {
                this.myInterval = setInterval(() => {
                    if (this.state.seconds != 0) {
                        this.setState({
                            seconds: this.state.seconds - 1,
                        })
                    }
                    else if (this.state.minute != 0) {
                        this.setState({
                            minute: this.state.minute - 1,
                            seconds: 59,
                        })
                    }
                    else if (this.state.hours != 0) {
                        this.setState({
                            hours: this.state.hours - 1,
                            minute: 59,
                            seconds: 59,
                        })
                    }
                    else if (this.state.day != 0) {
                        this.setState({
                            day: this.state.day - 1,
                            hours: 23,
                            minute: 59,
                            seconds: 59,
                        })
                    }
                    else if (this.state.day === 0 && this.state.hours === 0 && this.state.minute === 0 && this.state.seconds === 0) {
                        clearInterval(this.myInterval)
                    }
                }, 1000);
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div className={"timer-wapper " + this.props.className}>
                {
                    this.state.DataLength === 4 ?
                        <div className="timer-container">
                            <div className="clock">{this.state.day < 10 ? "0" + this.state.day : this.state.day}</div>
                            <div className="clock">{this.state.hours < 10 ? "0" + this.state.hours : this.state.hours}</div>
                            <div className="clock">{this.state.minute < 10 ? "0" + this.state.minute : this.state.minute} </div>
                            <div className="clock"> {this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}</div>
                        </div>
                        : this.state.DataLength === 3 ?
                            <div className="timer-container">
                                <div className="clock">{this.state.hours < 10 ? "0" + this.state.hours : this.state.hours}</div>
                                :<div className="clock">{this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}</div>
                                :<div className="clock">{this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}</div>
                            </div>
                            : this.state.DataLength === 2 ?
                                <div className="timer-container">
                                    <div className="clock">{this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}</div>
                                    :<div className="clock">{this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}</div>
                                </div>
                                : this.state.DataLength === 1 ?
                                    <div className="timer-container">
                                        <div className="clock">{this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}</div>
                                    </div>
                                    : ""
                }
            </div>
        )
    }
}

export default CountdownTimer;