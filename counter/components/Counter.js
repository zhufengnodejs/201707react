import React, {Component} from 'react';
export default class Counter extends Component {
  render() {
    return (
      <div style={{border:'1px solid red',marginTop:'10px'}}>
        <p></p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}