import React from 'react';
import './TimerInput.css';

const ProgressBar = ({value}) => {
  const style = {
    background: 'green',
    height: '5px',
    width: value +'%'
  }
  return  <div style={style}></div>
}

export class TimerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: props.duration * 1000,
      value: ''
    };
    this.submit = this.submit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 50);
    console.log('Start timer', this.timerID);
  }

  componentWillUnmount() {
    console.log('End timer', this.timerID);
    clearInterval(this.timerID);
  }

  submit(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.props.process(this.state.value, this.state.time);
    this.setState({value: '', time: 0});
  }

  update(e) {
    e.preventDefault();
    this.setState({value: e.target.value})
  }

  tick() {
    this.setState((prevState, props) => {
      const time = prevState.time - 50;
      if(time > 0) { 
        return { time: prevState.time - 50 }
      }
      else {
        this.props.process(this.state.value, 0);
        return { value: '', time: 0 };
     }
    });
  }

  render() {
    return (
       <div className="timer-input">
        <ProgressBar value={0.1 * this.state.time / this.props.duration} />
        <form onSubmit={this.submit}>
            <input autoFocus onChange={this.update} value={this.state.value}/>
        </form>
      </div>
    );
  }
}

