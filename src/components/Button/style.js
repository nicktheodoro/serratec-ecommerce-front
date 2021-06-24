import styled from "styled-components";

const Button = styled.button`
  color: var(--white);

  margin-top: 1rem;

  border: none;
  border-radius: 12px;

  padding: 0.5rem;

  width: 400px;

  background-color: var(--green-400);

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: var(--green-light);
  }
`;

export default Button;
