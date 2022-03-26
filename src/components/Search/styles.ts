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

interface PropsContainerRows {
  showList: boolean;
}

export const ContainerRows = styled.div<PropsContainerRows>`
  display: ${({ showList }) => (showList ? "inherit" : "none")};
  position: absolute;
  margin-top: 0.3rem;

  width: 100%;
  height: fit-content;

  border: 1px solid #ccc;
  border-top: 0px;
  border-radius: 0 0 0.5rem 0.5rem;

  background: #fff;
  padding: 0.2rem;
  z-index: 1;

  > div {
    z-index: 1;
    width: 100%;
    height: fit-content;
    max-height: 30rem;
    overflow-y: auto;
    padding: 0.5rem;

    > a {
      display: flex;
      align-items: center;

      height: 72px;
      width: 100%;

      padding: 0.5rem;
      font-size: 1rem;

      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      border-radius: 0.8rem;

      box-shadow: 3px 3px 5px #01010044;

      &:hover {
        background: #0101;
      }

      & + a {
        margin-top: 1rem;
      }

      > img {
        width: 5rem;
        border: 1px solid #ddd;
      }

      > span {
        margin-left: 1rem;
      }
    }
  }
`;
