import * as React from "react";
import { symbols } from "~/components/icon/symbols";
import { IconProps } from "~/components/icon/types";
import { StyledSVG } from "~/components/icon/styled";

export default class Icon extends React.Component {
  public props: IconProps;

  public render(): React.ReactNode {
    const { size, symbol } = this.props;

    return (
      <StyledSVG
        aria-hidden="true"
        data-icon="chevron-down"
        role="img"
        size={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path fill="currentColor" d={symbols[symbol]} />
      </StyledSVG>
    );
  }
}
