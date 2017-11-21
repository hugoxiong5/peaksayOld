import React from 'react';
import './Game.css';
import { TimerInput } from './TimerInput';

const GameArea = ({ title, history, left, right, process }) => (
  <div>
    <h1>{title}</h1>
     {history.map((d,i) =>( 
       <div key={i}>{d}</div>))}
  </div>
)

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: props.title,
      left: props.lines.filter((d, i) => (!(i % 2) ? d: 0)),
      right: props.lines.filter((d, i) => ((i % 2) ? d: 0)),
      history: [props.lines[0]],
      index: 1,
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
      let output =  `${value} (${this.state.right[this.state.index-1]})`;
      let history = prevState.history.concat(output)
      return {
        history: history,
        showInput: false
      }
    });
    if(this.state.index < this.state.right.length ) {
      setTimeout(() => { 
        this.setState((prevState, props) => {
          let line = prevState.left[prevState.index];
          let history = prevState.history.concat(line);
          let index = prevState.index + 1;
          return {
            history: history,
            index: index,
            showInput: true
          }
        });
      }, 1000); 
    }
  }

  render() {
    return (
      <div className="game">
        <header><h1>Header</h1></header>
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
