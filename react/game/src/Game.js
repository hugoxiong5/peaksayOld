import React from 'react';
import './Game.css';
import { TimerInput } from './TimerInput';
import { EnergyBar } from './EnergyBar';

const GameArea = ({ title, history, left, right, process }) => (
  <div>
    <h1>{title}</h1>
     {history.map((line,i) =>( 
       <div className="chat" key={i}>
         <div className={ ( i % 2)? 'left' : 'right'} >{ line }</div></div>)) }
  </div>
)

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: props.title,
      left: props.lines.filter((d, i) => (!(i % 2) ? d: 0)),
      right: props.lines.filter((d, i) => ((i % 2) ? d: 0)),
      history: []
    }
    this.end = this.end.bind(this);
    this.process = this.process.bind(this);
    this.normalize = this.normalize.bind(this);
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return  {
        history: prevState.history.concat(prevState.left[0]),
        index: 1,
        showInput: true
      };
    });
  }

  end(e) {
    e.preventDefault();
    document.location = "/";
  }

  normalize(s) {
    return s.toLocaleUpperCase().replace(/\s+/g, ' ');
  }

  process(value, time) {
    console.log('process', value, time);
    let answer = this.state.right[this.state.index-1];
    this.setState((prevState, props) => {
      let output =  `${value} (${this.normalize(answer)})`;
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
        <header><h1>Header</h1>
        <EnergyBar value="50"/>
        </header>
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
