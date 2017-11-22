import React from 'react';
import './EnergyBar.css';

export const EnergyBar = ({value}) => {
  const style = {
    background: 'rgb(95, 152, 209)',
    height: '15px',
    width: value +'%'
  }
  return  <div className="energybar"><div style={style}></div></div>
}