import React from "react";
import { Link } from "react-router-dom";

import API from "../../services/api";
import Product from "../../models/Product";

import format from "../../utils/format";

import CardInfo from "../../components/CardInfo";
import Button from "../../components/Button/style";
import style from "./index.module.scss";
import Quantity from "../../components/Quantity";

export default class Details extends React.Component {
  state = {
    product: new Product(),
    quantidade: 1,
  };

  async componentDidMount() {
    const { nome } = this.props.match.params;

    const response = await API.get(`/produto/nome?nome=${nome}`);
    this.setState({ product: new Product(response.data) });
  }

  addToFridge = () => {
    const logado = localStorage.getItem("token");
    const produto = JSON.parse(localStorage.getItem("produto")) || {};

    if (!logado) {
      alert("Você precisa estar logado.");
      window.open("/login");
    }

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    const contem = produtos.filter((p) => p.nome === produto.nome);

    if (contem.length == 1) {
      produtos.map((p) => {
        if (p.nome === produto.nome) {
          p.quantidade += produto.quantidade;
          localStorage.setItem("produtos", JSON.stringify(produtos));
          return;
        }
      });
    } else {
      produtos.push(produto);
      localStorage.setItem("produtos", JSON.stringify(produtos));
      localStorage.removeItem("produto");
    }
  };

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
            nome={format.formatWords(product.nome)}
            descricao={product.descricao}
            valor={format.formatForReal(product.valor)}
            categoria={format.formatWords(product.categoria)}
          />
        </div>

        <div className={style.containerComprar}>
          <Quantity product={product} />
          <Button onClick={this.addToFridge}>
            Adicionar à Geladeira
          </Button>
          <Button onClick={this.addToFridge}>
            Comprar Agora
          </Button>
        </div>
      </div>
    );
  }
}
