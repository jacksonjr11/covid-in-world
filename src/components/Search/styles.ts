import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  max-width: 586px;

  > input {
    background-color: var(--white);
    padding: 8px 30px 8px 8px;
    width: 100%;
    height: 100%;
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

export const ContainerRows = styled.div`
  position: absolute;
  margin-top: 0.3rem;

  width: 100%;
  height: fit-content;

  border: 1px solid black;
  border-radius: 0 0 0.5rem 0.5rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: fit-content;

  &:not(:first-child){

  }
`