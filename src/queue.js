export default class Queue {
  constructor() {
    this.data = []
  }
  add(item) {
    this.data.push(item)
  }
  get size() {
    return this.data.length
  }
}
