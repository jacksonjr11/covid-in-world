import React from "react";
import { IconType } from "react-icons/lib";
import { Container } from "./styles";

type Component = () => JSX.Element;

interface Props {
  icon: IconType | Component;
  description: string;
  data: number | string;
}

export function Summary({ icon, data, description }: Props) {
  return (
    <Container>
      {React.createElement(icon)}
      <div>
        <strong>
          {typeof data == "string"
            ? data
            : new Intl.NumberFormat("pt-BR").format(data)}
        </strong>
        <p>{description}</p>
      </div>
    </Container>
  );
}
