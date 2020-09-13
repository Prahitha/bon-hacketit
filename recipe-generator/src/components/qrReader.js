import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import styled, { keyframes, css } from "styled-components";

class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

  const resultReturned = this.state.result;
//   const parsed = JSON.parse(resultReturned);
  console.log(typeof(resultReturned));
  const fadeIn = keyframes`
    0% { opacity: 0; }
    97% {opacity: 0; }
    100% { opacity: 1; }
    `
  const animation = props => 
  css`
  ${fadeIn} ${props.animationLength} 7s;
  `
  const FadeButton = styled.button`
  animation: ${animation};
  `
    return(
      <div style={{background: '#bbdefb', height: '720px',}}>
        <br /><br /><br /><br /><br /><br /><br />
        <div style={{marginLeft: '10%'}}>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        {/* <Button style={{animation: `1s ${fadeIn}`, animationFillMode: 'forwards', animationDelay: '5s', background: 'black'}} color="inherit">
          Go to List
        </Button> */}
        <FadeButton>
          <Link style={{textDecoration: 'none',}} to='/itemlist'>
          Go to List!
          </Link>
        </FadeButton>
        <p style={{marginLeft: '25%', width: '50%'}}>{this.state.result}</p>
        </div>
      </div>
    )
  }
}

export default Scanner;