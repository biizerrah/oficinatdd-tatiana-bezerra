const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  let calculadora

  beforeEach(() => {
    calculadora = new Calculadora()
  })

  it('Deverá retornar a soma de dois números', () => {
     
    expect(calculadora.soma(5,2)).toBe(7)
  
  })

  it('Deverá retornar a subtração de dois números', () => {
    
   
    expect(calculadora.subtracao(2,1)).toBe(1)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    
    expect(calculadora.multi(2,10)).toBe(20)

  })

  it('Deverá retornar a divisao entre dois números', () => {
    
    expect(calculadora.div(20,2)).toBe(10)

  })
})