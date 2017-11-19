import React from 'react';
import './Dialogue.css';

export const Dialogue = ({ title, lines }) => (
  <div className="dialogue">
  <h1>{title}</h1>
  <table>
    <tbody>
    { lines.map((line, i) => <tr key={i}><td>{ line } </td></tr>) }
    </tbody>
  </table>
  </div>
)
