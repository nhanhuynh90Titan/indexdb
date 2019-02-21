import '../public/style.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { HotTable } from '@handsontable-pro/react'
import data from '../public/data.json'
import indexDBModule from './indexDB/module'
import storeList from '../public/store'


const {Provider, Consumer} = React.createContext(defaultValue);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.data = data
  }

  render() {
    return (
      <Provider value={this.state}>
        <div id="hot-app" className='my-container'>
          <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="600" height="300" stretchH="all" />
        </div>
      </Provider>

    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))


// import {pP, refsPP} from './hoc'
// import App from './hoc/app'

// ReactDOM.render(<App />, document.getElementById('root'))

// async function n () {
//   const waitFor = (ms) => new Promise((r) => {
//     setTimeout(r, ms)
//   })
//   let data1 = Promise.all([1, 2, 3].map(async num => {
//     await waitFor(50)
//     Promise.error('abc')
//     // throw new Error('nhan huyn')
//     return num
//   })).then(data => {
//     console.log('Done1', data)
//   }, error => {
//     console.log('error1', error)
//   }).catch (err => {
//     console.log('catch', err)
//   })
//   console.log('Done')
// }

// n()



// let myModule = new indexDBModule()
// myModule.openRequest('EXAMPLE_DB1', storeList, (err) => {
//   console.log('create db done')
//   // let transaction = myModule.createTransaction('todos', (err, trans) => {
//   //   if (err) return null
//   //   console.log('trans', trans)
//   //   return trans
//   // })

//   // console.log('transaction', transaction)

//   if (err) return false

// })












