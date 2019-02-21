class IndexDBModule {
  constructor () {
    this.isSuppport = window.indexedDB
    this.request = null
    this.db = null
  }

  async openRequest (dbName, storeList = [],cb) {
    var self = this
    if (!this.isSuppport) return false
    this.request = window.indexedDB.open(dbName, 1)

    this.request.onupgradeneeded = function (event) {
      self.db = event.target.result
      Promise.all(storeList.map( async el => {
        await createStore(self.db, el.store, { keyPath: 'id', autoIncrement : true }, el.indexs)
      }))
    }

    this.request.onsuccess = function (event) {
      var db1 = self.request.result
      var transaction = db1.transaction('todos', 'readwrite')

      // add success event handleer for transaction
      // you should also add onerror, onabort event handlers
      transaction.onsuccess = function (event) {
        console.log('[Transaction] ALL DONE!', event)
      }

      transaction.onerror = function (event) {
        console.log('[Transaction] error!', event)
      }
      return cb(null)
    }

    this.request.onerror = event => cb(event)
  }

  async createTransaction (storeName, cb) {
    console.log('storeName', storeName, this.db)
    var transaction = await this.db.transaction(storeName, 'readwrite')
    transaction.onsuccess = event => cb(null, transaction)
    transaction.onerror = (event) => cb(event)
  }
}

async function createStore (db, storeName, options, indexs = []) {
  if (db) {
    let store = await db.createObjectStore(storeName,  options)
    if (indexs.length) {
      Promise.all(indexs.map(async element => {
        await createIndexs(store, element.name, element.column, element.options)
      }))
    }
  }

}

async function createIndexs (store, name, column, options) {
  await store.createIndex(name, column, options)
}

export default IndexDBModule
