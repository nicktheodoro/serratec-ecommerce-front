export default class Product {

  constructor(obj){
      obj = obj || {};
              
      this.nome = obj.nome;
      this.quantidade = obj.quantidade;
      this.descricao = obj.descricao;
      this.categoria = obj.categoria;
      this.valor = obj.valor;
      this.urlImagem = obj.urlImagem;
  }
}
