import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './App.less';
import './assets/styles/style.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button size='large' type='primary'>我是antd-mobile</Button>
        {/* <Button0>我是antd</Button0> */}
      </div>
    );
  }
}

export default App;
