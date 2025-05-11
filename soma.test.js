const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(3,2)).toBe(5)
  })
})