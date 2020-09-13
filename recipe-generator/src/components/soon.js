import React from 'react';
import { red } from '@material-ui/core/colors';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function SoonToExpire() {
    return (
        <div>
        <h2 style={{color: '#9575cd'}}>Soon to expire!</h2>
        <div style={{display: 'flex', marginLeft: '20%'}}>
            <FiberManualRecordIcon style={{ color: red[500], fontSize: '15px', marginTop: '25px', marginRight: '30px'}}/>
            <h3>Apples</h3>
        </div>
        <div style={{display: 'flex', marginLeft: '20%'}}>
            <FiberManualRecordIcon style={{ color: red[500], fontSize: '15px', marginTop: '25px', marginRight: '30px'}}/>
            <h3>Nutella</h3>
        </div>
        </div>
    )
}

export default SoonToExpire;