class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.digito(cpfParcial);
        const digito2 = ValidaCPF.digito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    digito(cpfParcial){
        const array = Array.from(cpfParcial);
        let regressivo = array.length + 1;
        let total = array.reduce((acumulador, valor) => {
            acumulador += (regressivo * Number(valor));
            regressivo--;
            return acumulador;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0': String(digito);
    }

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.digito(cpfParcial);
        const digito2 = this.digito(cpfParcial + digito1);
        
        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('000.000.000-00');

if(validacpf.valida()){
    console.log('CPF Válido!');
}else{
    console.log('CPF Inválido!');
}