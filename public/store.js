export default [
  {
    store: 'todos',
    indexs: [
      { name: 'todos_id', column: 'id', options: { unique: true } }
    ]
  },
  {
    store: 'engagments',
    indexs: [
      { name: 'engagments_id', column: 'id', options: { unique: true } }
    ]
  }
]
