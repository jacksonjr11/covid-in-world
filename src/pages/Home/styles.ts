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

  @media (max-width: 975px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;

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

  @media (max-width: 975px) {
    align-items: center;
    justify-content: center;
    padding: 1.2rem;

    &:first-child {
      width: fit-content;
      align-items: center;
    }

    p + div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

  
  }
`;

export const SectionToday = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  > div {
    width: 100%;
  }

  > p {
    margin: 1rem auto 2rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media (max-width: 975px) {
    margin-top: 2rem;
    flex-direction: column;

    > div {
      display: grid;
      grid-template:
        "areaTop1 areaTop2"
        "areaBottom areaBottom";
      gap: 1rem;
      padding: 1.5rem;

      > div {
        grid-area: areaTop1;
      }
      > div + div {
        grid-area: areaTop2;
      }
      > div:last-child {
        grid-area: areaBottom;
        margin: auto;
      }
    }
  }
`;
