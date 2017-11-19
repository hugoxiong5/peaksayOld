import React from 'react';
import './App.css';
import { Landing } from './Landing';
import { Countdown } from './Countdown';
import { Game } from './Game';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showLanding: true,
      showCountdown: false,
      showGame: false
    };
    this.play = this.play.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  play(title, lines) {
    this.setState({showLanding: false, showCountdown:true, title: title, lines: lines })
  }

  countdown() {
    console.log('Countdown done');
    this.setState({showCountdown: false, showGame: true})
  }

  render() {
    if(this.state.showLanding) { return <Landing play={this.play} /> }
    if(this.state.showCountdown) { return <Countdown duration={3} done={this.countdown}/> } 
    if(this.state.showGame) { return <Game title={this.state.title} lines={this.state.lines} /> }

  }
}

