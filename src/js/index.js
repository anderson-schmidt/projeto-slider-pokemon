const cartoes = document.querySelectorAll(".cartao");
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
	cartaoSelecionado.classList.remove("selecionado");
}

function addSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

console.log(document.getElementById("btn-avancar"));

btnAvancar.addEventListener("click", function () {
	if (cartaoAtual === cartoes.length - 1) return;

	esconderCartaoSelecionado();

	cartaoAtual++;
	addSelecionado(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0)
    return ;
	
	esconderCartaoSelecionado(cartaoAtual);

	cartaoAtual --;
	addSelecionado(cartaoAtual);
});
