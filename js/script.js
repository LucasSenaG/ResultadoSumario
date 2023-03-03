async function coletadados() {
    const url = "../data.json";
    const resposta = await fetch(url);
    const dados = await resposta.json();

    let reacao = document.querySelector("#reacao");
    let memoria = document.querySelector("#memoria");
    let comunicacao = document.querySelector("#comunicacao");
    let visual = document.querySelector("#visual");
    let total = document.querySelector("#pnttotal");
    let vlrtotal;
    let avaliacao = document.querySelector("#avaliacao");

    reacao.innerHTML = dados[0].score;
    memoria.innerHTML = dados[1].score;
    comunicacao.innerHTML = dados[2].score;
    visual.innerHTML = dados[3].score;

    vlrtotal = ((dados[0].score + dados[1].score + dados[2].score + dados[3].score) / 4);
    total.innerHTML = vlrtotal;

    if (vlrtotal <= 30){
        avaliacao.innerHTML = "ruim";
    } else if (vlrtotal <= 59){
        avaliacao.innerHTML = "pode melhorar";
    } else if (vlrtotal <= 70){
        avaliacao.innerHTML = "bom";
    } else if (vlrtotal <= 80){
        avaliacao.innerHTML = "muito bom";
    } else if (vlrtotal <= 90){
        avaliacao.innerHTML = "ótimo!";
    } else if (vlrtotal <= 99){
        avaliacao.innerHTML = "Incrível!";
    } else if (vlrtotal <= 100){
        avaliacao.innerHTML = "Perfeito!";
    }

}

coletadados();