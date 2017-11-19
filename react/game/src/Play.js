import React from 'react';
import './Play.css';

export const Play = ({ show=false, submit }) => {
  if(show) {
    return (
      <button onClick={submit}>PLAY</button>
    )
  }
  else {
    return null;
  }
}
