let g1I: any = prompt("Scrivi un numero");
let g2I: any = prompt("Scrivi un numero");
let cN: number = Math.floor((Math.random() * 10-1)+1);

console.log(g1I, g2I);

console.log("Numero casuale:", cN);


let diffG1: number = Math.abs(parseInt(g1I) - cN);
let diffG2: number = Math.abs(parseInt(g2I) - cN);

console.log("Differenza da Numero casuale: G1 ->", diffG1, "e G2 ->",  diffG2 );



if (cN === parseInt(g1I)) {
    console.log(cN);
    console.log("Giocatore 1 ha azzeccato il numero casuale");
}
else if (cN === parseInt(g2I)) {
    console.log(cN);
    console.log("Giocatore 2 ha azzeccato il numero casuale");
}
else if (diffG1 < diffG2) {
    console.log("Nessuno ha azzeccato il numero, però giocatore 1 si è avvicinato di più al numero casuale!");
} else if (diffG2 < diffG1) {
    console.log("Nessuno ha azzeccato il numero, però giocatore 2 si è avvicinato di più al numero casuale!");
}   else {
    console.log("Nessuno ha azzeccato il numero e nessuno si è avvicainato di più al numero casuale");
    
}