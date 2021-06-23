import styled from "styled-components";

export const Card = styled.div`
    
    width: 280px;
    height: 450px;
    border-radius: 3px;
    box-shadow: 0 0 3px black;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    align-self: center;
   
    :hover{
        box-shadow: 0 0 15px black;
    }
  
`;

export const ImagemCard = styled.img`
    height: 50% ;
    margin: 0 auto;
    margin-top: 1rem;
`;

export const ContainerMain = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    width: 1300px;
    margin: auto;
    display: grid;
    justify-content: space-around;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px 30px;
    @media (max-width: 1024px){
        width: 100%;
        grid-template-columns: auto auto auto;
    }
    @media (max-width: 768px){
        width: 100%;
        grid-template-columns: auto auto;
    }
    @media (max-width: 600px){
        width: 100%;
        grid-template-columns: auto;
    }
`;

export const Conteudo = styled.div`
    padding: 10px;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;