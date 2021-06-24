import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import API from "../../services/api";
import Product from "../../models/Product";

import format from "../../utils/format";

import CardInfo from "../../components/CardInfo";
import Button from "../../components/Button/style";
import style from "./index.module.scss";
import Quantity from "../../components/Quantity";

export default class Details extends React.Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { nome } = this.props.match.params;

    const response = await API.get(`/produto/nome?nome=${nome}`);
    this.setState({ product: new Product(response.data) });
  }

  render() {
    const { product } = this.state;

    return (
      <div className={style.detailsContainer}>
        <div className={style.containerImg}>
          <img
            src={`https://ecommerce-serratec.herokuapp.com/produto/${product.nome}/imagem`}
            alt={product.nome}
          />
        </div>

        <div className={style.containerInfos}>
          <CardInfo
            nome={product.nome}
            descricao={product.descricao}
            valor={format.formatForReal(product.valor)}
            categoria={product.categoria}
          />
        </div>

        <div className={style.containerComprar}>
          <Quantity />
          <Button>Adicionar ao Carrinho</Button>
          <Button>Comprar Agora</Button>
        </div>
      </div>
    );
  }
}
