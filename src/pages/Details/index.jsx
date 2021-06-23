import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import API from "../../services/api";
import Product from "../../models/Product";
import format from "../../utils/format";

import style from "./index.module.scss";
import Button from "../../components/BuyNow/index";

export default class Details extends React.Component {
  
  state = {
    product: {},
  };

  async componentDidMount() {

    const { nome } = this.props.match.params;

    const response = await API.get(`/produto/nome?nome=${nome}`);
    this.setState({ product: new Product(response.data) });
    console.log()
  }

  render() {

  const  { product } = this.state;

  return (
    <Container className={style.detailsContainer}>
      <Row className={style.row}>
        <Col lg={5}>
          <img
            src={`https://ecommerce-serratec.herokuapp.com/produto/${product.nome}/imagem`}
            alt="cerveja"
          />
        </Col>
        <Col lg={4}>
          <h3><strong>{product.nome}</strong></h3>
          <p>
          {product.descricao}
          </p>
          <p><strong>{format.formatForReal(product.valor)}</strong></p>
          <p>{product.categoria}</p>
        </Col>
        <Col lg={3} className={style.formContainer}>
          <form action="">
            <div className={style.formGroup}>
              <label for="estoque">Qtd em Estoque:</label>
              <input type="text" name="estoque" id="estoque" readOnly />
            </div>
            <div className={style.formGroup}>
              <label for="pedido">Qtd Pedida:</label>
              <input type="text" name="pedido" id="pedido" />
            </div>
            <div className={style.formGroup}>
              <label for="frete">Calcular Frete:</label>
              <input type="text" name="frete" id="frete" />
            </div>
            <div className={style.buttons}>
              <input type="submit" value="Adicionar ao carrinho" />
              <Button>Comprar agora</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
  }
};
