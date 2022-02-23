import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  height: fit-content;
  margin: 0 auto;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    padding: 4px;
    border: 0;
    border-radius: 50%;

    &:first-child {
      margin-right: 1rem;
    }

    &:last-child {
      margin-left: 1rem;
    }

    &:not(:disabled):hover {
      background: #dcdcdc;
    }

    > svg {
      font-size: 1.8rem;
    }
  }

  p {
    width: fit-content;
    min-width: 10rem;
    text-align: center;
  }
`;

export const ContainerData = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  h1 {
    width: max-content;
    margin-bottom: 1rem;
  }

`;

export const Division = styled.div`
  width: fit-content;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > p {
    margin: 1rem auto 2rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  &:first-child {
    width: 28%;
    align-items: center;
  }

  > div + div {
    margin-top: 1.5rem;
  }


`;

export const SectionToday = styled.section`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > div {
    width: 100%;
  }

  > p {
    margin: 1rem auto 2rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

 
`;
