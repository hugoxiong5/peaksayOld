import React from 'react';
import './Game.css';
import { TimerInput } from './TimerInput';

const GameArea = ({ title, history, left, right, process }) => (
  <div>
    <h1>{title}</h1>
     <h2>Dialogue</h2>
     <table>
     <tbody>
     {left.map((d,i) => 
       <tr key={i}><td>{d}</td><td>{right[i]}</td></tr>)}
     </tbody>
     </table>
     <h2>Your answers</h2>
     <table>
     <tbody>
     {history.map((d,i) => 
       <tr key={i}><td>{left[i]}</td><td>{d}</td></tr>)}
     </tbody>
     </table>
  </div>
)

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: props.title,
      left: props.lines.filter((d, i) => (!(i % 2) ? d: 0)),
      right: props.lines.filter((d, i) => ((i % 2) ? d: 0)),
      history: [],
      showInput: true
    }
    this.end = this.end.bind(this);
    this.process = this.process.bind(this);
  }

  end(e) {
    e.preventDefault();
    document.location = "/";
  }

  process(value, time) {
    console.log('process', value, time);
    this.setState((prevState, props) => {
      return {
        history: prevState.history.concat(`${value} (${time})`),
        showInput: false
      }
    });
    if(this.state.history.length < this.state.left.length - 1 ) {
      setTimeout(() => { this.setState({showInput: true})}, 1000); 
    }
  }

  render() {
    return (
      <div className="game">
        <header>Header</header>
        <main>
        <GameArea title={this.state.title} history={this.state.history} left={this.state.left} right={this.state.right} showInput={this.state.showInput} /> 
        </main>
        <footer>
        {this.state.showInput ?  <TimerInput duration={10} process={this.process}/> : ''}
        <button className="end" onClick={this.end}>END GAME</button>
        </footer>
      </div>
    )
  }
}