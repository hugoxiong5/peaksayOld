import React from 'react';
import { Select } from './Select';
import { Play } from './Play';
import { Dialogue } from './Dialogue';
import './Landing.css';

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
      title: '',
      lines: [], 
      api: 'https://dev.chineselanguagequest.com/game/api',
      showSelect: true,
      showPlay: false,
    };
    this.select = this.select.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    const url = this.state.api;
    fetch(url).then(response => response.json())
      .then(result => {
        console.log('success:', result);
        this.setState({ list: result });
      })
      .catch(error => console.log('error:', error));
  }

  select(e) {
    const id = e.target.value;
    this.setState({ title: '', lines: [], history:[], showScore: 'hide'});
    if(id > 0){
      const url = this.state.api;
      fetch(`${url}/${id}/`).then(response => response.json())
        .then(result => {
          console.log('success:', result);
          this.setState({
            title: result.title,
            lines: result.lines,
            showPlay: true,
          });
        })
        .catch(error => console.log('error:', error));
    }
  }

  play() {
    this.props.play(this.state.title, this.state.lines);
  }

  render() {
    return (
      <div className="landing">
        <Select show={this.state.showSelect} select={this.select} list={this.state.list}/>
        <Play show={this.state.showPlay} submit={this.play}/>
        <Dialogue title={this.state.title} lines={this.state.lines} />
      </div>
    )
  }
}
