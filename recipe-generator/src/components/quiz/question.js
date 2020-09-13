import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <h2 className="question" style={{color: '#9575cd', fontWeight: '500'}}>{props.content}</h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
