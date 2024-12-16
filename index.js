let nomeHeroi = "Davizera"
let nivelHeroi = 123
let nivel


if(nivelHeroi <= 1000){
    nivel = "Ferro"
}else if(nivelHeroi >= 1001 && nivelHeroi <= 2000){
    nivel = "Bronze"
}else if(nivelHeroi >= 2001 && nivelHeroi <= 5000){
    nivel = "Prata"
}else if(nivelHeroi >= 5001 && nivelHeroi <=7000){
    nivel = "Ouro"
}else if(nivelHeroi >= 7001 && nivelHeroi <= 8000){
    nivel = "Platina"
}else if(nivelHeroi >= 8001 && nivelHeroi <= 9000){
    nivel = "Ascendente"
}else if(nivelHeroi >= 9001 && nivelHeroi <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante" 
} 

console.log("O " + nomeHeroi + " tem " + nivelHeroi + " de XP e está no rank " + nivel)
