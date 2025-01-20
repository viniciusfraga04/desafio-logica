class heroi{
    constructor(tipo, ataque){
        this.tipo = tipo
        this.ataque = ataque

    }
    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
    
}

var batalha = new heroi('mago', 'magia')
var batalha2 = new heroi('guerreiro', 'espada')
var batalha3 = new heroi('monge', 'artes marciais')
var batalha4 = new heroi('ninja', 'shuriken')
batalha.escrever()
batalha2.escrever()
batalha3.escrever()
batalha4.escrever()
