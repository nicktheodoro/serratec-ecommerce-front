export default class Address {

  constructor(endereco){
      endereco = endereco || {};

      this.cep = endereco.cep;
      this.numero = endereco.numero;
      this.complemento =endereco.complemento;
  };
}
