import React, { Component } from 'react';
import List from './List';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>

  // listAlarms = todos.map((todo, index) =>
  // // Only do this if items have no stable IDs
  // <li key={index}>
  //   {todo.text}
  // </li>
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), isToggleOn: true, value: '', alarms: []};

    this.inputInt = '';
    // This binding is necessary to make `this` work in the callback
    this.startTimer = this.startTimer.bind(this);
    
    // this.handleClick = this.handleClick.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.newTimeStamp = this.newTimeStamp.bind(this);

    this.alarmIncrement = this.alarmIncrement.bind(this);
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick() {
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));

    this.setState({ isToggleOn: !this.state.isToggleOn });
    if(this.state.isToggleOn == true){    
      clearInterval(this.timerID);    
    }
    else{
      this.startTimer();
    }
    console.log(this.state.date);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
   const keyCode = event.keyCode || event.which;
   const keyValue = String.fromCharCode(keyCode);
   if (isNaN(keyValue))
    event.preventDefault();
    else
    // this.setState((prevState, keyValue) => ({
    //   counter: prevState.value + keyValue
    // }));
    {
      // this.inputInt = this.inputInt + keyValue;
      this.setState(function(prevState) {
        return {
          value: prevState.value + keyValue
        };
      });
    }
  }

  newTimeStamp(event) {
    // newAlarm = Object.create({},x,{B:1,C:2});

   console.log(this.state.value, this.state.alarms)  
    this.setState((prevState) => ({
      alarms: [...prevState.alarms, prevState.value],
      value: ''
    }));


    // this.setState((prevState) => {
    //   value: ''
    // });
// not working?
    // this.inputInt = this.state.value;
    event.preventDefault();
    // console.log(this.state);
  }

  alarmIncrement(event){
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
  }

  ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

  // function listAlarms(props) {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number) =>
  //     // Correct! Key should be specified inside the array.
  //     <ListItem key={number.toString()}
  //               value={number} />
  //   );
  //   return (
  //     <ul>
  //       {listItems}
  //     </ul>
  //   );
  // }

  getButton() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
         <button onClick={(e) => this.handleClick(e)}>AAA</button>
        // another way to do binding
        {this.getButton()}
        <div>
          <form onSubmit={this.newTimeStamp}>
            <label>
              Name:
              <input type="text" pattern="[0-9]*" value={this.state.value} onChange={this.handleChange} />
            </label>
              <input type="submit" value="New Time Stamp" />
          </form>
        </div>
        <List numbers={this.state.alarms} />
      </div>
    );
  }
}
export default Clock;