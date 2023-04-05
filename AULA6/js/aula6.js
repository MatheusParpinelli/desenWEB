function tabuada(){
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById('resultab');
    for(let i=1; i <= 10; i++){
        let result = i * numero;
        const node = document.createElement("p");
        const text = document.createTextNode(`${numero} * ${i} = ${result}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }

}

function exibir(){
    let num = document.getElementById('imp').value;
    let divisoria = document.getElementById('texto');
    for(let i = 0; i < num; i++){
        let node = document.createElement("h4");
        let text = document.createTextNode("TEXTO H4");
        node.appendChild(text);
        divisoria.appendChild(node);

    }

}


let click = 0;
function contaClique(){
    click++;
    document.getElementById("clique").innerHTML = click;

}

function sortear(){
    let sortear = parseInt(Math.random()* 100);
    document.getElementById("sorteio").innerHTML = `O valor sorteado é ${sortear}`;
}