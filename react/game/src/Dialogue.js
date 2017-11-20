import React from 'react';
import './Dialogue.css';

export const Dialogue = ({ title, lines }) => (
  <div className="dialogue">
  <h1>{title}</h1>
    { lines.map((line, i) => <div key={i} className={ ( i % 2)? 'left' : 'right'} >{ line }</div>) }
  </div>
)
