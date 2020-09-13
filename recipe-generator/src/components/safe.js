import React from 'react';
import {green} from '@material-ui/core/colors';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function SoonToExpire() {
    return (
        <div>
        <h2 style={{color: '#9575cd'}}>There's plenty of time :)</h2>
        <div style={{display: 'flex', marginLeft: '20%'}}>
            <FiberManualRecordIcon style={{ color: green[500], fontSize: '15px', marginTop: '25px', marginRight: '30px'}}/>
            <h3>Fruit Loops</h3>
        </div>
        <div style={{display: 'flex', marginLeft: '20%'}}>
            <FiberManualRecordIcon style={{ color: green[500], fontSize: '15px', marginTop: '25px', marginRight: '30px'}}/>
            <h3>Mayonnaise</h3>
        </div>
        </div>
    )
}

export default SoonToExpire;