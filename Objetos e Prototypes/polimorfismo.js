//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo infuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | O seu saldo é de: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const c = new Conta(11, 22, 5000);
c.depositar(100);
c.sacar(239);
console.log('');

const cc = new ContaCorrente(11, 22, 0, 1000);
cc.depositar(10);
cc.sacar(1010);
cc.sacar(10);
console.log('');

const cp = new ContaPoupança(12, 33, 0);
cp.depositar(100);
cp.sacar(100);
cp.sacar(1);