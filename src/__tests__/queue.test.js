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
  it('adds and removes correctly', () => {
    const q = new Queue()
    q.add(1)
    q.add(2)
    assert.deepStrictEqual(q.remove(), 1)
    q.add(3)
    assert.deepStrictEqual(q.remove(), 2)
    assert.deepStrictEqual(q.size, 1)
    q.remove()
    assert.deepStrictEqual(q.size, 0)
  })
})
