import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > input {
    background-color: var(--white);
    padding: 8px 30px 8px 8px;
    width: 37rem;
    height: 42px;
    max-width: 586px;
    border-radius: 4px;
    border: 1px solid #000;
  } 

  svg {
    position: absolute;
    font-size: 1.2rem;
    color: #000;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.3rem;
  }
`;
