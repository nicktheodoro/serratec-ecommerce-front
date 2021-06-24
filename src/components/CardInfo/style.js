import styled from "styled-components";

const DivContainer = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;

  padding: 1rem;

  h1 {
    margin-top: 1rem;
  }

  h1 + p {
    margin-top: 1rem;
  }
`;

export default DivContainer;
