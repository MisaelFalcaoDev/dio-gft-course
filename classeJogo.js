  class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar(tipo) {
      let ataque = ['magia', 'espada', 'artes marciais', 'shuriken'];
  
      if (tipo === 'mago') {
        console.log(`O ${tipo} atacou usando ${ataque[0]}`);
      } else if (tipo === 'guerreiro') {
        console.log(`O ${tipo} atacou usando ${ataque[1]}`);
      } else if (tipo === 'monge') {
        console.log(`O ${tipo} atacou usando ${ataque[2]}`);
      } else if (tipo === 'ninja') {
        console.log(`O ${tipo} atacou usando ${ataque[3]}`);
      }
    }
  }
  let continuar = 's';
  
  while (continuar === 's') {
    let nome = prompt('Olá heroi! Por favor me diga seu nome: ');
    let idade = prompt('\nOlá heroi! Por favor me diga sua idade: ');
    let tipo = prompt('\nOlá heroi! Por favor me diga seu tipo: ');
  
    let heroi = new Heroi(nome, idade, tipo);
    heroi.atacar(heroi.tipo);
  
    continuar = prompt(
      "\nVocê deseja continuar? Digite 's' para sim ou 'n' para não."
    );
  }
  