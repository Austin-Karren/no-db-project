import React from 'react';
import PropTypes from 'prop-types';
import Jedi from './Jedi'

function Result(props) {
   console.log(props)

   return (
      <div className="result center-element">
         <div>
         You are a <strong className="upper-case">{props.quizResult}!</strong>
         </div>
         <button onClick={() => props.retake()} className="update-save-button retake-button"> Retake </button>
      </div>
   )
}

Result.propTypes = {
   quizResult: PropTypes.string.isRequired
}

export default Result;