import React, { useState } from "react";
import styled from "styled-components";

export default function Quantity() {
  const [quantidade, setQuantidade] = useState(1);

  const handleAdd = () => {
    setQuantidade(quantidade + 1);
  };

  const handleRmv = () => {
    if(quantidade === 1) {
      return
    }
    setQuantidade(quantidade - 1);
  };

  return (
    <Container>
      <span>Quantidade:</span>
      <button className="button-add" onClick={handleRmv}>-</button>
      <input type="text" value={quantidade} min="1" max="999" />
      <button className="button-rmv" onClick={handleAdd}>+</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 80px;
    height: 2rem;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    margin-left: 1rem;

    color: #00b34f;
    text-align: center;
  }

  .button-add {
    position: absolute;
    left: 63%;
    border: none;
    background: transparent;
  }

  .button-rmv {
    position: absolute;
    left: 90%;
    border: none;
    background: transparent;
  }
`;
