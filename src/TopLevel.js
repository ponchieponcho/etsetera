import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';


class TopLevel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  render() {
    let {isHidden} = this.state;

    return (
      <div>
        <Header isHidden={isHidden} />
        <Main isHidden={isHidden}/>
      </div>
    );
  }
}


export default TopLevel;
