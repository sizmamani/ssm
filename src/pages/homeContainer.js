import React, { Component } from 'react';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount(){
    console.log("component will mount")
  }

  componentDidMount(){
    console.log("component did mount")
    this.setState({
      firstName: 'mani'
    })
  }
  
  componentDidUpdate(){
    console.log("component did update")
  }

  handleTextChange(event){
    const value = event.target.value
    this.setState({
      [event.target.name] : value
    })
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" style={styles.username} value={this.state.username} name="username" onChange={(event)=>{this.handleTextChange(event)}}/><br/>
        <input type="text" value={this.state.password} name="password" onChange={(event)=>{this.handleTextChange(event)}}/>
      </React.Fragment>
    );
  }
}

const styles = {
  username: {
    fontWeight: 'bold',
  }
}
