import * as React from 'react';
import CountdownUnit from "./CountdownUnit";

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      christmas: "2018-12-25",
      interval: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount = () => {
    const interval = setInterval(this.calculateTime, 1000);
    this.setState({interval});
  }

  calculateTime = () => {
    const totalTime = Date.parse(this.state.christmas) - Date.parse(new Date());

    this.setState((prevState) => ({
      ...prevState,
      seconds: Math.floor( (totalTime/1000) % 60 ),
      minutes: Math.floor( (totalTime/1000/60) % 60 ),
      hours: Math.floor( (totalTime/(1000*60*60)) % 24 ),
      days: Math.floor( totalTime/(1000*60*60*24) )
    }));
  }

  render() {
    const {days, hours, minutes, seconds} =  this.state;
    return (
        <div className="countdown">
            <h1>Time Until Christmas!</h1>
            <CountdownUnit value={days} label="Days" />
            <CountdownUnit value={hours} label="Hours" />
            <CountdownUnit value={minutes} label="Minutes" />
            <CountdownUnit value={seconds} label="Seconds" />
        </div>
    );
  }
}

export default Countdown;
