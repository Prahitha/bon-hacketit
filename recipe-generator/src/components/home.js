import React from 'react';
import background from './background.jpg';

export default function Home() {

  return (
    <div>
    <div style={{height: '720px', backgroundRepeat: 'no-repeat', filter: 'blur(5px)', backgroundSize: 'cover', backgroundImage: `url(${background})`}}></div>
      <div style={{position: 'absolute', width: '50%',marginTop: '-35%', marginLeft: '40%', filter: 'none', background: '#90caf9', zIndex: '2',}}>
            <h1 style={{color: 'white'}}>Foodsia</h1>
            <h3 style={{color: 'white', fontWeight: '600'}}>
                Keep track of the expiration date of all your food items and help reduce food waste!
                Just scan the QR code when you make a purchase
            </h3>
            <h3 style={{color: 'white', fontWeight: '600'}}>
                You can also search recipes with the ingredients that you have, so you don't have to search for a recipe only
                to know that you don't have half of the ingredients at home
            </h3>
            <h3 style={{color: 'white', fontWeight: '600'}}>
                With Foodsia, you can not only track the expiration dates but also earn rewards when you buy
                something that is about to expire
            </h3>
            <h3 style={{color: 'white', fontWeight: '600'}}>
                Also try our quiz to know how much food you really waste :)
            </h3>
      </div>
    </div>
  );
}
