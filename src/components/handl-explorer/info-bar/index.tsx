import { getActiveOperation } from "../../../selectors/active-operation";
import * as React from "react";
import styled from "styled-components";
import { InfoBarGroups, InfoBarProps } from "./types";
import { getActiveDataEntitiesCount } from "../../../selectors/active-data-entites-count";
import { getActiveHandlID } from "../../../selectors/active-handl-id";
import { connect, DispatchProp } from "react-redux";
import { QUOTE } from "../../../constants/misc";
import { getActiveOperationName } from "../../../selectors/active-operation-name";
import { getActiveQueryPathsCount } from "../../../selectors/active-query-paths-count";
import { getActiveResponsesCount } from "../../../selectors/active-responses-count";
import { ReduxState } from "../../../types";

const Section = styled.section`
  display: table;
  width: 100%;
`;

const Group = styled.div`
  background-color: #333;
  border: 1px solid #111;
  display: table-cell;
  padding: 0 5px;
`;

const Label = styled.span`
  color: #ccc;
  display: block;
  font-size: 12px;
`;

const Quote = styled.span`
  animation:
    typing 10s steps(116, end),
    blink-caret 0.75s step-end infinite;
  border-right: 2px solid #fff;
  display: inline-block;
  font-size: 15px;
  overflow: hidden;
  vertical-align: bottom;
  white-space: nowrap;

  @keyframes typing {
    from { width: 0; }
    to { width: 960px; }
  }

  @keyframes blink-caret {
    from,
    to { border-color: transparent; }
    50% { border-color: #fff; }
  }
`;

const Value = styled.span`
  display: block;
  font-size: 15px;
`;

export class InfoBar extends React.Component {
  public props: InfoBarProps;

  public render(): React.ReactNode {
    const { dataEntities, handlID, operation, operationName, queryPaths, responses } = this.props;
    const groups = { handlID, operation, operationName, responses, queryPaths, dataEntities };

    if (!handlID) {
      return (
        <Section>
          <Group>
            <Label>{"Handl:"}</Label>
            <Quote>{QUOTE}</Quote>
          </Group>
        </Section>
      );
    }

    return (
      <Section>
        {Object.keys(groups).map((key: InfoBarGroups) => (
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
  dataEntities: getActiveDataEntitiesCount(state),
  handlID: getActiveHandlID(state),
  operation: getActiveOperation(state),
  operationName: getActiveOperationName(state),
  queryPaths: getActiveQueryPathsCount(state),
  responses: getActiveResponsesCount(state),
});

export default connect<InfoBarProps, DispatchProp<any>>(mapStateToProps)(InfoBar);
