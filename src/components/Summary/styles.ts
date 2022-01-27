import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  svg,p,strong {
    color: var(--gray);
  }

  > svg {
    font-size: 3rem;
    font-weight: bold;
  }
  
  > div {
    margin-left: 1rem;
  }

  strong {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  p {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    margin-top: 0.1rem;
    font-weight: 100;
  }
`;
