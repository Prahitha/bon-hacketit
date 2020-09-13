import React from 'react';
import {yellow} from '@material-ui/core/colors';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function List() {
    return (
        <div>
        <h2 style={{color: '#9575cd'}}>Some time left</h2>
        <div style={{display: 'flex', marginLeft: '20%'}}>
            <FiberManualRecordIcon style={{ color: yellow[500], fontSize: '15px', marginTop: '25px', marginRight: '30px'}}/>
            <h3>Coke</h3>
        </div>
        </div>
    )
}

export default List;