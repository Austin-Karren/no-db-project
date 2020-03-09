import React from 'react';
import PropTypes from 'prop-types';
import Jedi from './Jedi'

function Result(props) {


   return (
      <div className="result">
         You are a <strong className="upper-case">{props.quizResult}!</strong>
      </div>
   )
}

Result.propTypes = {
   quizResult: PropTypes.string.isRequired
}

export default Result;