import styled from 'styled-components';

const Button  = styled.button`
    color: var(--dark);

    margin-top: 1rem;

    border: none;
    border-radius: 12px;

    padding: .5rem;

    background-color: var(--green-light);

    cursor: pointer;

    transition: 0.3s;

    &:hover {
    background-color: var(--green-400);
    };
`;
export default Button;