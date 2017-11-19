import React from 'react';

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: props.duration * 1000
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 50);
    console.log('Start timer', this.timerID);
  }

  componentWillUnmount() {
    console.log('End timer', this.timerID);
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => {
      const time = prevState.time - 50;
      if(time > 0) { 
        return { time: prevState.time - 50 }
      }
      else {
        this.props.done();
        return { time: props.duration * 1000 }
      }
    });
  }

  render() {
    return (
      <div>{this.props.name}: {this.state.time}</div>
    );
  }
}

