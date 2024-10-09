function calculoSaldo(vitorias,derrotas){
    let saldo = vitorias - derrotas;
    return saldo;
}

function verificaNivel(saldo){
    let nivel;

    if(saldo < 10){
        nivel = "Ferro"
    }else if(saldo > 10 && saldo <= 20){
        nivel = "Bronze"
    }else if(saldo > 20 && saldo <= 50){
        nivel = "Prata"
    }else if(saldo > 50 && saldo <= 80){
        nivel = "Ouro"
    }else if(saldo > 80 && saldo <= 90){
        nivel = "Diamante"
    }else if(saldo > 90 && saldo <= 100){
        nivel = "Lendário"
    }else if(saldo > 100){
        nivel = "Imortal"
    }

    return nivel;
}

let continuar = 's';

console.log("Olá jogador! Vamos calcular o seu ranking?\n");


while(continuar == "s"){
    let vitorias = prompt("Por favor, me diga o seu número de vitórias: ");
    let derrotas = prompt("\nAgora, me diga o seu número de derrotas: ");

    let saldo = calculoSaldo(vitorias,derrotas);
    let nivel = verificaNivel(saldo);

    console.log("O Herói tem um saldo de " + saldo + " e está no nível de " + nivel);

    continuar = prompt("\nVocê deseja consultar o nivel de outro herói? Digite 's' para sim ou 'n' para não.\n");
}