const Queue = require('./queue')

describe('Queue', () => {

  let queue

  beforeEach(() => { 

    queue = new Queue()
  })

  it('Deve criar uma fila', () => {
    
    expect(queue).toEqual({ elements: []})

  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {

    expect(queue.size()).toEqual(0)

  })

  it('Deve ser capaz de adicionar um item na fila', () => {

    queue.add(1)
    queue.add("Tatiana")
    expect(queue.size()).toEqual(2)

  })

  it('Deve escolher o primeiro item da fila', () => { 
    
      queue.add("Pretalab")
      queue.add("Aprofunda") 
      expect(queue.peek()).toEqual("Pretalab")
      //Não foi adicionado um teste com a lista vazia
  })

  it('Deve remover o primeiro item da fila', () => {

    queue.add("Tatiana")
    queue.add("Bezerra") 
    expect(queue.dequeue()).toEqual("Tatiana")
    //Não foi adicionado um teste com a lista vazia
  })
})