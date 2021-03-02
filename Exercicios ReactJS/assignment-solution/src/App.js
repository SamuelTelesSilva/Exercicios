import React, {Component} from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    username: 'username'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render(){
    return (
      <div className="App" currentName={this.state.username}>
        <UserInput  changed={this.usernameChangeHandler}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
      </div>
    );
  }
}

export default App;
