import React from "react";

import API from "../../services/api";
import Product from "../../models/Product";
import formatForReal from "../../utils/formatFuncionts";
import formatName from "../../utils/teste";

import {
  ContainerMain,
  Card,
  ImagemCard,
  Conteudo,
} from "./style";

export default class Cards extends React.Component {
  
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await API.get("/produto");
    this.setState({
      products: response.data.map((product) => new Product(product)),
    });
    console.log(this.state.products);
  };

  render() {
    return (
      <ContainerMain>
        {this.state.products.map((product) => {
          return (
            <Card key={product.nome} mt={50}>
              <ImagemCard
                src={`https://ecommerce-serratec.herokuapp.com/produto/${product.nome}/imagem`}
              ></ImagemCard>
              <Conteudo>
                <h3>{formatName(product.nome)}</h3>
                <p>{product.descricao}</p>
                <h3>{formatForReal(product.valor)}</h3>
              </Conteudo>
            </Card>
          );
        })}
      </ContainerMain>
    );
  }
}
