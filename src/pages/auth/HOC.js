import React, { Component } from 'react';

// High Order Component
const Authentication = WrappedComponent => {
  class Authentication extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        mode: 'login'
      };
    }

    handleChangeMode(mode){
      this.setState({
        mode
      })
    }

    handleTextChange(event){
      const value = event.target.value
      this.setState({
        [event.target.name] : value
      })
    }

    render() {
      return (
        <div>
          <WrappedComponent 
                handleChangeMode={this.handleChangeMode.bind(this)}
                handleTextChange={this.handleTextChange.bind(this)}
                {...this.state}
          />
        </div>
      );
    }
  }
  return Authentication
}

export default Authentication;
