import assert from 'assert'
import Queue from '../queue.js'

describe('My queue class', () => {
  it('has a constructor that works', () => {
    const q = new Queue()
    assert(q)
  })
  it('can add items', () => {
    const q = new Queue()
    q.add(21)
    q.add('two')
    q.add(34n)
    assert.deepStrictEqual(q.size, 3)
  })
})
