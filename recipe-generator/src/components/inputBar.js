import React from 'react';

const InputBar = ({changed, searchClicked, onKeyPress}) => {
	return(
		<div>
			<input className='ma2'
				onChange={changed} 
				onKeyPress={onKeyPress}
				style={{padding: '8px', borderWidth: '1px', borderRadius: '10px', marginTop: '10px'}}
				type='text' /> 
	        <button 
		        type="button" 
		        className="btn btn-dark"
				onClick={searchClicked}
				style={{padding: '8px', marginLeft: '10px', borderWidth: '1px', borderRadius: '5px', marginTop: '10px'}}
		        >search</button>
        </div>
		)

}

export default InputBar;