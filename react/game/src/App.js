import React from 'react';
import './App.css';
import { Landing } from './Landing';
import { Game } from './Game';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      lines: [],      
      showLanding: true,
      showGame: false
    };
    this.play = this.play.bind(this);
  }

  play(title, lines) {
    this.setState({showLanding: false, showGame:true, title: title, lines: lines })
  }

  render() {
    if(this.state.showLanding) { return <Landing play={this.play} /> }
    if(this.state.showGame) { return <Game title={this.state.title} lines={this.state.lines} /> }
    return '';
  }
}

