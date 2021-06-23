import React from "react";

import API from "../../services/api";
import Cards from "../../components/Cards";
import Product from "../../models/Product";

import { ContainerMain } from "../../components/Cards/style";

export default class Artesanais extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
    console.log(this.state.products)
  }

  getProducts = async () => {

    const { categoria } = this.props.match.params;

    const response = await API.get(`/produto/categoria/${categoria}`);
    this.setState({
      products: response.data.map((product) => new Product(product)),
    });
  };

  render() {
    const { products } = this.state;
    return (
      <ContainerMain>
        {products.map((product) => {
          return (
            <Cards
              url={product.url}
              nome={product.nome}
              categoria={product.categoria}
              valor={product.valor}
            />
          );
        })}
      </ContainerMain>
    );
  }
}
