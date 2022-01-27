import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 0.8rem 2rem;
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;

  margin-left: 1rem;

  > svg {
    font-size: 1.6rem;
    margin: 0 0.5rem;
  }

  > p {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
  }
`;
