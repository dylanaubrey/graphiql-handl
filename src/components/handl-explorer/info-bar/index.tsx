import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import styled from "styled-components";
import { InfoBarProps } from "./types";
import { getHandlID } from "../../../selectors/get-handl-id";
import { getOperation } from "../../../selectors/get-operation";
import { getOperationName } from "../../../selectors/get-operation-name";
import { ReduxState } from "../../../types";

const Section = styled.section`
  display: table;
  width: 100%;
`;

const Group = styled.div`
  display: table-cell;
  padding: 0 5px;
`;

const Label = styled.span`
  color: #ccc;
  display: block;
  font-size: 12px;
`;

const Value = styled.span`
  display: block;
  font-size: 15px;
`;

export class InfoBar extends React.Component {
  public props: InfoBarProps;

  public render(): React.ReactNode {
    const { handlID, operation, operationName } = this.props;

    return (
      <Section>
        {Object.keys({ handlID, operation, operationName }).map((key: "handlID" | "operation" | "operationName") => (
          <Group key={key}>
            <Label>{`${key}:`}</Label>
            <Value>{this.props[key]}</Value>
          </Group>
        ))}
      </Section>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  handlID: getHandlID(state),
  operation: getOperation(state),
  operationName: getOperationName(state),
});

export default connect<InfoBarProps, DispatchProp<any>>(mapStateToProps)(InfoBar);
