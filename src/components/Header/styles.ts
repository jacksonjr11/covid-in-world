import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0.8rem 2rem;

  @media (max-width: 975px) {
    flex-direction: column;
    padding: 0;
    > div {
      margin: 1rem 0;

      &:last-child {
        margin: -0.5rem 0 2rem 0;
      }
    }
  }
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;

  margin-left: 1rem;

  & + div {
    width: 90%;
  }

  &:last-child{
    width: auto;
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

  > p {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: var(--black);
  }
`;
