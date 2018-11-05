import React, {Component} from 'react';

export default class ClickCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.onClickButton} >Click Me</button>
        <p>click counter: {this.state.count}</p>
      </div>
    )
  }
}