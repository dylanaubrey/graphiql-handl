import * as React from "react";
import { StyledSVG } from "~/components/icon/styled";
import { symbols } from "~/components/icon/symbols";
import { IconProps } from "~/components/icon/types";

export default class Icon extends React.Component {
  public props: IconProps;

  public render(): JSX.Element {
    const { height, symbol, width } = this.props;

    return (
      <StyledSVG
        height={height}
        preserveAspectRatio="xMinYMax meet"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={symbols[symbol].viewBox}
        width={width}
      >
        <path fill="currentColor" d={symbols[symbol].path} />
      </StyledSVG>
    );
  }
}
