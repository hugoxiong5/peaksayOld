import React from 'react';
import './Select.css';

export const Select = ({ show=false, select, list }) => {
  if(show) {
    return (
      <select onChange={select}>
        <option key={0} value={0}>CHOOSE A DIALOGUE SET</option>
        {list.map((d) => <option key={d.id} value={d.id}>{d.title}</option>)}
      </select>
    )
  }
  else {
    return null;
  }
}
