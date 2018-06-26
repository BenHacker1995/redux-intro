import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// Allowing us to access reduxState on props
const mapReduxStateToProps = ( reduxState ) => ({
  reduxState
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: ''
    }
  }

  handleColorChange = ( event ) => {
    this.setState({
      color: event.target.value
    })
  }

  clearAllColors = () => {
    const action = { type: 'DELETE_COLOR' };
    this.props.dispatch( action );
  }

  sendColorToRedux = () => {
    // Send the color to redux with an action type of ADD_COLOR
    const action = { type: 'ADD_COLOR', payload: this.state.color };
    this.props.dispatch( action );
  }

  render() {
    console.log( 'Rendering App.js' );
    return (
      <div className="App">
        <pre>{ JSON.stringify( this.props.reduxState )}</pre>
        {/* The value of the reducer will be what the state is */}
        <div>{ this.props.reduxState.counterReducer }</div>
        {/* dispatch takes in an action */}
        <button onClick={ () => this.props.dispatch({ type: 'ADD' })}>Add</button>
        <button onClick={ () => this.props.dispatch({ type: 'SUBTRACT'})}>Subtract</button>

        <h3>Enter Color Here;</h3>
        <input onChange={ this.handleColorChange } value={ this.state.color } />
        <button onClick={ this.sendColorToRedux }>Submit</button>
        <button onClick={ this.clearAllColors }>DELETE COLORS</button>
      </div>
    );
  }
}
// connect() allows us to dispatch
// connect( mapReduxStateToProps ) to access information
export default connect( mapReduxStateToProps )( App );
// Currying, a function that returns a function
