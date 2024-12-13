let nomeHeroi = "Davizera"
let nivelHeroi = 23233434
let nivel
console.log("Olá " + nomeHeroi)

if(nivelHeroi <= 1000){
    nivel = "Ferro"
}else if(nivelHeroi >= 1001 && nivelHeroi <= 2000){
    nivel = "Bronze"
}else if(nivelHeroi >= 2001 && nivelHeroi <= 5000){
    nivel = "Prata"
}else if(nivelHeroi >= 5001 && nivelHeroi <=7000){
    console.log("Você esta no rank Ouro")
}else if(nivelHeroi >= 7001 && nivelHeroi <= 8000){
    console.log("Você esta no rank Platina")
}else if(nivelHeroi >= 8001 && nivelHeroi <= 9000){
    console.log("Você esta no rank Ascendente")
}else if(nivelHeroi >= 9001 && nivelHeroi <= 10000){
    console.log("Você esta no rank Imortal")
}else{
    console.log("Você esta no rank Radiante")
} 


