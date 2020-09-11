export default class Queue {
  constructor() {
    this.data = []
  }
  add(item) {
    this.data.push(item)
  }
  remove() {
    return this.data.shift()
  }
  get size() {
    return this.data.length
  }
}
