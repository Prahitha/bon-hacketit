import React from 'react';
import image from './bacon-eggs.png';

export default function Visualization() {

    return (
      <div>
        <h1 style={{marginTop: '100px', color: '#90caf9'}}> Nutrition Breakdown for Scrambled egg, bacon and pepper muffins</h1>
        <img src={image}></img>
      </div>
    );
  }
  