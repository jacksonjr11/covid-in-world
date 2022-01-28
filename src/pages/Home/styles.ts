import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
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

    &:hover {
      background: #ccc;
    }

    > svg {
      font-size: 1.8rem;
    }
  }
`;

export const ContainerData = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:first-child {
    width: 28%;
    align-items: center;
  }

  > p {
    margin: 1rem auto;
  }

  > div + div {
    margin-top: 1.5rem;
  }
`;

export const SectionToday = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
