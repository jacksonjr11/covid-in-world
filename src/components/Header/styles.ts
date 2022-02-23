import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  padding: 0.8rem 2rem;
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
 
  &:first-child + div {
    width: 35rem;
  }

  > svg {
    margin: 0 0.5rem;
    color: var(--black);

    &:first-child {
      font-size: 2.3rem;
    }

    &:last-child {
      font-size: 1.6rem;
    }
  }

  > p, a {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
  }
`;
