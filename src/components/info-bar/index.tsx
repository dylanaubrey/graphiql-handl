import * as React from "react";
import { connect, DispatchProp } from "react-redux";

import {
  InfoBarCell,
  InfoBarCellValue,
  InfoBarQuote,
  InfoBarTable,
} from "~/components/info-bar/styled";

import { InfoBarProps } from "~/components/info-bar/types";
import { Label } from "~/components/styled";
import { QUOTE } from "~/constants/misc";
import { getActiveOperationName } from "~/selectors/active-operation-name";
import { getActiveDataEntitiesCount } from "~/selectors/active-data-entites-count";
import { getActiveDuration } from "~/selectors/active-duration";
import { getActiveHandlID } from "~/selectors/active-handl-id";
import { getActiveOperation } from "~/selectors/active-operation";
import { getActiveQueryPathsCount } from "~/selectors/active-query-paths-count";
import { getActiveResponsesCount } from "~/selectors/active-responses-count";
import { getActiveStartTime } from "~/selectors/active-start-time";
import { ReduxState } from "~/types";

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
        <InfoBarTable>
          <InfoBarCell>
            <Label>{"Handl:"}</Label>
            <InfoBarQuote>{QUOTE}</InfoBarQuote>
          </InfoBarCell>
        </InfoBarTable>
      );
    }

    return (
      <InfoBarTable>
        <InfoBarCell key="activeRequest">
          <Label>{"Active request:"}</Label>
          <InfoBarCellValue>{handlID}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="time">
          <Label>{"time:"}</Label>
          <InfoBarCellValue>{startTime}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="duration">
          <Label>{"duration:"}</Label>
          <InfoBarCellValue>{`${duration}ms`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="operation">
          <Label>{"operation:"}</Label>
          <InfoBarCellValue>{operation}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="operationName">
          <Label>{"operaton name:"}</Label>
          <InfoBarCellValue>{operationName}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="responses">
          <Label>{"response cache:"}</Label>
          <InfoBarCellValue>{`${responses} ${InfoBar._getEntriesText(responses)} added`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="queryPaths">
          <Label>{"query path cache:"}</Label>
          <InfoBarCellValue>{`${queryPaths} ${InfoBar._getEntriesText(queryPaths)} added`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="dataEntities">
          <Label>{"data entities cache:"}</Label>
          <InfoBarCellValue>{`${dataEntities} ${InfoBar._getEntriesText(dataEntities)} added`}</InfoBarCellValue>
        </InfoBarCell>
      </InfoBarTable>
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
