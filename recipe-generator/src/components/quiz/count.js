import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div>
    <div style={{marginTop: '100px',}}>
    <h2 style={{color: '#9575cd', fontWeight: '600'}}>How much food do you waste?</h2>
    </div>
    <div className="questionCount" style={{color: '#9575cd', backgroundColor: 'rgba(0,0,0,0.08)', width: '200px', marginLeft: '45%', borderRadius: '10px', padding: '5px'}}>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
