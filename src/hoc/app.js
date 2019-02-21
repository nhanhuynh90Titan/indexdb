import React from 'react'


import {pP, refsPP} from './index'
class App extends React.Component {
  test() {
    console.log('call Test');
  }

  render () {
    return <div><button onClick={() => this.forceUpdate()}>Click</button></div>
  }
}

export default refsPP(App)
