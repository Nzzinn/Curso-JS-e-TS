function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: () => {return cpfEnviado.replace(/\D+/g, '');}
    });
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.sequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.digito(cpfParcial);
    const digito2 = this.digito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.digito = function(cpfParcial){
    const array = Array.from(cpfParcial);
    let regressivo = array.length + 1;
    let total = array.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor));
        regressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0': String(digito);
};

ValidaCpf.prototype.sequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCpf('113.874.589-81');
if(cpf.valida()){
    console.log('CPF Válido.');
}else{
    console.log('CPF Inválido.');
}