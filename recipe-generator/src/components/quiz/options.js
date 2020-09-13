import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <div style={{width: '50%', height: '100px', marginLeft: '25%', backgroundColor: 'rgba(0,0,0,0.08)'}}>
    <div className="answerOption" style={{color: '#black', fontSize: '20px',}}>
      <input
        style={{marginTop: '30px', backgroundColor: '#b39ddb',}}
        type="checkbox"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </div>
    </div>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;


// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';

// function AnswerOption(props) {
//   return (
//     <div style={{width: '50%', height: '100px', marginLeft: '25%', backgroundColor: 'rgba(0,0,0,0.08)'}}>
//     <div className="answerOption" style={{color: '#b39ddb', fontSize: '20px',}}>
//       <Button
//         style={{width: '400px', marginTop: '30px', backgroundColor: '#b39ddb',}}
//         variant="outlined"
//         onClick={props.answerType === props.answer}
//         id={props.answerType}
//         value={props.answerType}
//         disabled={props.answer}
//         onChange={props.onAnswerSelected}
//       >
//       <label style={{fontWeight: '200'}} className="radioCustomLabel" htmlFor={props.answerType}>
//         {props.answerContent}
//       </label>
//       </Button>
//     </div>
//     </div>
//   );
// }

// AnswerOption.propTypes = {
//   answerType: PropTypes.string.isRequired,
//   answerContent: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired
// };

// export default AnswerOption;
