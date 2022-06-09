/* 
  baseado no que o Professor desenvolveu eu mudei o nomes das variaveis
  e tentei entender o processo pois é a primeira vez que tenho contato
  com o Typescript e ta tudo muito confuso ainda pra mim.

*/


let AtualizarSaldoBtn = document.getElementById('atualizar-saldo');
let LimparBtn = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let saldoConta = document.getElementById('campo-saldo');

let saldoTotal = 0

LimparSaldo();

function somarAoSaldo(soma: number): void {
    if (saldoConta) {
        saldoTotal += soma
        saldoConta.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function LimparSaldo() {
    if (saldoConta) {
        saldoTotal = 0;
        saldoConta.innerHTML = saldoTotal.toString();
    }
}

if (AtualizarSaldoBtn) {
    AtualizarSaldoBtn.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
LimparBtn.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    LimparSaldo();
});
