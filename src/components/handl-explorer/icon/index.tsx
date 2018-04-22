import * as React from "react";
import styled from "styled-components";
import { symbols } from "./symbols";
import { IconProps, SVGProps } from "./types";

const StyledSVG = styled<SVGProps & React.SVGProps<SVGSVGElement>, "svg">("svg")`
  display: inline-block;
  font-size: inherit;
  overflow: visible;
  width: ${({ size }) => size === "lg" ? "40px" : size === "md" ? "30px" : "20px"};
`;

export default class Icon extends React.Component {
  public props: IconProps;

  public render(): React.ReactNode {
    return (
      <StyledSVG
        aria-hidden="true"
        data-icon="chevron-down"
        role="img"
        size={this.props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path fill="currentColor" d={symbols[this.props.symbol]} />
      </StyledSVG>
    );
  }
}
