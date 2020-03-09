import React, {Component} from 'react'
import quizQuestions from './api/quizQuestions';
import Quiz from './Components/Quiz';
import Result from './Components/Results'
import Header from './Components/Header';
import JediList from './Components/JediList';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      jedi: []
      // reset: false,
     };

     this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
     this.renderQuiz = this.renderQuiz.bind(this);
     this.renderResult = this.renderResult.bind(this);
     this.addJedi = this.addJedi.bind(this);
     this.updateJediName = this.updateJediName.bind(this);
     this.deleteJedi = this.deleteJedi.bind(this);
     this.resetQuiz = this.resetQuiz.bind(this);
  }

  componentDidMount() {
    axios.get('/api/jedi')
    .then(res => {
      this.setState({
        jedi: res.data
      })
    });
    // for quiz section
    const shuffledAnswerOptions = quizQuestions.map(question => this.suffleArray(question.answers) );
      this.setState({
        question: quizQuestions[0].question,
        answerOptions: shuffledAnswerOptions[0]
      });
  }

  //post 
  addJedi(type){
    console.log('hit add jedi')
    axios.post('/api/jedi', {type})
    .then(res => {
      this.setState({
        jedi: res.data
      })
    })
    .catch(err => console.log(err))
  }

  updateJediName(id, newName) {
    axios.put(`/api/jedi/${id}`, {name: newName})
    .then(res => {
      this.setState({ jedi: res.data })
    })
  }

  deleteJedi(id) {
    axios.delete(`/api/jedi/${id}`)
    .then(res => {
      this.setState({
        jedi: res.data
      })
    })
  }

  suffleArray(array) {
    let index = array.length,
    temporaryValue,
    randomIndex;

    while(0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index--;

      temporaryValue = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if(this.state.questionId < quizQuestions.length){
      if(!this.state.result){
        setTimeout(() => this.setNextQuestion(), 300);
      }
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswersCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswersCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] }, 
      this.addJedi(result[0].toLowerCase()));
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz 
        answers={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  renderResult() {
    return <Result 
      quizResult={this.state.result}
      retake={this.resetQuiz}
    />;
  }

  resetQuiz() {
    this.setState({
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    });
    this.componentDidMount()
  }

  render() { 
    // console.log(this.state.jedi)
    return ( 
      <div className='App'>
        <h1>Jedi Character Builder</h1>
        <Header />
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <JediList 
          type={this.state.result}
          jedi={this.state.jedi}
          updateJediName={this.updateJediName}
          delete={this.deleteJedi}
        />
      </div>
     );
  }
}
 
export default App;