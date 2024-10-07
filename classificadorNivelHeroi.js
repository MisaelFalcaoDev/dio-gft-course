const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

let continuar = "s";

while(continuar == "s"){
    let heroi = prompt("Qual é o seu nome herói? ");
    let xp = prompt("Vamos descobrir qual o seu nivel? Me diga sua quantidade de xp: ");

    if(xp < 1000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[0] + "!\n");
    }else if(xp > 1000 && xp <= 2000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[1] + "!\n");
    }else if(xp > 2000 && xp <= 5000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[2] + "!\n");
    }else if(xp > 5000 && xp <= 7000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[3] + "!\n");
    }else if(xp > 7000 && xp <= 8000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[4] + "!\n");
    }else if(xp > 8000 && xp <= 9000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[5] + "!\n");
    }else if(xp > 9000 && xp <= 10000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[6] + "!\n");
    }else if(xp > 10000){
        console.log("O herói de nome " + heroi + " está no nível de " + nivel[7] + "!\n");
    }

    continuar = prompt("Você deseja consultar o nivel de outro herói? Digite 's' para sim ou 'n' para não.\n");
}
