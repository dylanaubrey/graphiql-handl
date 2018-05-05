import * as React from "react";
import styled from "styled-components";
import { connect, DispatchProp } from "react-redux";
import { QUOTE } from "~/constants/misc";
import { getActiveDataEntitiesCount } from "~/selectors/active-data-entites-count";
import { getActiveDuration } from "~/selectors/active-duration";
import { getActiveHandlID } from "~/selectors/active-handl-id";
import { getActiveOperation } from "~/selectors/active-operation";
import { getActiveOperationName } from "~/selectors/active-operation-name";
import { getActiveQueryPathsCount } from "~/selectors/active-query-paths-count";
import { getActiveResponsesCount } from "~/selectors/active-responses-count";
import { getActiveStartTime } from "~/selectors/active-start-time";
import { ReduxState } from "~/types";
import { InfoBarProps } from "~/components/info-bar/types";

const Table = styled.div`
  display: table;
  width: 100%;
`;

const TableCell = styled<
  { active?: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
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
  private static _getEntriesText(count: number): string {
    return count === 1 ? "entry" : "entries";
  }

  public props: InfoBarProps;

  public render(): React.ReactNode {
    const {
      dataEntities,
      duration,
      handlID,
      operation,
      operationName,
      queryPaths,
      responses,
      startTime,
    } = this.props;

    if (!handlID) {
      return (
        <Table>
          <TableCell>
            <Label>{"Handl:"}</Label>
            <Quote>{QUOTE}</Quote>
          </TableCell>
        </Table>
      );
    }

    return (
      <Table>
        <TableCell key="lastRequest">
          <Label>{"last request:"}</Label>
          <Value>{handlID}</Value>
        </TableCell>
        <TableCell key="time">
          <Label>{"time:"}</Label>
          <Value>{startTime}</Value>
        </TableCell>
        <TableCell key="duration">
          <Label>{"duration:"}</Label>
          <Value>{`${duration}ms`}</Value>
        </TableCell>
        <TableCell key="operation">
          <Label>{"operation:"}</Label>
          <Value>{operation}</Value>
        </TableCell>
        <TableCell key="operationName">
          <Label>{"operaton name:"}</Label>
          <Value>{operationName}</Value>
        </TableCell>
        <TableCell key="responses">
          <Label>{"response cache:"}</Label>
          <Value>{`${responses} ${InfoBar._getEntriesText(responses)} added`}</Value>
        </TableCell>
        <TableCell key="queryPaths">
          <Label>{"query path cache:"}</Label>
          <Value>{`${queryPaths} ${InfoBar._getEntriesText(queryPaths)} added`}</Value>
        </TableCell>
        <TableCell key="dataEntities">
          <Label>{"data entities cache:"}</Label>
          <Value>{`${dataEntities} ${InfoBar._getEntriesText(dataEntities)} added`}</Value>
        </TableCell>
      </Table>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  dataEntities: getActiveDataEntitiesCount(state),
  duration: getActiveDuration(state),
  handlID: getActiveHandlID(state),
  operation: getActiveOperation(state),
  operationName: getActiveOperationName(state),
  queryPaths: getActiveQueryPathsCount(state),
  responses: getActiveResponsesCount(state),
  startTime: getActiveStartTime(state),
});

export default connect<InfoBarProps, DispatchProp<any>>(mapStateToProps)(InfoBar);
