import React from 'react';
import SoonToExpire from './soon';
import List from './list';
import Safe from './safe';

export default function ItemList() {

  return (
    <div style={{background: '#bbdefb'}}>
    <br /><br /><br /><br /><br /><br />
      <SoonToExpire />
      <List />
      <Safe />
      <br /><br /><br />
    </div>
  );
}
