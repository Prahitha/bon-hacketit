import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export default function Header() {

  return (
    <div>
      <AppBar position="fixed" style={{background: '#9575cd'}}>
        <Toolbar style={{float: 'left'}}>
          <Typography variant="h5" style={{fontWeight: '500', color: 'white'}}>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
            FOODSIA
          </Link>
          </Typography>
          <div style={{position: 'absolute', left: '81%'}}>
          <Button style={{fontSize: '20px',}} color="inherit"><Link style={{fontWeight: '500', textDecoration: 'none', color: 'white'}} to='/scanner'>Scan</Link></Button>
          <Button style={{fontSize: '20px', marginLeft: '10px',}} color="inherit"><Link style={{fontWeight: '470', textDecoration: 'none', color: 'white'}} to='/game'>Play</Link></Button>
          <Button style={{fontSize: '20px', marginLeft: '10px',}} color="inherit"><Link style={{fontWeight: '470', textDecoration: 'none', color: 'white'}} to='/search'>Search </Link></Button>
          {/* <Button style={{fontSize: '20px', marginLeft: '10px',}} color="inherit"><header style={{fontWeight: '390', color: 'white'}}><Link style={{textDecoration: 'none', color: 'white'}} to='/login'>Login</Link></header></Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
